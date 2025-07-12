import { Button } from "../ui/button";

export function Header() {
  return (
    <nav className="w-full bg-white px-6 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="font-bold text-xl text-gray-900">HomeEssentials</div>
        <Button variant="default" size="default">
          Shop now
        </Button>
      </div>
    </nav>
  );
}
