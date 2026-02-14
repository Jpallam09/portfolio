import { motion } from "framer-motion";
import { LocateIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useContext } from "react";
import { ThemeContext } from "@/ThemeContext.jsx";

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 w-full"
        >
            <div className="flex items-start justify-between w-full gap-3 md:gap-4 flex-nowrap">
                <figure className="shrink-0 m-0 flex flex-col justify-end">
                    <img
                        src="/images/avatar.jpg"
                        alt="Profile"
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover border-2 border-gray-300 dark:border-gray-700 shadow-md"
                    />
                </figure>
                <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                        <div className="flex items-center gap-1 sm:gap-2">
                            <h1 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 dark:text-gray-100 truncate">
                                John Paul Allam
                            </h1>
                            <img
                                src="/logos/verified.png"
                                alt="Verified"
                                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain shrink-0"
                            />
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-400 mt-1 truncate">
                            <LocateIcon size={16} />
                            <span className="text-xs sm:text-sm truncate">Cabatuan, Isabela</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 text-gray-600 dark:text-gray-400 mt-1 truncate">
                            <span className="text-xs sm:text-sm truncate">IT | Fullstack Developer</span>
                        </div>
                    </div>
                    <div className="mt-3 flex flex-row gap-2">
                        <a
                            className="px-2 py-1 sm:px-3 sm:py-1.5 bg-black text-white text-xs sm:text-sm font-medium border-none hover:bg-gray-600 focus:outline-none whitespace-nowrap transition-colors duration-200"
                        >
                            Email
                        </a>
                        <a
                            className="px-2 py-1 sm:px-3 sm:py-1.5 bg-black text-white text-xs sm:text-sm font-medium border-none hover:bg-gray-600 focus:outline-none whitespace-nowrap transition-colors duration-200"
                        >
                            LinkedIn
                        </a>
                        <a
                            className="flex-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-400 text-black text-xs sm:text-sm font-medium border-none hover:bg-gray-600 focus:outline-none text-center transition-colors duration-200"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="shrink-0 flex self-start m-0">
                    <Switch
                        checked={theme === "dark"}
                        onCheckedChange={toggleTheme}
                        className="w-8 h-4 sm:w-10 sm:h-5 md:w-12 md:h-6"
                    />
                </div>
            </div>

        </motion.section>
    );
}
