import { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiInstagram } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll ke bawah → sembunyikan navbar
        setShowNavbar(false);
      } else {
        // Scroll ke atas → tampilkan navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -110 }} // animasi naik-turun
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-gray-800 shadow-md px-8 py-6 md:px-20 md:py-8 w-full z-50 fixed top-0 left-0"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          {/* <img
            src={Logo}
            alt="Profile"
            className="w-12 h-12 object-cover md:w-20 md:h-20"
          /> */}
          <p className="text-sm sm:text-lg md:text-[27px] font-[Poppins] font-bold text-[#EEEEEE]">
            Agus Photography
          </p>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="w-8 h-8" color="#eeeeee" />
            ) : (
              <Menu className="w-6 h-6" color="#eeeeee" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:justify-end">
          <ul className="flex gap-10 font-semibold text-[16px] text-[#EEEEEE] font-[Poppins]">
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden min-h-screen flex flex-col items-center justify-center gap-2"
          >
            <Link
              to="/home"
              className="block text-[#EEEEEE] hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-[#EEEEEE] hover:text-blue-600 transition"
            >
              About
            </Link>
            <Link
              to="/works"
              className="block text-[#EEEEEE] hover:text-blue-600 transition"
            >
              Works
            </Link>
            <Link
              to="/contact"
              className="block text-[#EEEEEE] hover:text-blue-600 transition mb-10"
            >
              Contact
            </Link>
            <div className="flex gap-2 items-center">
              <button>
                <SiInstagram className="w-7 h-7" color="#eeeeee" />
              </button>
              <button>
                <MdOutlineEmail className="w-8 h-8" color="#eeeeee" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
