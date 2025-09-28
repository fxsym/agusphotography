import { useEffect, useState } from "react";
import HeroImage from "../assets/images/Landscape_1.jpg";
import AgusImage from "../assets/images/agus.png";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // hitung scale berdasarkan scroll
  const scale = 1 + Math.min(scrollY / 1000, 0.07); // max scale 1.07

  return (
    <section className="relative h-screen w-full overflow-hidden" id="home">
      {/* Background image dengan efek zoom */}
      <div className="absolute inset-0">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full h-full object-cover transition-transform duration-200 ease-out"
          style={{
            transform: `scale(${scale})`,
            objectPosition: "30% center"  // geser 30% dari kiri
          }}
        />

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-row items-center justify-center text-center md:text-left">
        <div className="flex-1 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 font-[Abel]">
            Capturing any beautiful moment inside lens.
          </h1>
          <p className="text-xl md:text-3xl mb-6 text-yellow-500 font-bold font-[Abel]">
            Profesional Photographer
          </p>
        </div>
      </div>
    </section>
  );
}
