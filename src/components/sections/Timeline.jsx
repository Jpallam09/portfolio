export default function Timeline() {
    const timelineData = [
        { title: "Fullstack Developer as an Intern", company: "SMND", year: "2025" },
        { title: "Commisions | Freelance", company: "for Students like me", year: "2024" },
        { title: "Fullstack Developer", company: "Capstone project", year: "2024" },
        { title: "Started Creating basic Projects", company: "Isabela State University", year: "2023" },
        { title: "Hello World! 👋🏻", company: "Wrote my first line of code", year: "2023" },
    ];

    return (
        <div className="relative space-y-6 mt-6">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-border"></div>

            {timelineData.map((item, idx) => (
                <div key={idx} className="relative pl-10 group/item">
                    {/* Node */}
                    <div className="absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-border bg-background group-hover/item:bg-accent transition-colors"></div>

                    {/* Content */}
                    <div className="space-y-1">
                        <h3 className="text-sm font-semibold group-hover/item:text-accent transition-colors">
                            {item.title}
                        </h3>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-foreground/70">{item.company}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-foreground/5 shadow-[0_1px_1px_rgba(0,0,0,0.03)]">
                                {item.year}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
