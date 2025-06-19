
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:ansonjaison@outlook.in';
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I'm{' '}
                <span className="text-[#007f5f] bg-gradient-to-r from-[#007f5f] to-[#00664d] bg-clip-text text-transparent">
                  Anson Jaison
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-[#aaaaaa] leading-relaxed">
                A student exploring tech, design, and stories that connect people.
              </p>
            </div>
            
            <p className="text-lg text-[#aaaaaa] italic">
              Currently building useful tools and sharing learnings from the journey.
            </p>

            <button
              onClick={handleEmailClick}
              className="inline-flex items-center space-x-2 bg-[#007f5f] text-[#f5f5f5] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#00664d] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#007f5f]/20 group"
            >
              <span>Let's Connect</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#007f5f] shadow-2xl shadow-[#007f5f]/20 hover:scale-105 transition-transform duration-300">
                <img
                  src="https://raw.githubusercontent.com/ansonjaison/ansonjaison.github.io/refs/heads/main/images/AnsonJaison.jpg"
                  alt="Anson Jaison"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-[#007f5f] to-[#00664d] rounded-full opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Collaboration Teaser */}
        <div className="mt-20 bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-[#aaaaaa] leading-relaxed">
                I'm open to conversations, collaborations, and ideas — let's build something cool.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <button
                onClick={handleEmailClick}
                className="px-6 py-3 border border-[#007f5f] text-[#007f5f] rounded-lg hover:bg-[#007f5f] hover:text-[#f5f5f5] transition-all duration-300 font-semibold"
              >
                Drop an Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
