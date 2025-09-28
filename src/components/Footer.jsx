import { Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="w-full bg-gray-900 text-gray-300 h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl flex flex-col items-center text-center">
        {/* Brand */}
        <h3
          data-aos="fade-up"
          className="text-2xl font-bold text-white mb-4 font-[Abel]"
        >
          Agus Photography
        </h3>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-sm md:text-base max-w-xl mb-6 leading-relaxed font-[Abel]"
        >
          Capturing life&apos;s precious moments with creativity and passion.
          Wherever you are, let&apos;s create timeless memories together.
        </p>

        {/* Location */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex items-center text-sm mb-8"
        >
          <MapPin size={16} className="mr-2 text-blue-400" />
          <span className="font-[Abel]">Osaka - Kyoto, Japan</span>
        </div>

        {/* Social Links */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex space-x-5 mb-10"
        >
          <a
            href="mailto:aguswidodo1197@gmail.com"
            className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="tel:+81 80-5834-4559"
            className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
            aria-label="Phone"
          >
            <Phone size={18} />
          </a>
          <a
            href="https://www.instagram.com/agus_phto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 w-full mb-6"></div>

        {/* Bottom note */}
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-xs md:text-sm text-gray-400 font-[Abel]"
        >
          © {new Date().getFullYear()} Agus Photography. Made with{" "}
          <Heart size={14} className="inline-block mx-1 text-red-500" /> and
          gratitude.
          <br />
          Thank you for visiting — let&apos;s tell your story through the lens ✨
        </p>
      </div>
    </footer>

  );
}
