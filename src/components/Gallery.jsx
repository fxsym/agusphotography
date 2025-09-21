import CategoryGallery from "./CategoryGallery";
import TitleCategoryGallery from "./TitleCategoryGallery";

import { useState } from "react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    { title: "", photos: [
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285251/Potrait_12_cmdazg.jpg", 
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285250/Potrait_13_coxhax.jpg", 
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285219/Landscape_3_k3cyv6.jpg", 
      "https://res.cloudinary.com/dii2gjk9p/image/upload/c_crop,w_4618,h_5527/v1758285249/Potrait_11_ep1zyx.jpg", 
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285247/Potrait_10_xjhcpc.jpg", 
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285246/Landscape_4_m7mwmb.jpg",
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285244/Potrait_9_hbhw30.jpg",
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285243/Potrait_25_jvtlbv.jpg",
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285217/Landscape_2_pm97ub.jpg",
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285238/Potrait_24_aotcki.jpg",
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285238/Potrait_23_nomkk5.jpg",
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285234/Potrait_4_bxtrzy.jpg",
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285235/Potrait_7_e4ar9w.jpg",
      "https://res.cloudinary.com/dii2gjk9p/image/upload/c_crop,w_4573,h_6059/v1758285234/Potrait_6_pe0ekn.jpg",
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285234/Potrait_5_a43ipq.jpg",
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285229/Potrait_22_yccg7o.jpg",
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285228/Potrait_21_lpcnqo.jpg",
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285228/Potrait_2_avmyng.jpg",
      "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285228/Potrait_3_qtkhdl.jpg",
      "https://res.cloudinary.com/dii2gjk9p/image/upload/c_crop,w_4672,h_6208/v1758285227/Potrait_17_cyswdm.jpg",

    ]},
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