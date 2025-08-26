import { ArrowRight } from "lucide-react";
import HeroImage from "../assets/images/heroImage.jpg"; // ganti dengan gambar kamu
import AgusImage from "../assets/images/agus.png"; 

export default function Hero() {
  return (
    <section className="relative bg-gray-50">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* <img
          src={HeroImage}
          alt="Hero"
          className="w-full h-full object-cover opacity-80"
        /> */}
        <div className="absolute inset-0 bg-gray-800"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center">
        {/* Text */}
        <div className="flex-1 text-center md:text-center text-white">
          <p className="text-2xl md:text-4xl font-semibold leading-tight mb-4 font-[Poppins]">
            My Name is
          </p>

          <p className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Agus Kanto
          </p>

          <p className="text-3xl xm:text-4xl md:text-4xl text-[#FFFF35]">
            professional photography
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src={AgusImage}
            alt="Profile"
            className="w-64 h-64 md:w-70 md:h-100 object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
