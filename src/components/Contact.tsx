
import React from 'react';
import { Github, X, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <motion.div 
          className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-[#007f5f]">LET'S BUILD</span><br />
              <span className="text-[#f5f5f5]">SOMETHING COOL</span><br />
              <span className="text-[#007f5f]">TOGETHER.</span>
            </h2>
          </motion.div>

          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <div className="flex items-center space-x-2 text-lg">
                <Mail size={20} className="text-[#007f5f]" />
                <a 
                  href="mailto:ansonjaison.me@gmail.com"
                  className="text-[#f5f5f5] hover:text-[#007f5f] transition-colors duration-300 font-medium"
                >
                  ansonjaison.me@gmail.com
                </a>
              </div>
            </div>

            <p className="text-[#aaaaaa] text-lg mb-8">
              Connect on socials
            </p>

            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-[#2a2a2a] rounded-full border border-gray-700 transition-all duration-300"
                    style={{
                      '--hover-color': social.color
                    } as React.CSSProperties}
                    whileHover={{ 
                      scale: 1.1,
                      borderColor: "rgb(107, 114, 128)",
                      y: -3
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <IconComponent 
                      size={24} 
                      className="text-[#aaaaaa] group-hover:text-[#007f5f] transition-colors duration-300"
                    />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="mailto:ansonjaison.me@gmail.com"
              className="inline-flex items-center space-x-2 bg-[#007f5f] text-[#f5f5f5] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#00664d",
                boxShadow: "0 10px 25px rgba(0, 127, 95, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={20} />
              <span>Start a Conversation</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
