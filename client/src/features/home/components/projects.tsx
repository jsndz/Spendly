import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";

const Projects = () => {
  return (
    <Container>
      <div className="text-center text-4xl my-16">
        <p>Explore out product and try</p>
        <p>our features</p>
        <Button className="mt-7">
          Get Started <IconArrowRight />
        </Button>
      </div>

      <div className="flex justify-between">
        <div className="w-[50%] ">
        <div className="flex justify-center"><img src="dollar.png" className="w-[70%]  pb-5"  /></div>

          <p className="font-bold font-mono text-3xl">Analyis</p>
          <p>
            Powerful analysis and detailed records turn your daily entries into
            meaningful financial insights. Every expense you log is
            automatically organized, categorized, and stored so you can review
            your spending history anytime with clarity.
          </p>
        </div>
        <div className="w-[50%]">
        <div className="flex justify-center"><img src="dollar.png" className="w-[70%] pb-5"  /></div>
          <p className="font-bold font-mono text-3xl ">Records</p>
          <p className="">
            With accurate records at your fingertips, you can track trends over
            weeks and months, monitor category-wise spending, and make
            data-driven budgeting decisions. Instead of guessing, you rely on
            real numbers to adjust habits, set limits, and plan ahead with
            confidence.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
