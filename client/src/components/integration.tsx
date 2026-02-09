
import Grid from "./grid";
import IntegrationInf from "./integrationInf";
import Container from "./layout/container";
import { Badge } from "./ui/badge";

export const Integration = () => {
  return (
    <section className="w-full bg-white">
      <div className=" flex items-center">
        <Container>
          <div className="flex flex-col w-full items-center text-center">
            <Badge className="text-black">Integration</Badge>

            <h1 className="text-5xl text-black mt-4">
              Keep everything in one place
            </h1>
          </div>
        </Container>
      </div>
      <div className="mt-16 w-full px-2">
        <Grid></Grid>
        <IntegrationInf />
      </div>
    </section>
  );
};
