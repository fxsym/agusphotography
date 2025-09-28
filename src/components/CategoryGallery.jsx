import Masonry from "react-masonry-css";
import ImageGallery from "./ImageGallery";

export default function CategoryGallery({ targetRef, photoName, onImageClick }) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-4 px-4 md:px-10"
      columnClassName="space-y-4"
      ref={targetRef}
    >
      {photoName.map((photo, index) => (
        <ImageGallery key={index} src={photo} onClick={() => onImageClick(photo)} />
      ))}
    </Masonry>
  );
}
