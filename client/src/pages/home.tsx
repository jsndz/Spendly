import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import Container from "@/components/layout/container";
import { Navbar } from "@/components/navbar";
import { Resources } from "@/components/resources";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <Container>
          <Navbar />
        </Container>
      </header>

      <main className="flex-1 w-full">
        <Container>
            <Hero></Hero>
        </Container>
        <Features></Features>
      </main>

      <footer className="border-t">
        <Container>
          <div className="py-8"></div>
        </Container>
      </footer>
    </div>
  );
};