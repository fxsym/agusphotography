import { Phone, Mail, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-10">
          Jika kamu ingin bekerja sama atau sekadar menyapa, hubungi saya melalui kontak berikut:
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Nomor Telepon */}
          <a
            href="tel:+628123456789"
            className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg hover:scale-105 transition"
          >
            <Phone size={32} className="text-blue-500 mb-3" />
            <span className="font-semibold">+62 812-3456-789</span>
          </a>

          {/* Email */}
          <a
            href="mailto:emailkamu@example.com"
            className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg hover:scale-105 transition"
          >
            <Mail size={32} className="text-red-500 mb-3" />
            <span className="font-semibold">emailkamu@example.com</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/usernamekamu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg hover:scale-105 transition"
          >
            <Instagram size={32} className="text-pink-500 mb-3" />
            <span className="font-semibold">@usernamekamu</span>
          </a>
        </div>
      </div>
    </section>
  );
}
