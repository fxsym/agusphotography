export default function TitleCategoryGallery({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-2 text-gray-700 hover:text-blue-600 cursor-pointer transition text-sm font-semibold md:text-base lg:text-lg "
    >
      {title}
    </button>
  );
}
