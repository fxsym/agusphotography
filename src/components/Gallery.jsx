import CategoryGallery from "./CategoryGallery";
import TitleCategoryGallery from "./TitleCategoryGallery";

import Potrait1 from "../assets/images/pot1.jpg"
import Potrait2 from "../assets/images/pot2.jpg"
import Potrait3 from "../assets/images/pot3.jpg"
import Potrait4 from "../assets/images/pot4.jpg"
import Landscape1 from "../assets/images/land1.jpg"
import Landscape2 from "../assets/images/land2.jpg"
import Landscape3 from "../assets/images/land3.jpg"
import Landscape4 from "../assets/images/land4.jpg"
import { useState } from "react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    { title: "Potrait", photos: [Potrait1, Potrait2, Potrait3, Potrait4] },
    { title: "Landscape", photos: [Landscape1, Landscape2, Landscape3, Landscape4, Landscape1, Landscape2, Landscape3, Landscape4] },
    { title: "Wedding", photos: [Potrait1, Potrait2] },
    { title: "Travel", photos: [Potrait2, Potrait1] },
  ];

  return (
    <div className="mt-16">
      <div className="text-center">
        <h1 className="text-2xl font-bold font-[Poppins] md:text-3xl lg:text-4xl">GALLERY</h1>
      </div>

      {/* Tombol kategori */}
      <div className="w-full flex flex-wrap justify-around mt-4">
        {categories.map((cat, index) => (
          <TitleCategoryGallery
            key={index}
            title={cat.title}
            onClick={() => setActiveCategory(index)}
          />
        ))}
      </div>

      {/* Container gallery */}
      <div className="relative w-full overflow-hidden mt-6">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeCategory * 100}%)` }}
        >
          {categories.map((cat, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <CategoryGallery photoName={cat.photos} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}