import { Phone, Mail, Instagram } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Contact() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="contact" className="w-full py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 data-aos="fade-zoom-in" data-aos-delay="100" className="text-4xl font-bold mb-4 text-gray-800">Get In Touch</h2>
          <div data-aos="fade-zoom-in" data-aos-delay="100" className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p data-aos="fade-zoom-in" data-aos-delay="100" className="text-gray-600 text-lg max-w-2xl mx-auto">
            Interested in working together or just want to say hello? Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Phone */}
          <a
            data-aos="fade-zoom-in" data-aos-delay="100"
            href="tel:+81 80-5834-4559"
            className="group flex flex-col items-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
              <Phone size={28} className="text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Phone</h3>
            <p className="text-gray-600 text-center mb-4">Call or text me</p>
            <span className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors">+81 80-5834-4559</span>
          </a>

          {/* Email */}
          <a
            data-aos="fade-zoom-in" data-aos-delay="100"
            href="mailto:aguswidodo1197@gmail.com"
            className="group flex flex-col items-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
              <Mail size={28} className="text-red-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Email</h3>
            <p className="text-gray-600 text-center mb-4">Send me a message</p>
            <span className="text-red-600 font-medium group-hover:text-red-800 transition-colors break-all">aguswidodo1197@gmail.com</span>
          </a>

          {/* Instagram */}
          <a
            data-aos="fade-zoom-in" data-aos-delay="100"
            href="https://www.instagram.com/agus_phto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="w-16 h-16 rounded-full bg-pink-50 flex items-center justify-center mb-5 group-hover:bg-pink-100 transition-colors">
              <Instagram size={28} className="text-pink-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Instagram</h3>
            <p className="text-gray-600 text-center mb-4">Follow my work</p>
            <span className="text-pink-600 font-medium group-hover:text-pink-800 transition-colors">@agus_photo</span>
          </a>
        </div>

        {/* Additional note */}
        <p data-aos="fade-zoom-in" data-aos-delay="100" className="text-center text-gray-500 mt-12 text-sm">
          I typically respond to all messages within 24 hours.
        </p>
      </div>
    </section>
  );
}