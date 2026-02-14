import { motion, useScroll, useTransform } from "framer-motion";

export default function PageWrapper({ children }) {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 600], [0, -50]);
    const y2 = useTransform(scrollY, [0, 600], [0, -30]);

    return (
        <div
            className="
            bg-linear-to-br
            from-gray-100 via-gray-50 to-gray-200
            dark:from-gray-900 dark:via-gray-800 dark:to-gray-950
            overflow-hidden transition-colors duration-500
            "
        >
            <main className="relative max-w-5xl mx-auto w-full py-16 px-6 md:px-16">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute -top-16 -left-16 w-64 h-64 bg-blue-200/40 dark:bg-blue-500/20 blur-3xl rounded-full -z-10"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute -bottom-16 -right-16 w-72 h-72 bg-pink-200/40 dark:bg-pink-500/20 blur-3xl rounded-full -z-10"
                />
                {children}
            </main>
        </div>
    );
}
