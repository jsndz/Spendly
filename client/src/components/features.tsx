import { FeatureGrid } from "./featureGrid";
import Container from "./layout/container";
import { Badge } from "./ui/badge";

export const Features = () => {
  return (
    <section className="w-full bg-slate-100">
      <div className=" flex items-center">
        <Container>
          <div className="flex flex-col w-full items-center text-center">
            <Badge className="text-black">Features</Badge>

            <h1 className="text-5xl text-black mt-4">
              Keep everything in one place
            </h1>
            <h1 className="text-3xl mt-4 text-slate-300">Note your money</h1>
           
          </div>
        </Container>
       
      </div>
      <div className="mt-16 w-full px-2">
              <FeatureGrid />
    </div>
    </section>
  );
};
