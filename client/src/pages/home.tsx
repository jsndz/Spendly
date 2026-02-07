import { Hero } from "@/components/hero";
import Container from "@/components/layout/container";
import { Navbar } from "@/components/navbar";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <Container>
          <Navbar />
        </Container>
      </header>

      <main className="flex-1">
        <Container>
          <div className="">
            <Hero></Hero>
          </div>
        </Container>
      </main>

      <footer className="border-t">
        <Container>
          <div className="py-8"></div>
        </Container>
      </footer>
    </div>
  );
};