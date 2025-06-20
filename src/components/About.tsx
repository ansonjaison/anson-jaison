
import React from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#007f5f]">A Bit</span>{' '}
            <span className="text-[#f5f5f5]">About Me</span>
          </h2>
        </div>

        <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">
          <div className="space-y-6 text-lg leading-relaxed text-[#aaaaaa]">
            <p>
              I'm Anson — a final-year BTech student who's curious about tech, shy on stage but loud in ideas.
            </p>
            <p>
              I enjoy learning by building, even if it means breaking things first.
            </p>
            <p>
              I'm exploring code, design, and the human stories behind software.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="https://ansonblogs.netlify.app/posts/about-me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#007f5f] text-[#0d0d0d] px-6 py-3 rounded-lg font-semibold hover:bg-[#00664d] transition-all duration-300 hover:scale-105 group"
            >
              <span>Know More</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
