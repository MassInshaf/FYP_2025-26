import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";
import gemBackground from "../assets/background.png"; // Keep your existing background

function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    gem_prediction,
    gem_confidence,
    shape_prediction,
    shape_confidence,
    image,
    show_shape,
  } = location.state || {};

  const gemConfidencePercent = (gem_confidence * 100)?.toFixed(1) ?? "—";
  const shapeConfidencePercent = show_shape ? (shape_confidence * 100)?.toFixed(1) ?? "—" : null;

  return (
    <>
      <Topnav />

      <main
        className="min-h-screen flex items-center justify-center py-8 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${gemBackground})`,
          backgroundColor: 'rgba(0, 0, 0, 0.25)', // Slightly darker overlay for better contrast
          backgroundBlendMode: 'multiply',
        }}
      >
        <div className="w-full max-w-sm bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 text-center">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-5">
            Gem Analysis Result
          </h1>

          {/* Uploaded Image - Small & Circular */}
          {image && (
            <div className="mb-5">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white">
                <img
                  src={URL.createObjectURL(image)}
                  alt={gem_prediction || "Gem"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Gem Result */}
          <div className="space-y-3">
            <div>
              <p className="text-gray-600 text-sm">Gem</p>
              <p className="text-2xl font-bold text-blue-700 mt-1">
                {gem_prediction || "Unknown"}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Confidence: <span className="font-semibold">{gemConfidencePercent}%</span>
              </p>
            </div>

            {/* Shape Result (if available) */}
            {show_shape && shape_prediction && (
              <div className="pt-3 border-t border-gray-200">
                <p className="text-gray-600 text-sm">Shape / Cut</p>
                <p className="text-2xl font-bold text-blue-700 capitalize mt-1">
                  {shape_prediction}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Confidence: <span className="font-semibold">{shapeConfidencePercent}%</span>
                </p>
              </div>
            )}
          </div>

          {/* Button */}
          <button
            onClick={() => navigate("/imageuploader")}
            className="mt-7 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-md transition"
          >
            Analyze Another Gem
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Result;