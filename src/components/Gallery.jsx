import CategoryGallery from "./CategoryGallery";
import TitleCategoryGallery from "./TitleCategoryGallery";

import Potrait1 from "../assets/images/Potrait_1.jpg"
import Potrait2 from "../assets/images/Potrait_2.jpg"
import Potrait3 from "../assets/images/Potrait_3.jpg"
import Potrait4 from "../assets/images/Potrait_4.jpg"
import Potrait5 from "../assets/images/Potrait_5.jpg"
import Potrait6 from "../assets/images/Potrait_6.jpg"
import Potrait7 from "../assets/images/Potrait_7.jpg"
import Potrait8 from "../assets/images/Potrait_8.jpg"
import Potrait9 from "../assets/images/Potrait_9.jpg"
import Potrait10 from "../assets/images/Potrait_10.jpg"
import Potrait11 from "../assets/images/Potrait_11.jpg"
import Potrait12 from "../assets/images/Potrait_12.jpg"
import Potrait13 from "../assets/images/Potrait_13.jpg"
import Potrait14 from "../assets/images/Potrait_14.jpg"
import Potrait15 from "../assets/images/Potrait_15.jpg"
import Landscape1 from "../assets/images/Landscape_1.jpg"
import Landscape2 from "../assets/images/Landscape_2.jpg"
import Landscape3 from "../assets/images/Landscape_3.jpg"
import Landscape4 from "../assets/images/Landscape_4.jpg"
import { useState } from "react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    { title: "", photos: [Potrait1, Potrait2, Potrait3, Potrait4, Potrait5, Potrait6, Potrait7, Potrait8, Potrait9, Potrait10, Potrait11, Potrait12, Potrait13, Potrait14, Potrait15, Landscape1, Landscape2, Landscape3, Landscape4] },
  ];

  return (
    <div className="bg-gray-200 py-14">
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