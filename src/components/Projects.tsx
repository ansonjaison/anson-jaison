
import React from 'react';
import { ExternalLink, Github, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FaceCertify',
      description: 'Facial recognition system built with Flask, TensorFlow, and OpenCV',
      details: 'Admin dashboard + student model uploads, Attendance CSVs + smart interface',
      icon: Users,
      color: '#10b981',
      links: [
        { type: 'github', url: '#', label: 'GitHub' }
      ]
    },
    {
      title: 'Dinero – Finance Tracker',
      description: 'Built in Lovable with Supabase backend',
      details: 'Clean UI, animated charts, monthly breakdown',
      icon: ExternalLink,
      color: '#f97316',
      links: [
        { type: 'live', url: 'https://dinero-app.lovable.app', label: 'Visit App' }
      ]
    },
    {
      title: 'Halfway Football',
      description: 'Former contributor to HalfwayFootball.com',
      details: 'Wrote transfer news, player profiles, and match analyses. Helped shape the publication\'s early tone and output',
      icon: Users,
      color: '#8b5cf6',
      links: [
        { type: 'live', url: 'https://halfwayfootball.com', label: 'Visit Site' }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#f97316]">Featured</span> Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div 
                    className="p-3 rounded-lg mr-4"
                    style={{ backgroundColor: `${project.color}20`, border: `1px solid ${project.color}40` }}
                  >
                    <IconComponent 
                      size={24} 
                      style={{ color: project.color }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#f5f5f5]">{project.title}</h3>
                </div>

                <p className="text-[#aaaaaa] mb-2">{project.description}</p>
                <p className="text-sm text-[#888888] mb-6">{project.details}</p>

                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 border border-gray-600 text-[#aaaaaa] rounded-lg hover:border-gray-500 hover:text-[#f5f5f5] transition-all duration-300 text-sm"
                    >
                      {link.type === 'github' && <Github size={16} />}
                      {link.type === 'live' && <ExternalLink size={16} />}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
