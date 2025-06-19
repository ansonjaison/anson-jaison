
import React from 'react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-[#aaaaaa]">
            <p>&copy; 2025 Anson Jaison</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[#aaaaaa] hover:text-[#007f5f] transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Subfooter */}
          <div className="text-[#aaaaaa] text-sm">
            <p>Crafted with VS Code + ☕</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
