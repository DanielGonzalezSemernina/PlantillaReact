import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    { key: "All", label: t("blog.categories.all") },
    { key: "Frontend", label: t("blog.categories.frontend") },
    { key: "Design", label: t("blog.categories.design") },
    { key: "CSS", label: t("blog.categories.css") },
    { key: "Product", label: t("blog.categories.product") }
  ];

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchSearch = post.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" || post.category === category;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  // 🔥 ANIMATIONS
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.97, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 py-24 px-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-gray-900">
          {t("blog.title")}
        </h1>

        <input
          placeholder={t("blog.search")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-6 w-full px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className={`px-3 py-1 rounded-full text-sm border transition ${
                category === c.key
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8"
      >
        {filtered.map((post) => (
          <motion.div
            key={post.id}
            variants={item}
            whileHover={{
              y: -8,
              scale: 1.02
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-3xl overflow-hidden shadow-md border hover:shadow-2xl"
          >

            {/* HERO */}
            <div className={`h-44 w-full bg-gradient-to-r ${post.color} relative`}>
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </div>

              <div className="absolute top-4 right-4 bg-black/20 text-white px-3 py-1 rounded-full text-xs">
                {post.readTime}
              </div>

              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:10px_10px]" />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900">
                {post.title}
              </h2>

              <p className="text-gray-600 mt-3 text-sm">
                {post.desc}
              </p>

              <div className="mt-5 flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  2026 · {t("blog.readArticle")}
                </span>

                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  {t("blog.readMore")} →
                </Link>
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}