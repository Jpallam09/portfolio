import PageWrapper from "@/components/layout/PageWrapper.jsx";
import Header from "@/components/sections/Header.jsx";
import Summary from "@/components/sections/Summary.jsx";
import Timeline from "@/components/sections/Timeline.jsx";
import Projects from "@/components/sections/Projects.jsx";
import TechMarquee from "@/components/sections/TechMarquee.jsx";
import GitHubSection from "@/components/sections/GitHubSection.jsx";

export default function Home() {
    return (
        <PageWrapper>
            <article className="
        bg-card
        text-card-foreground
        border border-border
        px-6 py-6 md:px-16 md:py-8
        font-serif
        transition-colors duration-500
      ">
                <Header />
            </article>

            {/* Summary & Timeline Cards Side by Side */}
            <div className="flex flex-col md:flex-row gap-6 mt-6">
                {/* Summary Card */}
                <div className="flex-1 bg-card border border-border p-8 transition-colors duration-500">
                    <Summary />
                </div>

                {/* Timeline Card */}
                <div className="flex-1 bg-card border border-border p-8 transition-colors duration-500">
                    <Timeline />
                </div>
            </div>

            {/* Other Sections */}
            <div className="mt-6">
                <Projects />
            </div>

            <div className="mt-6">
                <TechMarquee />
            </div>

            <div className="mt-6">
                <GitHubSection />
            </div>
        </PageWrapper>
    );
}
