import { techSkillsWithLogos } from "../../data/techSkills.js";

export default function TechMarquee() {
    return (
        <section aria-label="Technical Skills" className="mt-12">
            <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden 
                            bg-card border-y border-border py-6 shadow-inner transition-colors duration-500">
                <div className="flex animate-marquee space-x-16 will-change-transform">
                    {[...techSkillsWithLogos, ...techSkillsWithLogos].map((tech, i) => (
                        <div key={i} className="flex items-center space-x-3 shrink-0">
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="w-10 h-10 grayscale opacity-80 hover:opacity-100 transition duration-300"
                            />
                            <span className="text-card-foreground font-semibold text-lg whitespace-nowrap">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
