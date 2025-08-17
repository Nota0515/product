
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
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-black/70 text-white backdrop-blur-xl border-b-slate-700 border-b" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between  px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center "
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
          <p className={`relative transition-all duration-300 ${isScrolled ? "text-white" :"text-gray-800"} py-2`}>Guardian</p>
        </a>

        {/* Desktop Navigation */}
        <nav className={`hidden ${isScrolled ? "text-white" : "text-black"} md:flex space-x-8`}>
          <a 
            href="#" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            Home
          </a>
          <a href="#features" className="nav-link">About</a>
          <a href="#details" className="nav-link">Contact</a>
        </nav>

        {/* Mobile menu button - increased touch target */}
        <button 
          className={`md:hidden ${isScrolled ? "text-white" : "text-gray-700"} z-50 p-3 focus:outline-none`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for better touch experience */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white/80 backdrop-blur-xl text-black flex flex-col pt-24 px-6 md:hidden transition-all duration-300 ease-in-out transform-gpu",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )} style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        overflowY: 'auto'
      }}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <a 
            href="#" 
            className="text-xl font-medium py-4 px-6 w-full text-center rounded-lg hover:bg-white/10 transition-colors duration-200" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Home
          </a>
          <a 
            href="#features" 
            className="text-xl font-medium py-4 px-6 w-full text-center rounded-lg hover:bg-white/10 transition-colors duration-200" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            About
          </a>
          <a 
            href="#details" 
            className="text-xl font-medium py-4 px-6 w-full text-center rounded-lg hover:bg-white/10 transition-colors duration-200" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
