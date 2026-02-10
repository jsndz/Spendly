import Container from "@/components/layout/container";
import Hero from "@/features/home/components/hero";
import Video from "@/features/home/components/video";
import { Navbar } from "@/features/home/components/navbar";
import Work from "@/features/home/components/work";
import WorkGrid from "@/features/home/components/workGrid";
import Projects from "@/features/home/components/projects";
import Footer from "@/features/home/components/footer";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="">
        <Container>
          <Navbar />
        </Container>
      </header>

      <main className="flex-1 w-full">
        <Container>
          <Hero></Hero>
        </Container>
        <Video></Video>
        <Work></Work>
        <WorkGrid></WorkGrid>
        <Projects></Projects>
      </main>

      <footer className="">
        <Container>
          <footer>
            <Container>
              <Footer />
            </Container>
          </footer>{" "}
        </Container>
      </footer>
    </div>
  );
};
