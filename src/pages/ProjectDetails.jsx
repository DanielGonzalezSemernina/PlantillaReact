import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import projectsData from "../data/projects";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const project = projectsData.find(p => p.id === Number(id));
  const [activeTab, setActiveTab] = useState("description");

  if (!project) return <div className="p-10">Proyecto no encontrado</div>;

  const tabs = [
    { id: "description", label: t("projects.detail.tabs.description") },
    { id: "location", label: t("projects.detail.tabs.location") },
    { id: "token", label: t("projects.detail.tabs.token") },
    { id: "docs", label: t("projects.detail.tabs.docs") }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 pt-24 pb-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* BACK */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-gray-600 hover:underline"
        >
          ← {t("projects.detail.back")}
        </motion.button>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={project.image}
            className="w-full h-80 object-cover"
          />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-10">

          {/* SIDEBAR */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow p-4 h-fit"
          >
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition ${
                  activeTab === tab.id
                    ? "bg-orange-100 text-orange-600 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-white rounded-2xl shadow p-6"
          >

            {activeTab === "description" && (
              <motion.div initial="hidden" animate="show" variants={fadeUp}>
                <h2 className="text-xl font-bold mb-4">
                  {project.name} {t("projects.detail.description.title")}
                </h2>

                <p className="text-gray-700 mb-4">
                  {t("projects.detail.description.p1")}
                </p>

                <p className="text-gray-700 mb-4">
                  {t("projects.detail.description.p2")}
                </p>

                <p className="text-gray-700">
                  {t("projects.detail.description.p3")}
                </p>
              </motion.div>
            )}

            {activeTab === "location" && (
              <motion.div initial="hidden" animate="show" variants={fadeUp}>
                <h2 className="text-xl font-bold mb-4">
                  {t("projects.detail.location.title")}
                </h2>

                <p className="text-gray-700">
                  {project.location} {t("projects.detail.location.text")}
                </p>

                <div className="mt-6 h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                  🗺️ {t("projects.detail.location.map")}
                </div>
              </motion.div>
            )}

            {activeTab === "token" && (
              <motion.div initial="hidden" animate="show" variants={fadeUp}>
                <h2 className="text-xl font-bold mb-4">
                  {t("projects.detail.token.title")}
                </h2>

                <div className="space-y-3 text-gray-700">
                  <p>{t("projects.detail.token.total")}: 5,000</p>
                  <p>{t("projects.detail.token.price")}: $100</p>
                  <p>{t("projects.detail.token.roi")}: {project.roi}%</p>
                  <p>
                    {t("projects.detail.token.duration")}: {project.years}{" "}
                    {t("projects.card.years")}
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "docs" && (
              <motion.div initial="hidden" animate="show" variants={fadeUp}>
                <h2 className="text-xl font-bold mb-4">
                  {t("projects.detail.docs.title")}
                </h2>

                <div className="space-y-3">
                  <div className="p-4 border rounded-lg flex justify-between">
                    <span>Whitepaper.pdf</span>
                    <button className="text-blue-600">
                      {t("projects.detail.docs.download")}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

          </motion.div>
        </div>

        {/* INVEST CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 bg-white rounded-2xl shadow p-6 max-w-md ml-auto"
        >
          <h3 className="font-bold text-lg mb-4">
            {t("projects.detail.invest.title")}
          </h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{t("projects.detail.invest.price")}</span>
              <strong>${project.price.toLocaleString()}</strong>
            </div>

            <div className="flex justify-between">
              <span>{t("projects.detail.invest.roi")}</span>
              <strong className="text-green-600">{project.roi}%</strong>
            </div>

            <div className="flex justify-between">
              <span>{t("projects.detail.invest.duration")}</span>
              <strong>{project.years} {t("projects.card.years")}</strong>
            </div>
          </div>

          <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition">
            {t("projects.detail.invest.button")}
          </button>
        </motion.div>

      </div>
    </motion.div>
  );
}