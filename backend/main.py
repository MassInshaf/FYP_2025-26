from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from PIL import Image, UnidentifiedImageError
import io
import numpy as np
import tensorflow as tf
import json
import os
import uvicorn
import logging
import traceback

# ==============================
# CONFIG
# ==============================
IMG_SIZE = 128

GEM_MODEL_PATH = "./model/gem_Classification_Model.h5"
SHAPE_MODEL_PATH = "./model/gem_Shape_Classification_Model.h5"

GEM_CLASS_MAP = "./model/gem_stones_classes.json"
SHAPE_CLASS_MAP = "./model/gem_shapes_classes.json"

# ==============================
# Logging
# ==============================
logging.basicConfig(level=logging.INFO)

# ==============================
# FastAPI App
# ==============================
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==============================
# Load Models
# ==============================
if not os.path.exists(GEM_MODEL_PATH):
    raise FileNotFoundError(GEM_MODEL_PATH)

if not os.path.exists(SHAPE_MODEL_PATH):
    raise FileNotFoundError(SHAPE_MODEL_PATH)

gem_model = tf.keras.models.load_model(GEM_MODEL_PATH)
shape_model = tf.keras.models.load_model(SHAPE_MODEL_PATH)

logging.info("✅ Gem model loaded")
logging.info("✅ Shape model loaded")

# ==============================
# Load Class Maps
# ==============================
with open(GEM_CLASS_MAP, "r") as f:
    gem_class_map = json.load(f)

with open(SHAPE_CLASS_MAP, "r") as f:
    shape_class_map = json.load(f)

# index → label
GEM_CLASSES = {v: k for k, v in gem_class_map.items()}
SHAPE_CLASSES = {v: k for k, v in shape_class_map.items()}

logging.info("✅ Class maps loaded")

# ==============================
# Preprocessing
# ==============================
def preprocess_image(img: Image.Image):
    img = img.convert("RGB")
    img = img.resize((IMG_SIZE, IMG_SIZE))
    img_array = np.array(img, dtype=np.float32) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

# ==============================
# Prediction Endpoint
# ==============================
@app.post("/predict/")
async def predict(file: UploadFile = File(...)):
    try:
        contents = await file.read()

        try:
            img = Image.open(io.BytesIO(contents))
        except UnidentifiedImageError:
            return JSONResponse(
                status_code=400,
                content={"error": "Invalid image file"}
            )

        # Preprocess (RGB for BOTH models)
        img_tensor = preprocess_image(img)

        # Predict
        gem_pred = gem_model.predict(img_tensor)[0]
        shape_pred = shape_model.predict(img_tensor)[0]

        # Results
        gem_index = int(np.argmax(gem_pred))
        shape_index = int(np.argmax(shape_pred))

        gem_label = GEM_CLASSES[gem_index]
        shape_label = SHAPE_CLASSES[shape_index]

        gem_conf = float(gem_pred[gem_index])
        shape_conf = float(shape_pred[shape_index])

        logging.info(f"💎 Gem: {gem_label} ({gem_conf:.4f})")
        logging.info(f"🔷 Shape: {shape_label} ({shape_conf:.4f})")

        return {
            "gem": {
                "index": gem_index,
                "label": gem_label,
                "confidence": round(gem_conf, 4)
            },
            "shape": {
                "index": shape_index,
                "label": shape_label,
                "confidence": round(shape_conf, 4)
            }
        }

    except Exception as e:
        logging.error(traceback.format_exc())
        return JSONResponse(
            status_code=500,
            content={"error": str(e)}
        )

# ==============================
# Run Server
# ==============================
if __name__ == "__main__":
    logging.info("🚀 FastAPI running at http://127.0.0.1:8000")
    uvicorn.run(app, host="127.0.0.1", port=8000)
