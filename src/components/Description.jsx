import AgusImage from "../assets/images/agus.png";

export default function Description() {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center">
      {/* Text */}
      <div className="flex-1 text-center md:text-center text-white">
        <h1 className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-[#303841] font-semibold">
          Hallo..
        </h1>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23.5px] text-[#303841] font-semibold mt-4 max-w-3xl mx-auto leading-relaxed text-justify">
          I am a professional photographer who focuses on capturing precious moments and transforming them into meaningful visual artworks. With over 5 years of experience, I have worked on various projects ranging from pre-wedding, portrait, product, to commercial photography. For me, every photo is not just an image, but a story that needs to be told and preserved.
        </p>
      </div>

      {/* Profile Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src={AgusImage}
          alt="Profile"
          className="w-64 h-94 md:w-70 md:h-100 object-cover rounded-full"
        />
      </div>
    </div>
    // <div className="text-center font-[Poppins] py-14">
    // <h1 className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-[#303841] font-semibold">
    //   Hallo..
    // </h1>
    // <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23.5px] text-[#303841] font-semibold mt-4 max-w-3xl mx-auto leading-relaxed text-justify">
    //   I am a professional photographer who focuses on capturing precious moments and transforming them into meaningful visual artworks. With over 5 years of experience, I have worked on various projects ranging from pre-wedding, portrait, product, to commercial photography. For me, every photo is not just an image, but a story that needs to be told and preserved.
    // </p>
    // </div>
  )
}