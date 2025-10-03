import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { NotesSection } from "@/components/notes-section";
import { PlaylistSection } from "@/components/playlist-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex">
      {/* <aside className="w-64 bg-foreground border-r min-h-screen border-paragraph/10 p-6 hidden md:flex flex-col items-center gap-8">
        oi
      </aside> */}

      <div className="w-full">
        <main className="font-sans max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col gap-10 md:gap-18">
          <HeroSection />

          <ProjectsSection />

          <ServicesSection />

          <NotesSection />

          <PlaylistSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
