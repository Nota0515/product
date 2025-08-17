import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home', onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      scrollToTop();
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }},
    { id: 'features', label: 'About', onClick: () => {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }},
    { id: 'details', label: 'Contact', onClick: () => {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }}
  ];

  const MenuItem = ({ id, label, onClick }: { id: string, label: string, onClick: (e: React.MouseEvent) => void }) => (
    <a 
      href={`#${id}`}
      className="text-xl font-medium py-4 px-6 w-full text-center rounded-lg relative group overflow-hidden"
      style={{
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        zIndex: 10,
        color: 'rgba(0, 0, 0, 0.9)',
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
      }}
      onClick={onClick}
    >
      <span className="relative z-10">{label}</span>
      <span 
        className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-active:opacity-100"
        style={{
          background: `
            linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(245,245,255,0.98) 50%, rgba(235,235,255,0.98) 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.6'/%3E%3C/svg%3E")
          `,
          mixBlendMode: 'multiply',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.2)'
        }}
      />
    </a>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-black/70 text-white backdrop-blur-xl border-b-slate-700 border-b" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="Guardian App"
        >
          {isScrolled ? (
            <img 
              src="/whitelogo.png" 
              alt="Guardian App Logo" 
              className="h-7 sm:h-8" 
            />
          ) : (
            <img 
              src="/logomain.png" 
              alt="Guardian App Logo" 
              className="h-7 sm:h-8" 
            />
          )}
          <p className={`relative transition-all duration-300 ${isScrolled ? "text-white" : "text-gray-800"} py-2`}>
            Guardian
          </p>
        </a>

        <nav className={`hidden ${isScrolled ? "text-white" : "text-black"} md:flex space-x-8`}>
          {menuItems.map(item => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              onClick={item.onClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button 
          className={`md:hidden ${isScrolled ? "text-white" : "text-gray-700"} z-50 p-3 focus:outline-none`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} color="black" /> : <Menu size={24} />}
        </button>
      </div>

      <div 
        className={cn(
          "fixed inset-0 z-40 text-black flex flex-col pt-24 px-6 md:hidden transition-all duration-300 ease-in-out transform-gpu",
          isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )} 
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: 'fixed',
          height: '100vh',
          width: '100vw',
          overflowY: 'auto',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <nav className="flex flex-col space-y-8 items-center mt-8">
          {menuItems.map(item => (
            <MenuItem key={item.id} id={item.id} label={item.label} onClick={item.onClick} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
