import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Login({ setUser }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [rating, setRating] = useState(4.3);
  const [reviews, setReviews] = useState(128);

  const handleLogin = () => {
    setUser({ name: "User", email });
    navigate("/");
  };

  const handleGoogleLogin = () => {
    setUser({
      name: "Google User",
      email: "googleuser@gmail.com",
      provider: "google"
    });
    navigate("/");
  };

  const renderStars = () =>
    Array(5)
      .fill(0)
      .map((_, i) => {
        const v = i + 1;
        return (
          <span key={i} className="text-xl">
            {rating >= v ? "⭐" : rating >= v - 0.5 ? "🌟" : "☆"}
          </span>
        );
      });

  return (
    <div className="min-h-screen flex relative overflow-hidden">

      {/* 🌊 BACKGROUND */}
      <div className="absolute inset-0 bg-white">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* ================= LEFT (BRANDING + RATING) ================= */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col justify-center items-center p-10 z-10"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          MiApp
        </h1>

        <p className="text-gray-600 text-center max-w-sm mb-10">
          {t("login.brandingText")}
        </p>

        {/* ⭐ RATING */}
        <div className="bg-white shadow-lg rounded-xl p-6 w-72 text-center border">

          <h2 className="font-semibold mb-2">
            {t("login.ratingTitle")}
          </h2>

          <div className="flex justify-center gap-1 mb-2">
            {renderStars()}
          </div>

          <p className="text-lg font-bold">
            {rating.toFixed(1)} / 5
          </p>

          <p className="text-sm text-gray-500">
            {reviews} {t("login.ratingLabel")}
          </p>

          <button
            onClick={() => {
              setRating(parseFloat((Math.random() * 2 + 3).toFixed(1)));
              setReviews(reviews + Math.floor(Math.random() * 5 + 1));
            }}
            className="mt-4 text-xs text-blue-500 hover:underline"
          >
            {t("login.ratingSimulate")}
          </button>
        </div>
      </motion.div>

      {/* ================= RIGHT (LOGIN) ================= */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex items-center justify-center p-6 z-10"
      >
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

          {/* TITLE */}
          <h1 className="text-2xl font-bold text-center text-gray-800">
            {t("login.title")}
          </h1>

          {/* SUBTITLE */}
          <p className="text-sm text-gray-500 text-center mt-1 mb-6">
            {t("login.subtitle")}
          </p>

          {/* EMAIL */}
          <label className="text-sm">
            {t("login.emailLabel")}
          </label>

          <input
            type="email"
            value={email}
            placeholder={t("login.emailPlaceholder")}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 mb-4 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          {/* PASSWORD */}
          <label className="text-sm">
            {t("login.passwordLabel")}
          </label>

          <div className="relative mt-1 mb-6">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder={t("login.passwordPlaceholder")}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* LOGIN */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {t("login.button")}
          </button>

          {/* GOOGLE */}
          <button
            onClick={handleGoogleLogin}
            className="w-full mt-3 border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 hover:shadow-md transition"
          >
            <GoogleIcon />
            {t("login.google")}
          </button>

          {/* REGISTER */}
          <p className="text-sm text-center mt-6 text-gray-600">
            {t("login.noAccount")}{" "}
            <NavLink to="/register" className="text-blue-500 font-semibold">
              {t("login.register")}
            </NavLink>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* 🔵 GOOGLE ICON */
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.7 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-4.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.7 6.1 29.6 4 24 4 16.3 4 9.5 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.3 0 10.2-2 13.9-5.3l-6.4-5.3C29.5 35 26.9 36 24 36c-5.3 0-9.7-3.3-11.3-8L6.1 33C9.3 39.4 16.1 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.4 5.5-6.2 7.2l6.4 5.3C38.7 37.1 44 31 44 24c0-1.3-.1-2.7-.4-3.5z" />
    </svg>
  );
}