
import React from 'react';

const TechStack = () => {
  const technologies = [
    { 
      name: 'Python', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
    },
    { 
      name: 'C', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg'
    },
    { 
      name: 'Flask', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg'
    },
    { 
      name: 'HTML', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
    },
    { 
      name: 'CSS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
    },
    { 
      name: 'JavaScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'SQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg'
    },
    { 
      name: 'Git', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
    },
    { 
      name: 'VS Code', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'
    },
    { 
      name: 'Notion', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg'
    }
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="bg-[#1a1a1a] rounded-xl p-4 border border-gray-800 hover:border-[#007f5f] transition-all duration-300 group hover:scale-105 cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-lg bg-[#2a2a2a] group-hover:bg-[#007f5f]/20 transition-colors duration-300">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-[#aaaaaa] group-hover:text-[#f5f5f5] transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
