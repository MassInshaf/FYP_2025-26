import React from "react";
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";
import background from "../assets/HomePage.jpg";

function Landingpage() {
  return (
    <>
      <Topnav />

      <section
        className="relative flex items-center justify-center bg-cover bg-center py-16 md:py-24"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Strong overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/80"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 md:mb-8 drop-shadow-2xl">
            Discover Your Gemstone
            <span className="block text-blue-300 mt-3 md:mt-4">With AI Precision</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-4xl mx-auto mb-8 md:mb-10 leading-relaxed drop-shadow-md">
            Upload a photo and let GemAnalyzer instantly identify the gem type, cut, and quality
            using advanced artificial intelligence.
          </p>

          <a
            href="/imageuploader"
            className="inline-flex items-center px-8 py-4 md:px-12 md:py-5 bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl font-semibold rounded-full shadow-xl shadow-blue-900/30 hover:shadow-2xl hover:shadow-blue-900/50 transition-all duration-300 hover:scale-105"
          >
            Start Analyzing Now →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Landingpage;