import { Button } from "@/components/ui/button";

export const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between h-16">
      <div>
        <h1 className="font-mono ">SPENDLY</h1>
      </div>

      <nav>
        <ul className="flex items-center gap-6">
          <li>WHAT WE DO</li>
          <li>WHO ARE WE</li>
          <li>BEING HERE</li>
          <li>CAREERS</li>
        </ul>
      </nav>

    </div>
  );
};