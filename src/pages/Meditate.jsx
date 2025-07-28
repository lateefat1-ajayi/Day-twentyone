import { useState } from "react";
import MeditationTimer from "../components/MeditationTimer";

export default function Meditate() {
  const [duration, setDuration] = useState(1);
  const [start, setStart] = useState(false);

  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Meditation Timer 🧘‍♀️</h1>
      {!start && (
        <div className="space-x-4 mb-4">
          {[1, 3, 5].map((min) => (
            <button
              key={min}
              onClick={() => {
                setDuration(min);
                setStart(true);
              }}
              className="bg-pink-300 hover:bg-pink-500 px-4 py-2 rounded-full"
            >
              {min} min
            </button>
          ))}
        </div>
      )}

      {start && <MeditationTimer duration={duration} />}
    </main>
  );
}
