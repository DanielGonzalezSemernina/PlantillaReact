import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Register({ setUser }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleRegister = () => {
    if (!acceptedTerms) return;

    setUser({ name, email });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden bg-[#0b1b3a]">

      {/* 🌊 BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* ================= LEFT (BRANDING) ================= */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col justify-center items-center text-white p-10 z-10"
      >
        <h1 className="text-5xl font-bold mb-3">
          MiApp
        </h1>

        <p className="text-gray-300 text-center max-w-sm mb-10">
          {t("register.brandingText")}
        </p>

        <div className="bg-[#12264a] p-5 rounded-xl w-72 text-center shadow-lg border border-gray-700">
          <p className="text-sm text-gray-300">
            {t("register.brandingHighlight")}
          </p>
        </div>
      </motion.div>

      {/* ================= RIGHT (FORM) ================= */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex items-center justify-center p-6 z-10"
      >
        <div className="w-full max-w-md bg-[#12264a] shadow-2xl rounded-2xl p-8 text-white">

          {/* TITLE */}
          <h1 className="text-2xl font-bold text-center">
            {t("register.title", "Crear cuenta")}
          </h1>

          <p className="text-sm text-gray-300 text-center mt-1 mb-6">
            {t("register.subtitle", "Únete en segundos")}
          </p>

          {/* NAME */}
          <label className="text-sm text-gray-300">
            {t("register.name")}
          </label>
          <input
            type="text"
            value={name}
            placeholder={t("register.namePlaceholder")}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 mb-4 px-3 py-2 bg-[#0f2142] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          {/* EMAIL */}
          <label className="text-sm text-gray-300">
            {t("register.email")}
          </label>
          <input
            type="email"
            value={email}
            placeholder={t("register.emailPlaceholder")}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 mb-4 px-3 py-2 bg-[#0f2142] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          {/* PASSWORD */}
          <label className="text-sm text-gray-300">
            {t("register.password")}
          </label>

          <div className="relative mt-1 mb-4">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder={t("register.passwordPlaceholder")}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-[#0f2142] border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-gray-400"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* TERMS */}
          <div className="flex items-center gap-2 text-sm text-gray-300 mb-6">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="accent-blue-500"
            />
            <span>
              {t("register.accept")}{" "}
              <span className="text-blue-400 hover:underline cursor-pointer">
                {t("register.terms")}
              </span>
            </span>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleRegister}
            disabled={!acceptedTerms}
            className={`w-full py-2 rounded-lg transition ${acceptedTerms
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-600 cursor-not-allowed"
              }`}
          >
            {t("register.button")}
          </button>

          {/* LOGIN LINK */}
          <p className="text-sm text-center mt-6 text-gray-300">
            {t("register.haveAccount")}{" "}
            <NavLink to="/login" className="text-blue-400 font-semibold">
              {t("register.login")}
            </NavLink>
          </p>
        </div>
      </motion.div>
    </div>
  );
}