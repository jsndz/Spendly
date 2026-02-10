import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";

const WorkGrid = () => {
  return (
    <Container>
      <div className="grid grid-cols-4 grid-rows-[repeat(16,1fr)] gap-2 mb-16">
        <div className="col-span-2 row-span-4 border border-black rounded-3xl flex items-center justify-center">
          <img src="dollar.png" className="w-[70%]" />
        </div>

        <div className="col-span-2 row-span-4 col-start-3 flex flex-col items-baseline justify-center text-base pr-10 ">
          <p>
            An expense tracker helps you understand where your money actually goes
            each day. By logging your spending in a simple, consistent way, you
            turn random transactions into clear patterns you can learn from. This
            awareness is the first step toward better financial decisions and
            fewer end-of-month surprises.
          </p>
          <Button className="mt-7">
            Learn More <IconArrowRight />
          </Button>
        </div>

        <div className="col-span-2 row-span-4 row-start-7 pl-10 flex flex-col items-baseline justify-center text-base">
          <p>
            With organized categories, visual summaries, and quick entries,
            tracking expenses becomes effortless instead of overwhelming. You can
            spot unnecessary habits, adjust your budget in real time, and stay
            aligned with your financial goals without needing complex spreadsheets
            or calculations.
          </p>
          <Button className="mt-7">
            Learn More <IconArrowRight />
          </Button>
        </div>

        <div className="col-span-2 row-span-4 col-start-3 row-start-7 flex items-baseline justify-center">
          <img src="dollar.png" className="w-[70%]" />
        </div>

        <div className="col-span-2 row-span-4 row-start-13 flex items-center justify-center">
          <img src="dollar.png" className="w-[70%]" />
        </div>

        <div className="col-span-2 row-span-4 col-start-3 row-start-13 flex flex-col items-baseline justify-center pr-10 text-base">
          <p>
            Over time, an expense tracker builds confidence and control over your 
            finances. It replaces stress with clarity, helping you plan smarter,
            save intentionally, and make purchases with purpose rather than
            impulse.
          </p>
          <Button className="mt-7">
            Learn More <IconArrowRight />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default WorkGrid;