import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-md py-4'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-brand-green p-2 rounded-full">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <a href="#" className={`font-display font-bold text-xl tracking-wide ${isScrolled ? 'text-brand-green' : 'text-white'}`}>
              ANNY NAVEGANTES
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-brand-gold ${isScrolled ? 'text-gray-700' : 'text-brand-green'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank" rel="noopener noreferrer"
              className={`px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${isScrolled
                ? 'bg-brand-green text-white hover:bg-brand-green/90'
                : 'bg-white text-brand-green hover:bg-gray-100'
                }`}
            >
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-brand-green' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-8 space-y-4 flex flex-col items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-brand-dark font-medium hover:text-brand-green"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank" rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 bg-brand-green text-white rounded-full font-medium hover:bg-brand-green/90 w-full text-center"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;