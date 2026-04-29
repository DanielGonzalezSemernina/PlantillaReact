import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";



export default function ProjectCard({ project }) {
    const navigate = useNavigate();
    
    const statusMap = {
        open: "bg-blue-100 text-blue-600",
        financed: "bg-green-100 text-green-600",
        renovation: "bg-yellow-100 text-yellow-600"
    };

    const { t } = useTranslation();

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
            onClick={() => navigate(`/projects/${project.id}`)}
        >
            {/* IMAGE */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={project.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

                {/* top badges */}
                <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold">
                    {project.name}
                </div>

                <div
                    className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full ${statusMap[project.status]}`}
                >
                    {t(`projects.status.${project.status}`)}
                </div>

                {/* price overlay */}
                <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm opacity-80">{project.location}</p>
                    <p className="text-xl font-bold">
                        ${project.price.toLocaleString()}
                    </p>
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">

                <div className="grid grid-cols-3 text-center text-sm mb-4">
                    <div>
                        <p className="font-bold">{project.years}</p>
                        <p className="text-gray-500 text-xs">
                            {t("projects.card.years")}
                        </p>

                        <p className="text-gray-500 text-xs">
                            {t("projects.card.annual")}
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-green-600">{project.roi}%</p>
                        <p className="text-gray-500 text-xs">ROI</p>
                    </div>
                    <div>
                        <p className="font-bold">{project.annual}%</p>
                        <p className="text-gray-500 text-xs">
                            {t("projects.card.annual")}
                        </p>
                    </div>
                </div>

                <button className="w-full bg-orange-500 text-white py-2 rounded-lg group-hover:bg-orange-600 transition">
                    {t("projects.card.view")}
                </button>
            </div>
        </motion.div>
    );
}