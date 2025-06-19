
import React from 'react';
import { Code, Server, Database, Settings, Terminal, Palette } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    { name: 'JavaScript', icon: Code, category: 'language' },
    { name: 'HTML', icon: Code, category: 'markup' },
    { name: 'CSS', icon: Palette, category: 'styling' },
    { name: 'React', icon: Code, category: 'frontend' },
    { name: 'Tailwind CSS', icon: Palette, category: 'styling' },
    { name: 'C++', icon: Terminal, category: 'language' },
    { name: 'Next.js', icon: Server, category: 'framework' },
    { name: 'React Router', icon: Code, category: 'routing' },
    { name: 'Nodemon', icon: Settings, category: 'tool' },
    { name: 'Flask', icon: Server, category: 'backend' },
    { name: 'Python', icon: Terminal, category: 'language' },
    { name: 'C', icon: Terminal, category: 'language' },
    { name: 'Mongoose', icon: Database, category: 'database' },
    { name: 'Oracle', icon: Database, category: 'database' },
    { name: 'Supabase', icon: Database, category: 'database' },
    { name: 'Firebase', icon: Database, category: 'database' },
    { name: 'Git', icon: Terminal, category: 'vcs' },
    { name: 'GitHub', icon: Settings, category: 'platform' },
    { name: 'VS Code', icon: Settings, category: 'editor' },
    { name: 'Notion', icon: Settings, category: 'productivity' },
    { name: 'Loveable', icon: Settings, category: 'platform' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#007f5f]">Tools &</span> Technologies I Use
          </h2>
          <p className="text-lg text-[#aaaaaa] max-w-3xl mx-auto">
            Here are the tools and technologies I've explored, built with, or am currently learning.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="bg-[#1a1a1a] rounded-xl p-4 border border-gray-800 hover:border-[#007f5f] transition-all duration-300 group hover:scale-105 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div 
                    className="p-3 rounded-lg bg-[#2a2a2a] group-hover:bg-[#007f5f]/20 transition-colors duration-300"
                  >
                    <IconComponent 
                      size={24} 
                      className="text-[#aaaaaa] group-hover:text-[#007f5f] transition-colors duration-300"
                    />
                  </div>
                  <span className="text-sm font-medium text-[#aaaaaa] group-hover:text-[#f5f5f5] transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
