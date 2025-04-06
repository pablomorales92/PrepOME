import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Define navigation links
  const navLinks = [
    { text: '¿Qué es?', href: '#' },
    { text: 'Calendario', href: '#' },
    { text: 'Material', href: '#' },
    { text: 'Enlaces', href: '#' },
    { text: 'Contacto', href: '#footer' },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="https://www.rsme.es/wp-content/uploads/2019/01/logoOMEgrande-276x300.jpg" 
              alt="Olimpiada Matemática Española" 
              className="h-14"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="font-heading font-medium text-neutral-dark hover:text-primary transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-neutral-dark focus:outline-none"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pt-2 pb-4`}>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading font-medium py-2 text-neutral-dark hover:text-primary transition-colors duration-200"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
