import { ArrowRight } from "lucide-react";
import HeroImage from "../assets/images/heroImage.jpg"; // ganti dengan gambar kamu

export default function Hero() {
  return (
    <section className="relative bg-gray-50">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center">
        {/* Text */}
        <div className="flex-1 text-center md:text-left text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Halo, Saya <span className="text-blue-400">Fatih Syamsudin</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Seorang <span className="font-semibold">Informatics Student</span> 
            yang suka membangun aplikasi modern dengan React, Flutter, dan Machine Learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
            >
              Lihat Project <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 border border-white hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src={HeroImage}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
