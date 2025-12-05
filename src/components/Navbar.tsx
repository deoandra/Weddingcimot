import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Couple", id: "couple" },
    { name: "Story", id: "story" },
    { name: "Gallery", id: "gallery" },
    { name: "Events", id: "events" },
    { name: "Gift", id: "gift" },
    { name: "RSVP", id: "rsvp" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? "py-4 bg-neutral-950/90 border-b border-neutral-900" 
            : "py-8 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="font-serif text-2xl tracking-widest cursor-pointer font-bold text-yellow-500"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            D & N
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-yellow-500 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection("rsvp")}
              className="px-6 py-2 border border-yellow-700/50 text-yellow-500 text-[10px] uppercase tracking-[0.2em] hover:bg-yellow-700/10 transition-colors"
            >
              RSVP
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-yellow-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-neutral-950 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="font-serif text-3xl text-yellow-100/80 hover:text-yellow-500 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
