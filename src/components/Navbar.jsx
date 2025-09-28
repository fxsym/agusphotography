// import { useState, useEffect } from "react";
// import Logo from "../assets/images/logo.png";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { SiInstagram } from "react-icons/si";
// import { MdOutlineEmail } from "react-icons/md";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         // Scroll ke bawah → sembunyikan navbar
//         setShowNavbar(false);
//       } else {
//         // Scroll ke atas → tampilkan navbar
//         setShowNavbar(true);
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <motion.nav
//       initial={{ y: 0 }}
//       animate={{ y: showNavbar ? 0 : -110 }} // animasi naik-turun
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className="bg-gray-800 shadow-md px-8 py-6 md:px-20 md:py-8 w-full z-50 fixed top-0 left-0"
//     >
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-4">
//           {/* <img
//             src={Logo}
//             alt="Profile"
//             className="w-12 h-12 object-cover md:w-20 md:h-20"
//           /> */}
//           <p className="text-sm sm:text-lg md:text-[27px] font-[Poppins] font-bold text-[#EEEEEE]">
//             Agus Photography
//           </p>
//         </div>

//         {/* Mobile Button */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {isOpen ? (
//               <X className="w-8 h-8" color="#eeeeee" />
//             ) : (
//               <Menu className="w-6 h-6" color="#eeeeee" />
//             )}
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex md:items-center md:justify-end">
//           <ul className="flex gap-10 font-semibold text-[16px] text-[#EEEEEE] font-[Poppins]">
//             <li>Home</li>
//             <li>About</li>
//             <li>Works</li>
//             <li>Contact</li>
//           </ul>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden min-h-screen flex flex-col items-center justify-center gap-2"
//           >
//             <Link
//               to="/home"
//               className="block text-[#EEEEEE] hover:text-blue-600 transition"
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block text-[#EEEEEE] hover:text-blue-600 transition"
//             >
//               About
//             </Link>
//             <Link
//               to="/works"
//               className="block text-[#EEEEEE] hover:text-blue-600 transition"
//             >
//               Works
//             </Link>
//             <Link
//               to="/contact"
//               className="block text-[#EEEEEE] hover:text-blue-600 transition mb-10"
//             >
//               Contact
//             </Link>
//             <div className="flex gap-2 items-center">
//               <button>
//                 <SiInstagram className="w-7 h-7" color="#eeeeee" />
//               </button>
//               <button>
//                 <MdOutlineEmail className="w-8 h-8" color="#eeeeee" />
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiInstagram } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "works", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  // Navigation items data
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -110 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-gray-800 shadow-md px-8 py-6 md:px-20 md:py-8 w-full z-50 fixed top-0 left-0"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => scrollToSection("home")}
            className="text-sm sm:text-lg md:text-[27px] font-[Abel] font-semibold text-[#EEEEEE] transition-colors"
          >
            Agus Photography
          </button>
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
          <ul className="flex gap-10 font-semibold text-[16px] text-[#EEEEEE] font-[Abel]">
            {navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-[#00ADB5] transition-colors duration-300 ${
                    activeSection === item.id ? "text-[#00ADB5]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
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
            className="md:hidden min-h-screen flex flex-col items-center justify-center gap-2 bg-gray-800 absolute left-0 right-0 top-full pt-10 pb-20"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block text-[18px] py-4 transition-colors duration-300 w-full text-center ${
                  activeSection === item.id 
                    ? "text-[#00ADB5] " 
                    : "text-[#EEEEEE] hover:text-[#00ADB5]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-5 items-center mt-10">
              <a
                href="https://www.instagram.com/agus_phto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-pink-600 transition-colors duration-300"
              >
                <SiInstagram className="w-7 h-7" color="#eeeeee" />
              </a>
              <a
                href="mailto:aguswidodo1197@gmail.com"
                className="p-3 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <MdOutlineEmail className="w-8 h-8" color="#eeeeee" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}