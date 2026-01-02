import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/programs", label: "Program" },
  { href: "/gallery", label: "Galeri" },
  { href: "/articles", label: "Artikel" },
  { href: "/contact", label: "Kontak" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Detect if we're on the homepage
  const isHomePage = location.pathname === "/";
  // Use light text only on homepage when not scrolled
  const shouldUseLightText = isHomePage && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-display font-bold text-xl"
          >
            <span
              className={cn(
                "transition-colors duration-300",
                shouldUseLightText ? "text-primary-foreground" : "text-foreground"
              )}
            >
              Jejak
            </span>
            <span className="text-accent">Pemimpin</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  location.pathname === link.href
                    ? "text-accent"
                    : shouldUseLightText
                      ? "text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10"
                      : "text-foreground/80 hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              <Link to="/contact">Hubungi Kami</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              shouldUseLightText
                ? "text-primary-foreground hover:bg-white/10"
                : "text-foreground hover:bg-muted"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-background border-b border-border",
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="section-container py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                location.pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-muted hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Button
              asChild
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              <Link to="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
