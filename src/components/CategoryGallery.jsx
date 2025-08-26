import ImageGallery from "./ImageGallery";

export default function CategoryGallery({ targetRef, photoName }) {
  return (
    <div className="w-full flex flex-row flex-wrap items-start gap-2 justify-center md:gap-6 lg:gap-12" ref={targetRef}>
      {photoName.map((photo, index) => (
        <div key={index} className="basis-5/12 md:basis-3/12 lg:basis-2/12">
          <ImageGallery src={photo} />
        </div>
      ))}
    </div>
  );
}