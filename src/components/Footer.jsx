import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white mt-32"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-bold mb-4">InvestApp</h2>
          <p className="text-gray-400 text-sm">
            {t("footer.desc")}
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-4">{t("footer.links")}</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/">{t("nav.home")}</Link></li>
            <li><Link to="/projects">{t("nav.projects")}</Link></li>
            <li><Link to="/services">{t("nav.services")}</Link></li>
            <li><Link to="/blog">{t("nav.blog")}</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-4">{t("footer.company")}</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/about">{t("nav.about")}</Link></li>
            <li><Link to="/contact">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="font-semibold mb-4">{t("footer.ctaTitle")}</h3>
          <p className="text-gray-400 text-sm mb-4">
            {t("footer.ctaText")}
          </p>

          <Link
            to="/register"
            className="bg-orange-500 px-5 py-2 rounded-lg text-sm hover:bg-orange-600 transition inline-block"
          >
            {t("footer.ctaButton")}
          </Link>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} InvestApp — {t("footer.rights")}
      </div>
    </motion.footer>
  );
}