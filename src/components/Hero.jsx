import { ArrowRight } from "lucide-react";
import HeroImage from "../assets/images/Landscape_1.jpg"; // ganti dengan gambar kamu
import AgusImage from "../assets/images/agus.png";

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
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-52 flex flex-col md:flex-row items-center">
        {/* Text */}
        <div className="flex-1 text-center md:text-left text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Capturing any beautiful moment inside lens.
          </h1>
          <p className="text-xl md:text-3xl mb-6 text-yellow-500 font-bold">
            Profesional Photographer
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
          </div> */}
        </div>
      </div>
    </section>
    // <section className="relative bg-gray-50">
    //   {/* Background image */}
    //   <div className="absolute inset-0">
    //     {/* <img
    //       src={HeroImage}
    //       alt="Hero"
    //       className="w-full h-full object-cover opacity-80"
    //     /> */}
    //     <div className="absolute inset-0 bg-gray-800"></div>
    //   </div>

      // {/* Content */}
      // <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center">
      //   {/* Text */}
      //   <div className="flex-1 text-center md:text-center text-white">
      //     <p className="text-2xl md:text-4xl font-semibold leading-tight mb-4 font-[Poppins]">
      //       My Name is
      //     </p>

      //     <p className="text-4xl md:text-6xl font-bold leading-tight mb-4">
      //       Agus Kanto
      //     </p>

      //     <p className="text-3xl xm:text-4xl md:text-4xl text-[#FFFF35]">
      //       professional photography
      //     </p>
      //   </div>

      //   {/* Profile Image */}
      //   <div className="flex-1 mt-10 md:mt-0 flex justify-center">
      //     <img
      //       src={AgusImage}
      //       alt="Profile"
      //       className="w-64 h-64 md:w-70 md:h-100 object-cover rounded-full"
      //     />
      //   </div>
      // </div>
    // </section>
  );
}
