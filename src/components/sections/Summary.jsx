import { motion } from "framer-motion";

export default function Summary() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
        >
            <h2 className="text-3xl font-bold mb-6 tracking-wide border-b border-gray-300 pb-2">Summary</h2>
            <article className="mb-6">
                <h3 className="font-semibold text-xl mb-2">Freelance Full-Stack Developer | MERN, Laravel</h3>
                <p className="mb-2 leading-relaxed">
                    Collaborated on an Archiving System using Django to manage and digitalize academic capstone papers.
                </p>
                <p className="mb-2 leading-relaxed">
                    Managed end-to-end development life-cycles under strict deadlines.
                </p>
                <p className="leading-relaxed">
                    Delivered custom full-stack solutions for multiple clients, including E-commerce platforms and News applications.
                </p>
            </article>
        </motion.section>
    );
}
