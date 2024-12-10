import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "À propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-green font-mono text-xl">
          AD
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              className="text-light-slate hover:text-green transition-colors duration-300"
            >
              <span className="font-mono text-green text-sm">{`0${i + 1}.`}</span>
              <span className="ml-1">{item.name}</span>
            </a>
          ))}
          <Button
            variant="outline"
            className="border-green text-green hover:bg-green/10"
          >
            CV
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-light-slate"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-navy-light md:hidden">
            <div className="flex flex-col items-center py-8 space-y-6">
              {navItems.map((item, i) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-light-slate hover:text-green transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-mono text-green text-sm">{`0${
                    i + 1
                  }.`}</span>
                  <span className="ml-1">{item.name}</span>
                </a>
              ))}
              <Button
                variant="outline"
                className="border-green text-green hover:bg-green/10"
              >
                CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;