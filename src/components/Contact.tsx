
import React from 'react';
import { Github, X, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://in.linkedin.com/in/anson-jaison',
      icon: Linkedin,
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ansonjaison',
      icon: Github,
      color: '#f5f5f5'
    },
    {
      name: 'X (Twitter)',
      url: 'https://twitter.com/i_ansonjaison',
      icon: X,
      color: '#1da1f2'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-gray-800">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-[#f97316]">LET'S BUILD</span><br />
              <span className="text-[#f5f5f5]">SOMETHING COOL</span><br />
              <span className="text-[#f97316]">TOGETHER.</span>
            </h2>
          </div>

          <div className="text-center mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <div className="flex items-center space-x-2 text-lg">
                <Mail size={20} className="text-[#f97316]" />
                <a 
                  href="mailto:ansonjaison@outlook.in"
                  className="text-[#f5f5f5] hover:text-[#f97316] transition-colors duration-300 font-medium"
                >
                  ansonjaison@outlook.in
                </a>
              </div>
            </div>

            <p className="text-[#aaaaaa] text-lg mb-8">
              Connect on socials
            </p>

            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-[#2a2a2a] rounded-full border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-110"
                    style={{
                      '--hover-color': social.color
                    } as React.CSSProperties}
                  >
                    <IconComponent 
                      size={24} 
                      className="text-[#aaaaaa] group-hover:text-[#f97316] transition-colors duration-300"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:ansonjaison@outlook.in"
              className="inline-flex items-center space-x-2 bg-[#f97316] text-[#0d0d0d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#ea580c] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#f97316]/20"
            >
              <Mail size={20} />
              <span>Start a Conversation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
