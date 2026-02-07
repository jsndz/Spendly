import { Button } from "./ui/button";

export const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between h-16">
      <div>
        <h1>Spendly</h1>
      </div>

      <nav>
        <ul className="flex items-center gap-6">
          <li>features</li>
          <li>Resources</li>
          <li>Solutions</li>
          <li>pricing</li>
        </ul>
      </nav>

      <div>
        <Button>signup</Button>
      </div>
    </div>
  );
};