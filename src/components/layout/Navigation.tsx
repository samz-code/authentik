import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Marketing", href: "/marketing" },
  { name: "Homes", href: "/homes" },
  { name: "Properties", href: "/properties" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "shadow-lg"
            : "shadow-md"
        )}
        style={{ backgroundColor: '#1a4d4d' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white hover:text-yellow-400 transition-colors duration-300 z-50"
            >
              Authentik
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-base xl:text-lg font-medium transition-all duration-300 relative group",
                    location.pathname === link.href
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300",
                      location.pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="whatsapp"
                size="default"
                asChild
                className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 transition-all duration-300 hover:scale-105"
              >
                <a
                  href="https://wa.me/255777296026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white hover:text-yellow-400 transition-colors z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <i className="fas fa-times text-2xl"></i>
              ) : (
                <i className="fas fa-bars text-2xl"></i>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Slide-in Panel */}
      <div
        className={cn(
          "lg:hidden fixed top-0 right-0 bottom-0 w-full sm:w-80 z-40 transition-transform duration-300 ease-in-out shadow-2xl overflow-y-auto"
        )}
        style={{ 
          backgroundColor: '#1a4d4d',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
      >
        <div className="px-6 py-20">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-2xl sm:text-3xl font-medium transition-all duration-300 py-2 border-b hover:border-yellow-400 hover:pl-4",
                  location.pathname === link.href
                    ? "text-yellow-400 border-yellow-400"
                    : "text-white border-white/20"
                )}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile WhatsApp Button */}
            <div className="pt-6 mt-4">
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium text-lg py-6 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="https://wa.me/255777296026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}