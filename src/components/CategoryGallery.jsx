import Masonry from "react-masonry-css";
import ImageGallery from "./ImageGallery";

export default function CategoryGallery({ targetRef, photoName }) {
  // Breakpoint responsif: jumlah kolom berubah sesuai ukuran layar
  const breakpointColumnsObj = {
    default: 4, // layar besar → 4 kolom
    1100: 3,    // layar sedang → 3 kolom
    700: 2,     // layar kecil → 2 kolom
    500: 2      // hp → 1 kolom
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-4 px-4 md:px-10"
      columnClassName="space-y-4"
      ref={targetRef}
    >
      {photoName.map((photo, index) => (
        <ImageGallery key={index} src={photo} />
      ))}
    </Masonry>
  );
}
