import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
const About = () => {
  return <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-12" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.6,
        ease: "easeOut"
      }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#007f5f]">A Bit</span>{' '}
            <span className="text-[#f5f5f5]">About Me</span>
          </h2>
        </motion.div>

        <motion.div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: "-100px"
      }} transition={{
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }} whileHover={{
        borderColor: "rgb(55, 65, 81)"
      }}>
          <motion.div className="space-y-6 text-lg leading-relaxed text-[#aaaaaa]" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            <p>I'm Anson — a final-year BTech student passionate about technology, design, and the ideas that bring people together.</p>
            <p>I love learning by building, and I'm always exploring the intersection of code, creativity, and meaningful user experiences.</p>
            <p>I'm currently trying out different tools and technologies, slowly carving out my own path in the world of tech.</p>
          </motion.div>
          
          <motion.div className="mt-8 text-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }}>
            <motion.a href="https://ansonblogs.netlify.app/posts/about-me/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-[#007f5f] text-[#0d0d0d] px-6 py-3 rounded-lg font-semibold transition-all duration-300 group" whileHover={{
            scale: 1.05,
            backgroundColor: "#00664d"
          }} whileTap={{
            scale: 0.98
          }}>
              <span>Know More</span>
              <motion.div animate={{
              x: 0
            }} whileHover={{
              x: 3
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}>
                <ArrowRight size={16} />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default About;