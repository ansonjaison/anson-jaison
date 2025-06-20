
import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'FreeCodeCamp',
      date: '2023',
      description: 'Comprehensive certification covering HTML, CSS, JavaScript, React, Node.js, and database management.',
      certificateUrl: '#'
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: '2023',
      description: 'Deep dive into Python programming with focus on data analysis, visualization, and machine learning basics.',
      certificateUrl: '#'
    },
    {
      title: 'Cloud Computing Fundamentals',
      issuer: 'Google Cloud',
      date: '2022',
      description: 'Foundation course covering cloud architecture, services, and deployment strategies on Google Cloud Platform.',
      certificateUrl: '#'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#007f5f]">Certifications</span> & Achievements
          </h2>
          <p className="text-lg text-[#aaaaaa]">
            Continuous learning through structured programs and certifications
          </p>
        </div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-lg bg-[#007f5f]/20 border border-[#007f5f]/40 mr-4">
                      <Award size={20} className="text-[#007f5f]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#f5f5f5] mb-1">{cert.title}</h3>
                      <div className="flex items-center text-sm text-[#aaaaaa] space-x-4">
                        <span className="font-semibold">{cert.issuer}</span>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#aaaaaa] leading-relaxed">{cert.description}</p>
                </div>
                
                <div className="flex-shrink-0">
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#007f5f] text-[#0d0d0d] px-6 py-3 rounded-lg font-semibold hover:bg-[#00664d] transition-all duration-300 hover:scale-105 group"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
