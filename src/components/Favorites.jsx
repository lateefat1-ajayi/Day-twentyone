export default function Favorites({ favorites, onRemove }) {
  return (
    <div className="space-y-4">
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">No favorites yet.</p>
      ) : (
        favorites.map((quote, index) => (
          <div
            key={index}
            className="bg-white/70 p-4 rounded-xl h-20 w-full shadow flex justify-between items-center"
          >
            <p className="italic">{quote}</p>
            <button
              onClick={() => onRemove(quote)}
              className="bg-pink-400 p-0.5 rounded text-white hover:bg-pink-500 hover:-translate-y-0.5"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
