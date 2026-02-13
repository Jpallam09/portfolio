import { motion } from "framer-motion";

export default function Projects() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
        >
            <h2 className="text-3xl font-bold mb-6 tracking-wide border-b border-gray-300 pb-2">Projects</h2>
            <article className="mb-4">
                <h3 className="font-semibold text-xl mb-2">Capstone | MDRRMO Disaster Risk Management System | Laravel, MySQL</h3>
                <p className="leading-relaxed">
                    Engineered a full-stack web application using Laravel and MySQL to streamline municipal disaster reporting and resource tracking.
                </p>
            </article>
        </motion.section>
    );
}
