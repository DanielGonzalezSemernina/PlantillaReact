import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function BlogPost() {
  const { t } = useTranslation();
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Post no encontrado
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`h-72 w-full bg-gradient-to-r ${post.color} relative`}
      >

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:12px_12px]" />

        <div className="absolute bottom-6 left-6 text-white">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
            {post.category}
          </span>

          <h1 className="text-3xl font-bold mt-2">
            {post.title}
          </h1>

          <p className="text-sm opacity-90">
            {post.readTime} · {t("blog.by")} {post.author}
          </p>
        </div>
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-14">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg text-gray-700 mb-10"
        >
          {post.desc}
        </motion.p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-10">
          {post.tags.map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-xs px-3 py-1 bg-gray-100 rounded-full"
            >
              #{tag}
            </motion.span>
          ))}
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {post.highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-4 bg-gray-50 rounded-xl border"
            >
              <p className="text-sm">✨ {h}</p>
            </motion.div>
          ))}
        </div>

        {/* IMAGE SIMULADA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="h-56 rounded-2xl bg-gradient-to-r from-gray-200 to-gray-300 relative overflow-hidden">
            <p className="absolute bottom-4 left-4 text-gray-700 text-sm font-medium">
              📸 {t("blog.imagePlaceholder")}
            </p>
          </div>
        </motion.div>

        {/* SECTIONS */}
        <div className="space-y-8 text-gray-700">

          <Section title={t("blog.sections.intro")}>
            {t("blog.content.intro")}
          </Section>

          <Section title={t("blog.sections.architecture")}>
            {t("blog.content.architecture")}
          </Section>

          <Section title={t("blog.sections.decisions")}>
            {t("blog.content.decisions")}
          </Section>

          <Section title={t("blog.sections.ux")}>
            {t("blog.content.ux")}
          </Section>

          <Section title={t("blog.sections.conclusion")}>
            {t("blog.content.conclusion")}
          </Section>

        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{children}</p>
    </motion.div>
  );
}