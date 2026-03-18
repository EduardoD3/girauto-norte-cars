import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import girautoLogo from "@/assets/girauto-logo.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Veículos", href: "#veiculos" },
  { label: "Anuncie Conosco", href: "#anuncie" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black shadow-nav border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo("#inicio")} className="flex items-center">
            <img
              src={girautoLogo}
              alt="Girauto"
              className="h-20 md:h-20 w-auto object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollTo("#anuncie")}
              className="bg-brand-red hover:bg-brand-red-light text-primary-foreground font-semibold px-6 py-2.5 rounded-xl shadow-red transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Anunciar Veículo
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-brand-black border-t border-white/10`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-base font-medium"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("#anuncie")}
            className="mt-3 bg-brand-red hover:bg-brand-red-light text-primary-foreground font-semibold py-3 rounded-xl w-full"
          >
            Anunciar Veículo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
