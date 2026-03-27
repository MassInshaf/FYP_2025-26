import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";
import background from "../assets/background.png";
import axios from "axios";

const Form = () => {
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [option, setOption] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please upload an image!");
    try {
      const formData = new FormData();
      formData.append("file", image);

      const response = await axios.post(
        "http://localhost:8000/predict/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // ✅ Pass option to determine whether to show shape
      navigate("/result", {
        state: {
          gem_prediction: response.data.gem.label,
          gem_confidence: response.data.gem.confidence,
          shape_prediction: response.data.shape.label,
          shape_confidence: response.data.shape.confidence,
          image: formData.get("file"),
          show_shape: option === "yes",
        },
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Prediction failed. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
  };

  return (
    <>
      <Topnav />

      <div
        className="bg-cover bg-center py-14"
        style={{ backgroundImage: `url(${background})` }}
      >
        <p className="text-4xl font-bold max-w-5xl mx-auto text-center text-gray-900 mb-8">
          Gem Analysis
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg"
        >
          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
              Email Address
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Provide your email if you want to receive your gem analysis report.
            </p>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">Upload your image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-700 file:text-white hover:file:bg-blue-800 cursor-pointer"
            />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Preview"
                className="mt-4 max-h-64 object-contain rounded-lg shadow-md"
              />
            )}
          </div>

          {/* Option Radio */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">
              Do you want to identify the cut of the Gem?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="yes"
                  checked={option === "yes"}
                  onChange={() => setOption("yes")}
                  className="accent-blue-600"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="no"
                  checked={option === "no"}
                  onChange={() => setOption("no")}
                  className="accent-blue-600"
                />
                No
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 text-white font-semibold rounded-full bg-blue-700 hover:bg-blue-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Continue
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Form;
