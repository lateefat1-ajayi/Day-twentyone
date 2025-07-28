import { useEffect, useState } from "react";
import { toast } from "react-toastify"; 
import Favorites from "../components/Favorites";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("soulsay_favorites")) || [];
    setFavorites(saved);
  }, []);

  const removeFavorite = (quote) => {
    const updated = favorites.filter((q) => q !== quote);
    setFavorites(updated);
    localStorage.setItem("soulsay_favorites", JSON.stringify(updated));

    toast.info("Removed from favorites 💔", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">💖 Your Favorite Affirmations</h1>
      <Favorites favorites={favorites} onRemove={removeFavorite} />
    </main>
  );
}
