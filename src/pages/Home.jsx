import { useEffect, useState } from "react";
import affirmations from "../data/affirmations";
import AffirmationCard from "../components/AffirmationCard";

export default function Home() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("soulsay_favorites")) || [];
    setFavorites(saved);
  }, []);

  const toggleFavorite = (quote) => {
    let updated;
    if (favorites.includes(quote)) {
      updated = favorites.filter((q) => q !== quote);
    } else {
      updated = [...favorites, quote];
    }
    setFavorites(updated);
    localStorage.setItem("soulsay_favorites", JSON.stringify(updated));
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🧘 Welcome to SoulSay — All Affirmations
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {affirmations.map((quote, index) => (
          <AffirmationCard
            key={index}
            text={quote}
            isFavorite={favorites.includes(quote)}
            onFavorite={() => toggleFavorite(quote)}
          />
        ))}
      </div>
    </main>
  );
}
