import { toast } from "react-toastify";

export default function AffirmationCard({ text, onFavorite, isFavorite }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(`"${text}"`);
    toast.info("Copied to clipboard! 📋");
  };

  const handleFavorite = () => {
    onFavorite();
    if (!isFavorite) {
      toast.success("Added to favorites 💖");
    } else {
      toast.warn("Removed from favorites 💔");
    }
  };

  return (
    <div className="bg-white/80 p-6 rounded-xl shadow-lg flex flex-col justify-between h-30 w-100 max-w-md mx-auto transition-all">
      <p className="text-lg italic text-center text-gray-700 flex-grow">
        “{text}”
      </p>

      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={handleFavorite}
          className="bg-purple-300 hover:bg-purple-400 text-white px-4 py-1 rounded-full text-sm transition"
        >
          {isFavorite ? "❤️ Favorited" : "🤍 Favorite"}
        </button>

        <button
          onClick={handleCopy}
          className="bg-blue-700 hover:bg-blue-800 text-white text-sm px-3 py-1 rounded-full transition hover:-translate-y-0.5"
        >
          Copy 📋
        </button>
      </div>
    </div>
  );
}
