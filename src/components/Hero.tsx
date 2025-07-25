
import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div 
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Hello, I'm{' '}
                <span className="text-[#007f5f] bg-gradient-to-r from-[#007f5f] to-[#00664d] bg-clip-text text-transparent">
                  Anson Jaison
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl sm:text-2xl text-[#aaaaaa] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                A student exploring tech, design, and stories that connect people.
              </motion.p>
            </div>
            
            <motion.p 
              className="text-lg text-[#aaaaaa] italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Currently building useful tools and sharing learnings from the journey.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <motion.button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center space-x-2 bg-[#007f5f] text-[#f5f5f5] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 group"
                whileHover={{ scale: 1.05, backgroundColor: "#00664d" }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Let's Connect</span>
                <motion.div
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
              
              <motion.a
                href="https://ansonblogs.netlify.app/Resume/Anson_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 border border-[#007f5f] text-[#007f5f] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#007f5f] hover:text-[#f5f5f5] group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText size={20} />
                <span>View Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right content - Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#007f5f] transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src="https://ansonblogs.netlify.app/images/ansonjaison.jpg"
                  alt="Anson Jaison"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
