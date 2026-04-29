import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

export default function Layout({ user, setUser, children }) {
  const location = useLocation();

  const hideUI =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      {/* NAVBAR */}
      {!hideUI && <Navbar user={user} setUser={setUser} />}

      {/* CONTENT */}
      <main className={`flex-1 ${!hideUI ? "min-h-screen w-full" : ""}`}>
        {children}
      </main>

      {/* FOOTER */}
      {!hideUI && <Footer />}
      
    </div>
  );
}