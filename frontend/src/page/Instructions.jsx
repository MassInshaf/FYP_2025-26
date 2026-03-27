import React from "react";
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";
import background from "../assets/background.png"; 

function Instructions() {
  return (
    <>
      <Topnav />

      <main
        className="min-h-screen bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Dark overlay for perfect text readability */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
                Image Upload Guidelines
              </h1>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto drop-shadow-sm">
                Follow these simple steps to get the most accurate results from GemAnalyzer.
              </p>
            </div>

            {/* Main Instructions Card – glassmorphism style */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/30 p-8 md:p-12">
              <div className="space-y-10 text-gray-800">
                {/* Step 1 - Format */}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Supported File Formats
                    </h3>
                    <p className="leading-relaxed">
                      Use only <strong>PNG</strong> or <strong>JPG/JPEG</strong> files. 
                      Other formats (HEIC, WEBP, GIF, etc.) are not supported yet.
                    </p>
                  </div>
                </div>

                {/* Step 2 - Size */}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Minimum Image Size
                    </h3>
                    <p className="leading-relaxed">
                      The image should be at least <strong>126 × 126 pixels</strong>.<br />
                      For best accuracy, we recommend <strong>800 pixels or larger</strong> on the shortest side.
                    </p>
                  </div>
                </div>

                {/* Tips Section */}
                <div className="mt-12 pt-10 border-t border-gray-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Tips for Best Results
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <span>Use bright, even lighting — avoid shadows and glare</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <span>Place the gem on a plain, non-reflective surface (white/black paper works best)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✓</span>
                      <span>Make sure the gem fills most of the frame — no extra objects around it</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl">✗</span>
                      <span>Avoid blurry photos, heavy filters, or zoomed-in/cropped images</span>
                    </li>
                  </ul>
                </div>

                {/* Final CTA */}
                <div className="mt-12 text-center">
                  <a
                    href="/imageuploader"
                    className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Go to Upload Page →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Instructions;