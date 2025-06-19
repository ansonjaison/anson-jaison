
import React from 'react';

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#007f5f]">A Bit</span> About Me
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
        </div>
      </div>
    </section>
  );
};

export default About;
