import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { label: t("about.stats.users", "Usuarios"), value: "12K+" },
    { label: t("about.stats.projects", "Proyectos"), value: "3.2K+" },
    { label: t("about.stats.satisfaction", "Satisfacción"), value: "98%" }
  ];

  const timeline = [
    { year: "2023", text: t("about.timeline1", "Nace la idea del proyecto") },
    { year: "2024", text: t("about.timeline2", "Primer MVP lanzado") },
    { year: "2025", text: t("about.timeline3", "Expansión internacional") }
  ];

  const testimonials = [
    {
      name: t("about.testimonials.laura.name"),
      text: t("about.testimonials.laura.text")
    },
    {
      name: t("about.testimonials.carlos.name"),
      text: t("about.testimonials.carlos.text")
    },
    {
      name: t("about.testimonials.andrea.name"),
      text: t("about.testimonials.andrea.text")
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 overflow-x-hidden">

      {/* HERO */}
      <div className="bg-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-gray-900"
        >
          {t("about.title", "Construyendo el futuro digital")}
        </motion.h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          {t(
            "about.subtitle",
            "Una plataforma moderna para crear, gestionar y escalar proyectos digitales sin fricción."
          )}
        </p>
      </div>

      {/* STATS */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 -mt-12 px-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white shadow-lg rounded-2xl p-6 text-center"
          >
            <h2 className="text-3xl font-bold text-blue-600">{s.value}</h2>
            <p className="text-gray-600 mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* MISSION */}
      <div className="max-w-4xl mx-auto mt-20 bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-3">
          {t("about.missionTitle", "Nuestra misión")}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {t(
            "about.missionText",
            "Crear herramientas simples pero potentes que permitan a cualquier persona construir productos digitales sin complicaciones."
          )}
        </p>
      </div>

      {/* WHY WE EXIST */}
      <div className="max-w-4xl mx-auto mt-20 bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-3">
          {t("about.whyTitle", "¿Por qué existimos?")}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {t(
            "about.whyText",
            "La mayoría de herramientas digitales son complejas, lentas o poco intuitivas. Nuestro objetivo es simplificar la forma en la que las personas crean y gestionan productos digitales."
          )}
        </p>
      </div>

      {/* HOW WE WORK */}
      <div className="max-w-4xl mx-auto mt-20 bg-white p-10 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-3">
          {t("about.howTitle", "Cómo trabajamos")}
        </h2>

        <ul className="text-gray-600 space-y-2">
          <li>{t("about.howWork.item1")}</li>
          <li>{t("about.howWork.item2")}</li>
          <li>{t("about.howWork.item3")}</li>
          <li>{t("about.howWork.item4")}</li>
        </ul>
      </div>

      {/* TIMELINE */}
      <div className="max-w-3xl mx-auto mt-20 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">
          {t("about.timelineTitle", "Nuestra evolución")}
        </h2>

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              <div className="w-16 text-blue-600 font-bold">
                {item.year}
              </div>
              <div className="text-gray-600">{item.text}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="max-w-5xl mx-auto mt-24 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">
          {t("about.testimonialsTitle", "Lo que dicen de nosotros")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((tst, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white shadow-md rounded-2xl p-6"
            >
              <p className="text-gray-600 mb-4">"{tst.text}"</p>
              <p className="font-semibold text-gray-900">- {tst.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="max-w-5xl mx-auto mt-24 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">
          {t("about.teamTitle", "Equipo")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Alex", "María", "David"].map((name, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white shadow-md rounded-2xl p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-3">
                {name[0]}
              </div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-gray-500 text-sm">
                {t("about.role", "Frontend Developer")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          {t("about.ctaTitle", "¿Listo para empezar?")}
        </h2>

        <p className="text-blue-100 mb-6">
          {t(
            "about.ctaText",
            "Únete a cientos de usuarios que ya están construyendo su futuro digital."
          )}
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          {t("about.ctaButton", "Empezar ahora")}
        </button>
      </div>

      <div className="h-20" />
    </div>
  );
}