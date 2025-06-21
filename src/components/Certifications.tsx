
import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: 'Internship - Python & ML',
      issuer: 'Revertech IT Solutions Private Limited',
      date: 'Jul 2024',
      description: 'Hands-on internship focusing on Python programming and Machine Learning fundamentals, including practical project experience.',
      certificateUrl: 'https://ansonblogs.netlify.app/certificates/Internship%20Python%20&%20ML%20-%20Revertech.pdf'
    },
    {
      title: 'Introduction to Programming in C',
      issuer: 'NPTEL',
      date: 'Mar 2024',
      description: 'NPTEL-certified foundational course on C programming, covering syntax, variables, loops, and problem-solving through structured coding.',
      certificateUrl: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs02/Course/NPTEL24CS02S34810033330042439.pdf'
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'Google Cloud',
      date: 'Oct 2024',
      description: 'Completion badge from Google Cloud\'s Generative AI course, covering the basics of generative models, LLMs, and ethical AI usage in modern applications.',
      certificateUrl: 'https://www.cloudskillsboost.google/public_profiles/d7bb3821-f608-4010-9f2d-f70cf2902cf8/badges/12012520'
    },
    {
      title: 'Introduction to OpenAI GPT Models',
      issuer: 'Infosys',
      date: 'Jul 2024',
      description: 'Introductory course on OpenAI GPT models, exploring large language model fundamentals, capabilities, and responsible AI practices.',
      certificateUrl: 'https://ansonblogs.netlify.app/certificates/Infosys%20Introduction%20to%20OpenAi%20GPT%20Models.pdf'
    },
    {
      title: 'Fundamentals of the C Language: Variables & Datatypes',
      issuer: 'Infosys',
      date: 'Mar 2023',
      description: 'A beginner-level course introducing the core concepts of the C language, focusing on data types, memory, and variable operations.',
      certificateUrl: 'https://ansonblogs.netlify.app/certificates/Infosys%20-%20Fundamentals%20of%20the%20C%20Language%20Variables%20&%20Datatypes.pdf'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#007f5f]">Certifications</span> & Achievements
          </h2>
          <p className="text-lg text-[#aaaaaa]">
            Continuous learning through structured programs and certifications
          </p>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                borderColor: "rgb(55, 65, 81)",
                boxShadow: "0 8px 20px rgba(0, 127, 95, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <motion.div 
                      className="p-2 rounded-lg bg-[#007f5f]/20 border border-[#007f5f]/40 mr-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <Award size={20} className="text-[#007f5f]" />
                    </motion.div>
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
                  <motion.a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#007f5f] text-[#0d0d0d] px-6 py-3 rounded-lg font-semibold hover:bg-[#00664d] transition-all duration-300 hover:scale-105 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
