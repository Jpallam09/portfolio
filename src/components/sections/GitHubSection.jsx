import { useContext } from "react";
import { ThemeContext } from "@/ThemeContext.jsx"
import { GitHubCalendar } from "react-github-calendar";

export default function GitHubSection() {
    const { theme } = useContext(ThemeContext);
    const blockMargin = 2;

    return (
        <section aria-label="GitHub Contributions" className="mt-12 w-full px-4 md:px-12">
            <div className="bg-card border border-border shadow-sm p-4 md:p-6 transition-colors duration-500">
                <header className="mb-4 text-center">
                    <h2 className="text-2xl font-bold text-card-foreground border-b border-border pb-2 inline-block">
                        GitHub Contributions
                    </h2>
                    <p className="mt-1 text-muted-foreground text-sm">
                        Consistent development activity
                    </p>
                </header>

                <div className="w-full">
                    <GitHubCalendar
                        username="jpallam09"
                        blockSize={8}
                        blockMargin={blockMargin}
                        fontSize={10}
                        colorScheme={theme === "dark" ? "dark" : "light"}
                        style={{
                            fontFamily: "inherit",
                            borderRadius: 0,
                            width: "100%",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
