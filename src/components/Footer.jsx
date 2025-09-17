import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Agus Photography. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="mailto:emailkamu@example.com"
            className="hover:text-white transition"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+628123456789"
            className="hover:text-white transition"
          >
            <Phone size={20} />
          </a>
          <a
            href="https://instagram.com/usernamekamu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
