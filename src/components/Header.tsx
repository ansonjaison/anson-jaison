
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
            <h1 className="text-xl sm:text-2xl font-bold text-[#007f5f] cursor-pointer" onClick={() => scrollToSection('#home')}>
              Anson
            </h1>
          </div>

          {/* Desktop Navigation - hidden on tablet and below */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[#f5f5f5] hover:text-[#007f5f] transition-colors duration-300 relative group text-sm xl:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007f5f] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Resume and Connect Buttons - hidden on tablet and below */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#aaaaaa] hover:text-[#007f5f] transition-colors duration-300 group text-sm xl:text-base"
            >
              <FileText size={16} className="group-hover:scale-110 transition-transform duration-300" />
              <span>Resume</span>
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-[#007f5f] text-[#f5f5f5] px-4 xl:px-6 py-2 rounded-lg font-semibold hover:bg-[#00664d] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#007f5f]/20 text-sm xl:text-base"
            >
              Connect
            </button>
          </div>

          {/* Tablet Navigation - visible only on tablet */}
          <nav className="hidden md:flex lg:hidden space-x-4">
            {navItems.slice(0, 4).map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[#f5f5f5] hover:text-[#007f5f] transition-colors duration-300 relative group text-sm"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007f5f] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Tablet Resume and More Menu */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-[#aaaaaa] hover:text-[#007f5f] transition-colors duration-300 group text-sm"
            >
              <FileText size={14} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden sm:inline">Resume</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#f5f5f5] hover:text-[#007f5f] transition-colors duration-300 p-1"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu button - visible only on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#f5f5f5] hover:text-[#007f5f] transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0d0d0d] border-t border-gray-800">
              {/* Show remaining nav items for tablet, all for mobile */}
              {(window.innerWidth >= 768 ? navItems.slice(4) : navItems).map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-[#f5f5f5] hover:text-[#007f5f] transition-colors duration-300 text-sm sm:text-base"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile-only resume link */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden flex items-center space-x-2 px-3 py-2 text-[#aaaaaa] hover:text-[#007f5f] transition-colors duration-300 mt-2"
              >
                <FileText size={18} />
                <span>Resume</span>
              </a>
              
              <button
                onClick={() => scrollToSection('#contact')}
                className="block w-full text-left px-3 py-2 bg-[#007f5f] text-[#f5f5f5] rounded-lg font-semibold mt-4 hover:bg-[#00664d] transition-colors duration-300 text-sm sm:text-base"
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
