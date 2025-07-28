import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meditate from "./pages/Meditate";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meditate" element={<Meditate />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      {/* Toast container with dark mode */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // Change to "light" if preferred
      />
    </BrowserRouter>
  );
}
