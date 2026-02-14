import { techSkillsWithLogos } from "../../data/techSkills.js";

export default function TechMarquee() {
    return (
        <section aria-label="Technical Skills" className="mt-12">
            <div
                className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden 
                   bg-card border-y border-border py-6 transition-colors duration-500 group"
                style={{
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "100% 100%",
                    maskImage:
                        "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
                    maskRepeat: "no-repeat",
                    maskSize: "100% 100%",
                }}
            >
                <div className="flex animate-marquee group-hover:pause space-x-16 will-change-transform">
                    {[...techSkillsWithLogos, ...techSkillsWithLogos, ...techSkillsWithLogos].map((tech, i) => (
                        <div key={i} className="flex items-center space-x-3 shrink-0">
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="w-10 h-10 grayscale opacity-70 hover:grayscale-0 
                                hover:opacity-100 transition-all duration-300
                                dark:invert dark:brightness-90"
                            />
                            <span className="text-card-foreground font-semibold text-lg whitespace-nowrap hover:text-primary transition-colors duration-300">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}