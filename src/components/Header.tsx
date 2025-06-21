
import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tech', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-[#0d0d0d]/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#007f5f] cursor-pointer" onClick={() => scrollToSection('#home')}>
              Anson
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[#f5f5f5] hover:text-[#007f5f] transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007f5f] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Resume and Connect Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#aaaaaa] hover:text-[#007f5f] transition-colors duration-300 group"
            >
              <FileText size={18} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Resume</span>
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-[#007f5f] text-[#f5f5f5] px-6 py-2 rounded-lg font-semibold hover:bg-[#00664d] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#007f5f]/20"
            >
              Connect
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#f5f5f5] hover:text-[#007f5f] transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0d0d0d] border-t border-gray-800">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-[#f5f5f5] hover:text-[#007f5f] transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 text-[#aaaaaa] hover:text-[#007f5f] transition-colors duration-300 mt-2"
              >
                <FileText size={18} />
                <span>Resume</span>
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="block w-full text-left px-3 py-2 bg-[#007f5f] text-[#f5f5f5] rounded-lg font-semibold mt-4 hover:bg-[#00664d] transition-colors duration-300"
              >
                Connect
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
