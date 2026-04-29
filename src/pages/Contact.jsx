import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Required";
    if (!form.email.includes("@")) newErrors.email = "Invalid email";
    if (!form.message) newErrors.message = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSent(false), 3000);
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center py-24 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900">
            {t("contact.title", "Contacto")}
          </h1>

          <p className="text-gray-600 mt-4">
            {t(
              "contact.subtitle",
              "¿Tienes alguna duda o propuesta? Escríbenos y te responderemos en menos de 24h."
            )}
          </p>

          {/* TRUST BLOCK */}
          <div className="mt-8 bg-white p-5 rounded-xl shadow-md space-y-2 text-gray-700">
            <p>⚡ Respuesta en 24h</p>
            <p>🌍 Soporte global</p>
            <p>🔒 Datos seguros</p>
          </div>

          {/* FAQ MINI */}
          <div className="mt-8 space-y-3">
            <h3 className="font-semibold text-gray-900">
              {t("contact.faqTitle", "Preguntas frecuentes")}
            </h3>

            <details className="bg-white p-3 rounded-lg shadow">
              <summary className="cursor-pointer font-medium">
                {t("contact.faq1q", "¿Cuánto tardáis en responder?")}
              </summary>
              <p className="text-gray-600 mt-2">
                {t("contact.faq1a", "Normalmente respondemos en menos de 24 horas.")}
              </p>
            </details>

            <details className="bg-white p-3 rounded-lg shadow">
              <summary className="cursor-pointer font-medium">
                {t("contact.faq2q", "¿Es gratuito?")}
              </summary>
              <p className="text-gray-600 mt-2">
                {t("contact.faq2a", "Sí, puedes contactarnos sin coste.")}
              </p>
            </details>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white shadow-xl rounded-2xl p-8 relative"
        >

          {/* SUCCESS MESSAGE */}
          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-4 left-4 right-4 bg-green-100 text-green-700 p-3 rounded-lg text-center"
              >
                {t("contact.success", "Mensaje enviado correctamente")}
              </motion.div>
            )}
          </AnimatePresence>

          <h2 className="text-xl font-semibold mb-6">
            {t("contact.formTitle", "Envíanos un mensaje")}
          </h2>

          {/* NAME */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">
              {t("contact.name", "Nombre")}
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact.namePlaceholder", "Tu nombre")}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Required</p>
            )}
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">
              {t("contact.email", "Email")}
            </label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Invalid email</p>
            )}
          </div>

          {/* MESSAGE */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">
              {t("contact.message", "Mensaje")}
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("contact.messagePlaceholder", "Escribe tu mensaje...")}
              rows="4"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">Required</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading
              ? t("contact.sending", "Enviando...")
              : t("contact.send", "Enviar mensaje")}
          </button>
        </motion.div>
      </div>
    </div>
  );
}