import { Button } from "@/components/ui/button";

export const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between h-16">
      <div>
        <h1 className="font-ui font-light uppercase tracking-[0.35em] text-2xl">
          INSTRUMENT
        </h1>{" "}
      </div>

      <nav>
        <ul className="flex gap-12 font-ui font-light uppercase tracking-[0.35em] text-xs">
          <li>What we do</li>
          <li>Who we are</li>
          <li>Being here</li>
          <li>Careers</li>
        </ul>
      </nav>
    </div>
  );
};
