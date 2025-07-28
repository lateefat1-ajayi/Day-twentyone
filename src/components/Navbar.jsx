
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="flex items-center justify-between  gap-6 p-4 bg-gradient-to-r from-purple-300 to-pink-100 shadow-md">
      <Link
        to="/"
        className={pathname === "/" ? "font-bold text-3xl text-purple-700" : "text-purple-700 font-bold text-3xl"}
      >
        Soulsay🌞
      </Link>

      <div className=" gap-5 flex  p-3">

      <Link
        to="/meditate"
        className={pathname === "/meditate" ? "font-bold text-purple-700 text-xl " : "text-black 700 text-xl"}
      >
        Meditate
      </Link>
      <Link
        to="/favorites"
        className={pathname === "/favorites" ? "font-bold text-xl text-purple-700" : "text-black text-xl "}
      >
        Favorites
      </Link>
      </div>
    </nav>
  );
}
