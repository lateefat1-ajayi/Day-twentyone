import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; 

export default function MeditationTimer({ duration }) {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    let timer;

    if (isRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    }

    if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      toast.success("Session complete 🧘‍♀️", { position: "top-center" });

      setTimeout(() => {
        navigate("/meditate"); 
      }, 2000); 
    }

    return () => clearTimeout(timer);
  }, [isRunning, timeLeft, navigate]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">
        {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
      </h2>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className="bg-pink-300 px-4 py-2 rounded-full hover:bg-pink-400 transition"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
    </div>
  );
}
