
import React from 'react';

const TechStack = () => {
  const techCategories = [
    {
      title: 'FRONTEND',
      color: '#f97316',
      techs: [
        { name: 'JavaScript', icon: '🟨' },
        { name: 'HTML', icon: '🟥' },
        { name: 'CSS', icon: '🟦' },
        { name: 'React', icon: '⚛️' },
        { name: 'Tailwind CSS', icon: '💙' },
        { name: 'C++', icon: '🧮' }
      ]
    },
    {
      title: 'BACKEND',
      color: '#10b981',
      techs: [
        { name: 'Next.js', icon: '⏱️' },
        { name: 'React Router', icon: '🔁' },
        { name: 'Nodemon', icon: '🧪' },
        { name: 'Flask', icon: '🍜' },
        { name: 'Python', icon: '🐍' },
        { name: 'C', icon: '💻' }
      ]
    },
    {
      title: 'DATABASE',
      color: '#8b5cf6',
      techs: [
        { name: 'Mongoose', icon: '🧬' },
        { name: 'Oracle', icon: '🟥' },
        { name: 'Supabase', icon: '💚' },
        { name: 'Firebase', icon: '🔥' }
      ]
    },
    {
      title: 'TOOLS & OTHER TECH',
      color: '#06b6d4',
      techs: [
        { name: 'Git', icon: '🧠' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'VS Code', icon: '🖥️' },
        { name: 'Notion', icon: '📝' },
        { name: 'Loveable', icon: '💝' }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#f97316]">Tools &</span> Technologies I Use
          </h2>
          <p className="text-lg text-[#aaaaaa] max-w-3xl mx-auto">
            Here are the tools and technologies I've explored, built with, or am currently learning — grouped in a way that reflects how I think and work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
            >
              <h3 
                className="text-lg font-bold mb-6 uppercase tracking-wide"
                style={{ color: category.color }}
              >
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center p-3 rounded-lg hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-105 group cursor-pointer"
                  >
                    <div 
                      className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: `drop-shadow(0 0 8px ${category.color}40)` }}
                    >
                      {tech.icon}
                    </div>
                    <span className="text-sm text-center text-[#aaaaaa] group-hover:text-[#f5f5f5] transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
