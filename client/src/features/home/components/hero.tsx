import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-baseline">
      <p className="text-7xl font-bold pb-6 ">Build. Grow. Serve.</p>
      <p>Take control of your money with a simple, smart expense tracker.</p>
      <p>
        Log every expense in seconds, see exactly where your cash goes, and
        uncover spending habits.
      </p>
      <p>Stay on track and feel confident with every purchase.</p>
      <Button className="mt-7">
        Get Started <IconArrowRight></IconArrowRight>
      </Button>
    </div>
  );
};

export default Hero;
