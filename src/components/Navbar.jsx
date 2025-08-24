import { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Mail, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { SiInstagram } from 'react-icons/si';
import { MdOutlineEmail } from 'react-icons/md';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen);

    return (

        // mencoba membuat mengganti bg agar 
        <nav className='bg-primary bg-white shadow-md px-8 py-3 md:px-20 fixed w-full z-50'>
            <div className='flex items-center justify-between'>
                <div className="flex items-center space-x-4">
                    <img
                        src={Logo}
                        alt="Profile"
                        className="w-12 h-12 object-cover md:w-20 md:h-20"
                    />
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* mengganti style nav agar menjadi lebih lebar */}
                <div className="hidden md:flex md:items-center md:justify-end">
                    <ul className="flex gap-10 font-semibold text-[27px] text-[#EEEEEE]">
                      <li>Home</li>
                      <li>About</li>
                      <li>Works</li>
                      <li>Contact</li>
                    </ul>
                </div>

            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden min-h-screen flex flex-col items-center justify-center gap-2"
                    >
                        <Link to="/home" className="block text-gray-700 hover:text-blue-600 transition">Home</Link>
                        <Link to="/about" className="block text-gray-700 hover:text-blue-600 transition">About</Link>
                        <Link to="/works" className="block text-gray-700 hover:text-blue-600 transition">Works</Link>
                        <Link to="/contact" className="block text-gray-700 hover:text-blue-600 transition mb-10">Contact</Link>
                        <div className='flex gap-2 items-center'>
                            <button><SiInstagram className='w-7 h-7' /></button>
                            <button><MdOutlineEmail className='w-8 h-8' /></button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}