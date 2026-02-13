import PageWrapper from "@/components/layout/PageWrapper.jsx";
import Summary from "@/components/sections/Summary.jsx";
import Experience from "@/components/sections/Experience.jsx";
import Projects from "@/components/sections/Projects.jsx";
import TechMarquee from "@/components/sections/TechMarquee.jsx";
import GitHubSection from "@/components/sections/GitHubSection.jsx";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <>
      <PageWrapper>
        <article className="
          bg-card
          text-card-foreground
          border border-border
          p-12 font-serif
          transition-colors duration-500
        ">
          <Summary />
          <Experience />
          <Projects />
        </article>
        <TechMarquee />
        <GitHubSection />
      </PageWrapper>
      <Footer />
    </>
  );
}
