export default function ImageGallery({ src }) {
  return (
    <img src={src} alt="" className="w-full h-auto object-cover rounded-md" />
  );
}