import AgusImage from "../assets/images/agus.png";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Description() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
     AOS.init();
  }, []);

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between" id="about">

      {/* Profile Image with enhanced styling */}
      <div data-aos="fade-zoom-in" data-aos-delay="100" className={`order-0 md:order-1 flex-1 mb-12 md:mb-0 flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative">
          <div className="absolute -inset-4 border-4 border-gray-800 rounded-full transform rotate-6"></div>
          <img
            src={AgusImage}
            alt="Professional Photographer"
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover object-top rounded-full z-10 shadow-xl"
          />
          <div className="absolute -bottom-4 -right-4 bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold z-20">
            5+ Years Experience
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className={`flex-1 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-aos="fade-zoom-in" data-aos-delay="100">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-2">
            Hello, I'm Agus
          </h1>
          <div className="w-20 h-1 bg-gray-800 mx-auto md:mx-0 mb-6"></div>
          <p className="text-lg md:text-xl text-gray-800 font-medium max-w-2xl leading-relaxed text-justify md:text-left">
            I am a professional photographer who focuses on capturing precious moments and transforming them into meaningful visual artworks. With over 5 years of experience, I have worked on various projects ranging from pre-wedding, portrait, product, to commercial photography.
          </p>
          <p className="text-lg md:text-xl text-gray-800 font-medium mt-4 max-w-2xl leading-relaxed text-justify md:text-left">
            For me, every photo is not just an image, but a story that needs to be told and preserved.
          </p>

          {/* Specialties */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            {['Pre-Wedding', 'Travel', 'Family', 'Commercial'].map((specialty, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}