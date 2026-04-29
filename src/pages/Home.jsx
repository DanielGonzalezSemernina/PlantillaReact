import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const metrics = [
    { v: t("home.metrics.users"), l: t("home.metrics.usersLabel") },
    { v: t("home.metrics.projects"), l: t("home.metrics.projectsLabel") },
    { v: t("home.metrics.satisfaction"), l: t("home.metrics.satisfactionLabel") }
  ];

  const particles = Array.from({ length: 40 }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 1,
    duration: Math.random() * 10 + 10
  }));

  const features = [
    {
      title: t("home.features.items.fast.title"),
      desc: t("home.features.items.fast.desc"),
      icon: "⚡"
    },
    {
      title: t("home.features.items.modern.title"),
      desc: t("home.features.items.modern.desc"),
      icon: "🚀"
    },
    {
      title: t("home.features.items.scalable.title"),
      desc: t("home.features.items.scalable.desc"),
      icon: "📈"
    }
  ];

  const problems = {
    problem: t("home.problemSolution.problem.text"),
    solution: t("home.problemSolution.solution.text")
  };

  const projects = [
    {
      name: t("home.projects.items.crypto.name"),
      desc: t("home.projects.items.crypto.desc"),
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: t("home.projects.items.realEstate.name"),
      desc: t("home.projects.items.realEstate.desc"),
      color: "from-green-500 to-emerald-600"
    },
    {
      name: t("home.projects.items.startup.name"),
      desc: t("home.projects.items.startup.desc"),
      color: "from-purple-500 to-pink-600"
    }
  ];

  const blogs = [
    {
      title: t("home.blog.b1.title"),
      tag: t("home.blog.b1.tag"),
      desc: t("home.blog.b1.desc")
    },
    {
      title: t("home.blog.b2.title"),
      tag: t("home.blog.b2.tag"),
      desc: t("home.blog.b2.desc")
    },
    {
      title: t("home.blog.b3.title"),
      tag: t("home.blog.b3.tag"),
      desc: t("home.blog.b3.desc")
    }
  ];

  const useCaseKeys = [
    "saas",
    "fintech",
    "ecommerce",
    "dashboards",
    "internalApps",
    "startups"
  ];

  const teamKeys = ["alex", "maria", "david"];

  const stack = ["React", "Tailwind", "Framer Motion", "Arquitectura modular"];

  const onboardingKeys = ["step1", "step2", "step3", "step4"];


  return (
    <div className="min-h-screen w-full bg-white z-10">

      {/* PARTICLES BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-700 rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -20, 20, -10],
              x: [0, 10, -10, 5],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden z-10">

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold tracking-tight leading-tight">
              {t("home.hero.title")}
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
              {t("home.hero.subtitle")}
            </p>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => navigate("/register")}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
              >
                {t("home.hero.ctaStart")}
              </button>

              <button
                onClick={() => navigate("/about")}
                className="border px-6 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                {t("home.hero.ctaMore")}
              </button>
            </div>
          </motion.div>

          {/* 📊 DASHBOARD REAL HERO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white border shadow-xl rounded-2xl p-6 relative overflow-hidden"
          >
            <h3 className="font-bold text-lg mb-4">
              {t("home.hero.dashboard.title")}
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-blue-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">
                  {t("home.hero.dashboard.balance")}
                </p>
                <p className="text-xl font-bold">$24,320</p>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">ROI</p>
                <p className="text-xl font-bold text-green-600">+14%</p>
              </div>

              <div className="col-span-2 bg-purple-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">
                  {t("home.hero.dashboard.activity")}
                </p>
                <div className="h-2 bg-purple-200 rounded mt-2">
                  <div className="h-2 w-2/3 bg-purple-500 rounded" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= METRICS ================= */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-6 -mt-10">

        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border shadow rounded-2xl p-6 text-center"
          >
            <h2 className="text-3xl font-bold text-blue-600">{m.v}</h2>
            <p className="text-gray-600">{m.l}</p>
          </motion.div>
        ))}

      </section>

      {/* ================= SIMULADOR ================= */}
      <section className="max-w-5xl mx-auto mt-28 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-10">
            {t("home.simulator.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white border rounded-2xl p-6 shadow"
            >
              <h3 className="font-bold">Bitcoin</h3>
              <p className="text-green-500 text-2xl font-bold mt-2">+18.4%</p>

              <div className="h-2 bg-gray-100 rounded mt-4">
                <div className="h-2 w-3/4 bg-green-500 rounded" />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white border rounded-2xl p-6 shadow"
            >
              <h3 className="font-bold">Real Estate</h3>
              <p className="text-blue-500 text-2xl font-bold mt-2">+9.1%</p>

              <div className="h-2 bg-gray-100 rounded mt-4">
                <div className="h-2 w-1/2 bg-blue-500 rounded" />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="max-w-6xl mx-auto mt-24 px-6">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          {t("home.features.title")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 border rounded-2xl p-6 transition"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="font-bold mt-2">{f.title}</h3>
              <p className="text-gray-600 mt-1">{f.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= PROBLEM / SOLUTION ================= */}
      <section className="max-w-5xl mx-auto mt-28 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-10">
            {t("home.problemSolution.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-red-50 border rounded-xl p-6"
            >
              <h3 className="font-bold text-red-600">
                {t("home.problemSolution.problem.title")}
              </h3>
              <p className="text-gray-700 mt-2">{problems.problem}</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-green-50 border rounded-xl p-6"
            >
              <h3 className="font-bold text-green-600">
                {t("home.problemSolution.solution.title")}
              </h3>
              <p className="text-gray-700 mt-2">{problems.solution}</p>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="max-w-6xl mx-auto mt-28 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          {t("home.projects.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white border rounded-2xl overflow-hidden shadow"
            >
              <div className={`h-32 bg-gradient-to-r ${p.color}`} />
              <div className="p-5">
                <h3 className="font-bold">{p.name}</h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section className="max-w-6xl mx-auto mt-28 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          {t("home.blog.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {blogs.map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white border rounded-xl p-6 shadow-sm"
            >
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                {b.tag}
              </span>
              <h3 className="font-bold mt-3">{b.title}</h3>
              <p className="text-gray-600 text-sm">{b.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= STACK ================= */}
      <section className="max-w-5xl mx-auto mt-28 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          {t("home.stack.title")}
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {stack.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 border rounded-xl p-4"
            >
              ⚙️ {s}
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= ONBOARDING ================= */}
      <section className="max-w-5xl mx-auto mt-28 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          {t("home.onboarding.title")}
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {onboardingKeys.map((key, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white border rounded-xl p-6"
            >
              <div className="text-blue-600 font-bold text-xl mb-2">
                0{i + 1}
              </div>

              <p className="text-gray-600 text-sm">
                {t(`home.onboarding.steps.${key}`)}
              </p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* ================= USE CASES ================= */}
      <section className="max-w-5xl mx-auto mt-28 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          {t("home.useCases.title")}
        </h2>

        <div className="flex flex-wrap justify-center gap-3">

          {useCaseKeys.map((key, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-gray-100 rounded-full"
            >
              {t(`home.useCases.items.${key}`)}
            </motion.span>
          ))}

        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="max-w-5xl mx-auto mt-28 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          {t("home.team.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {teamKeys.map((key, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white border rounded-xl p-6"
            >
              <div className="w-12 h-12 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center">
                {t(`home.team.members.${key}.name`)[0]}
              </div>

              <h3 className="mt-3 font-bold">
                {t(`home.team.members.${key}.name`)}
              </h3>

              <p className="text-gray-600 text-sm">
                {t(`home.team.members.${key}.role`)}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-4xl mx-auto mt-32 mb-24 px-6">

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 rounded-2xl text-center"
        >
          <h2 className="text-3xl font-bold">
            {t("home.cta.title")}
          </h2>

          <p className="mt-3 text-white/80">
            {t("home.cta.subtitle")}
          </p>

          <button
            onClick={() => navigate("/register")}
            className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
            {t("home.cta.button")}
          </button>
        </motion.div>

      </section>

    </div>
  );
}