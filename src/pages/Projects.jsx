import { useState } from "react";
import projectsData from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("new");
  const { t } = useTranslation();

  // 🔥 FILTRO
  const filteredProjects = projectsData
    .filter((p) => filter === "all" || p.status === filter)
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "name") return a.name.localeCompare(b.name);
      return new Date(b.date) - new Date(a.date);
    });

  // 🔥 ANIMACIONES
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 pt-28 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 TOP BAR */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4 items-center justify-between mb-8"
        >

          {/* SEARCH */}
          <input
            placeholder={t("projects.list.search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-lg w-64"
          />

          {/* FILTERS */}
          <div className="flex gap-2 flex-wrap">
            {["all", "open", "financed", "renovation"].map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className={`px-4 py-2 rounded-full border transition ${
                  filter === f
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white"
                }`}
              >
                {t(`projects.list.filters.${f}`)}
              </motion.button>
            ))}
          </div>

          {/* SORT */}
          <motion.select
            whileFocus={{ scale: 1.03 }}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border px-4 py-2 rounded-lg"
          >
            <option value="new">{t("projects.list.sort.new")}</option>
            <option value="price-desc">{t("projects.list.sort.priceDesc")}</option>
            <option value="price-asc">{t("projects.list.sort.priceAsc")}</option>
            <option value="name">{t("projects.list.sort.name")}</option>
          </motion.select>
        </motion.div>

        {/* 🔥 GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                key={p.id}
                variants={item}
                layout
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </motion.div>
  );
}