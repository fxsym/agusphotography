import CategoryGallery from "./CategoryGallery";
import TitleCategoryGallery from "./TitleCategoryGallery";
import Potrait1 from "../assets/images/Potrait1.webp"
import Potrait2 from "../assets/images/Potrait2.webp"
import Potrait3 from "../assets/images/Potrait3.webp"
import Potrait4 from "../assets/images/Potrait4.webp"
import Potrait5 from "../assets/images/Potrait5.webp"
import Potrait6 from "../assets/images/Potrait6.webp"
import Potrait7 from "../assets/images/Potrait7.webp"
import Potrait8 from "../assets/images/Potrait8.webp"
import Potrait9 from "../assets/images/Potrait9.webp"
import Potrait10 from "../assets/images/Potrait10.webp"
import Potrait11 from "../assets/images/Potrait11.webp"
import Potrait12 from "../assets/images/Potrait12.webp"
import Potrait13 from "../assets/images/Potrait13.webp"
import Potrait14 from "../assets/images/Potrait14.webp"
import Potrait15 from "../assets/images/Potrait15.webp"
import Potrait16 from "../assets/images/Potrait16.webp"
import Potrait17 from "../assets/images/Potrait17.webp"
import Potrait18 from "../assets/images/Potrait18.webp"
import Landscape1 from "../assets/images/Landscape1.webp"
import Landscape2 from "../assets/images/Landscape2.webp"

import { useState } from "react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null); 
  const categories = [
    {
      title: "", 
      // photos: [
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285251/Potrait_12_cmdazg.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285250/Potrait_13_coxhax.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285219/Landscape_3_k3cyv6.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/c_crop,w_4618,h_5527/v1758285249/Potrait_11_ep1zyx.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285247/Potrait_10_xjhcpc.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285246/Landscape_4_m7mwmb.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285244/Potrait_9_hbhw30.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285243/Potrait_25_jvtlbv.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285217/Landscape_2_pm97ub.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285238/Potrait_24_aotcki.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285238/Potrait_23_nomkk5.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285234/Potrait_4_bxtrzy.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285235/Potrait_7_e4ar9w.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/c_crop,w_4573,h_6059/v1758285234/Potrait_6_pe0ekn.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285234/Potrait_5_a43ipq.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285229/Potrait_22_yccg7o.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285228/Potrait_21_lpcnqo.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285228/Potrait_2_avmyng.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/v1758285228/Potrait_3_qtkhdl.jpg",
      //   "https://res.cloudinary.com/dii2gjk9p/image/upload/c_crop,w_4672,h_6208/v1758285227/Potrait_17_cyswdm.jpg",
      // ],
      photos: [
        Potrait1,
        Potrait2,
        Potrait3,
        Potrait4,
        Potrait5,
        Landscape2,
        Potrait6,
        Potrait7,
        Landscape1,
        Potrait8,
        Potrait9,
        Potrait10,
        Potrait11,
        Potrait12,
        Potrait13,
        Potrait14,
        Potrait15,
        Potrait16,
        Potrait17,
        Potrait18,
      ]
    },
  ];

  return (
    <div className="bg-gray-200 py-4" id="gallery">
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
              <CategoryGallery
                photoName={cat.photos}
                onImageClick={setSelectedImage} // kirim handler klik
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 transition-opacity duration-900 ease-out opacity-100">
          {/* Tombol silang */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:scale-110 transition-transform duration-200"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg transform transition-transform duration-300 ease-out scale-100 opacity-100"
          />
        </div>
      )}
    </div>
  );
}