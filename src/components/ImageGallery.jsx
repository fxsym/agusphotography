import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ImageGallery({ src, onClick }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <img
      src={src}
      alt=""
      className="w-full h-auto object-cover rounded-md cursor-pointer"
      data-aos="zoom-in"
      onClick={onClick}
    />
  );
}
