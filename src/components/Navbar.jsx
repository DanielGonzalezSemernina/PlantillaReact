import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ user, setUser }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const linkClass = ({ isActive }) =>
    `relative whitespace-nowrap transition duration-300 ${
      isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
    } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  const closeMenu = () => setOpen(false);

  // 🔥 ANIMACIONES STAGGER
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="bg-gray-900 text-white fixed w-full z-50 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center">

        {/* LOGO */}
        <div className="flex-1">
          <motion.h1
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition"
          >
            MiApp
          </motion.h1>
        </div>

        {/* DESKTOP NAV (STAGGER ANIMADO) */}
        <motion.div
          className="hidden md:flex flex-1 justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {[
            { to: "/", label: t("nav.home") },
            { to: "/projects", label: t("nav.projects") },
            { to: "/services", label: t("nav.services") },
            { to: "/blog", label: t("nav.blog") },
            { to: "/contact", label: t("nav.contact") },
            { to: "/about", label: t("nav.about") }
          ].map((item) => (
            <motion.div key={item.to} variants={itemVariants}>
              <NavLink to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-3">

          {/* USER */}
          {user ? (
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold cursor-pointer"
              >
                {user.name[0].toUpperCase()}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setUser(null)}
                className="hover:text-red-400 transition"
              >
                Logout
              </motion.button>
            </div>
          ) : (
            <>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink to="/login" className="hover:text-blue-400 transition">
                  {t("nav.login")}
                </NavLink>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink
                  to="/register"
                  className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                  {t("nav.register")}
                </NavLink>
              </motion.div>
            </>
          )}

          {/* LANGUAGE */}
          <select
            value={i18n.language}
            onChange={(e) => changeLang(e.target.value)}
            className="bg-gray-800 px-2 py-1 rounded"
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </div>

        {/* MOBILE BUTTON (sin slider, solo toggle simple) */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* MOBILE MENU (ANIMADO SIMPLE, NO SIDEBAR) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-gray-800 px-6 pb-4 flex flex-col gap-3 overflow-hidden"
          >
            <NavLink to="/" onClick={closeMenu}>{t("nav.home")}</NavLink>
            <NavLink to="/projects" onClick={closeMenu}>{t("nav.projects")}</NavLink>
            <NavLink to="/services" onClick={closeMenu}>{t("nav.services")}</NavLink>
            <NavLink to="/blog" onClick={closeMenu}>{t("nav.blog")}</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>{t("nav.contact")}</NavLink>
            <NavLink to="/about" onClick={closeMenu}>{t("nav.about")}</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}