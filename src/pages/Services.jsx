import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const services = [
    {
      title: t("services.items.frontend.title"),
      desc: t("services.items.frontend.desc"),
      icon: "💻",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: t("services.items.uiux.title"),
      desc: t("services.items.uiux.desc"),
      icon: "🎨",
      color: "from-pink-400 to-purple-500"
    },
    {
      title: t("services.items.performance.title"),
      desc: t("services.items.performance.desc"),
      icon: "⚡",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: t("services.items.api.title"),
      desc: t("services.items.api.desc"),
      icon: "🔗",
      color: "from-green-400 to-emerald-600"
    }
  ];

  const stats = [
    { label: t("services.stats.projects"), value: "120+" },
    { label: t("services.stats.performance"), value: "+45%" },
    { label: t("services.stats.clients"), value: "98%" }
  ];

  const testimonials = [
    t("services.testimonials.0"),
    t("services.testimonials.1"),
    t("services.testimonials.2")
  ];

  const steps = [
    t("services.steps.0"),
    t("services.steps.1"),
    t("services.steps.2")
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50">

      {/* HERO */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="pt-28 pb-14 text-center px-6"
      >

        <motion.span
          variants={fadeUp}
          className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full"
        >
          🚀 {t("services.badge")}
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-5xl font-bold text-gray-900 mt-4"
        >
          {t("services.title")}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          {t("services.subtitle")}
        </motion.p>

        <motion.button
          variants={fadeUp}
          onClick={() => navigate("/contact")}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {t("services.cta_contact")}
        </motion.button>

        {/* TRUST BAR */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center gap-8 text-gray-400 text-sm mt-10 flex-wrap"
        >
          <span>⚡ Fast delivery</span>
          <span>🛡 Secure architecture</span>
          <span>📈 Scalable systems</span>
        </motion.div>
      </motion.div>

      {/* STATS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6 mb-16">

        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-2xl shadow text-center border"
          >
            <h2 className="text-2xl font-bold text-blue-600">
              {s.value}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {s.label}
            </p>
          </motion.div>
        ))}

      </div>

      {/* SERVICES */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">

        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -10,
              scale: 1.03
            }}
            transition={{ duration: 0.4 }}
            className="group bg-white rounded-2xl shadow-md border overflow-hidden relative cursor-pointer"
          >

            {/* shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition" />

            <div className={`h-36 bg-gradient-to-r ${s.color} relative`}>

              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:10px_10px]" />

              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                className="absolute top-3 left-3 text-2xl"
              >
                {s.icon}
              </motion.div>

              <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                <div className="h-2 w-1/3 bg-white/40 rounded"></div>
                <div className="h-2 w-1/2 bg-white/30 rounded"></div>
              </div>

            </div>

            <div className="p-6">
              <h2 className="font-bold text-lg">{s.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{s.desc}</p>
            </div>

          </motion.div>
        ))}

      </div>

      {/* HOW IT WORKS */}
      <div className="max-w-5xl mx-auto mt-24 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          {t("services.how_title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-xl border shadow-sm"
            >
              <div className="text-blue-600 font-bold text-xl mb-2">
                0{i + 1}
              </div>
              <p className="text-gray-600">{step}</p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="max-w-4xl mx-auto mt-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-8">
          {t("services.testimonials_title")}
        </h2>

        <div className="space-y-4">

          {testimonials.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-4 rounded-xl border shadow-sm"
            >
              “{text}”
            </motion.div>
          ))}

        </div>
      </div>

      {/* FINAL CTA */}
      <div className="max-w-4xl mx-auto mt-24 mb-20 px-6">

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-2xl text-center"
        >

          <h2 className="text-3xl font-bold">
            {t("services.final_title")}
          </h2>

          <p className="mt-2 text-white/80">
            {t("services.final_subtitle")}
          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            {t("services.cta_start")}
          </button>

        </motion.div>

      </div>

    </div>
  );
}