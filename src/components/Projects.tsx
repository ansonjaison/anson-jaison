
import React from 'react';
import { ExternalLink, FileText, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'FaceCertify',
      description: 'Facial recognition system built with Flask, TensorFlow, and OpenCV',
      details: 'Admin dashboard + student model uploads, Attendance CSVs + smart interface',
      icon: Users,
      color: '#10b981',
      links: [
        {
          type: 'report',
          url: 'https://ansonblogs.netlify.app/otherfiles/FaceCertify_Group_Project_Report.pdf',
          label: 'Project Report'
        }
      ]
    },
    {
      title: 'Dinero – Finance Tracker',
      description: 'Built in Lovable with Supabase backend',
      details: 'Clean UI, animated charts, monthly breakdown',
      icon: ExternalLink,
      color: '#007f5f',
      links: [
        {
          type: 'live',
          url: 'https://dinero-app.lovable.app',
          label: 'Visit App'
        }
      ]
    },
    {
      title: 'Halfway Football',
      description: 'Former contributor to HalfwayFootball.com',
      details: 'Wrote transfer news, player profiles, and match analyses. Helped shape the publication\'s early tone and output',
      icon: Users,
      color: '#8b5cf6',
      links: [
        {
          type: 'live',
          url: 'https://halfwayfootball.com',
          label: 'Visit Site'
        }
      ]
    },
    {
      title: 'Personal Portfolio',
      description: 'Modern portfolio website built with React and Framer Motion',
      details: 'Responsive design, smooth animations, optimized performance with dark theme',
      icon: Globe,
      color: '#f59e0b',
      links: [
        {
          type: 'live',
          url: 'https://ansonblogs.netlify.app/',
          label: 'View Site'
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#007f5f]">Featured</span> Projects
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 transition-all duration-300 group flex flex-col h-full"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  borderColor: "rgb(55, 65, 81)",
                  boxShadow: "0 10px 25px rgba(0, 127, 95, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="p-3 rounded-lg mr-4 flex-shrink-0"
                    style={{
                      backgroundColor: `${project.color}20`,
                      border: `1px solid ${project.color}40`
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <IconComponent size={24} style={{ color: project.color }} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#f5f5f5]">{project.title}</h3>
                </div>

                <div className="flex-grow">
                  <p className="text-[#aaaaaa] mb-2">{project.description}</p>
                  <p className="text-sm text-[#888888] mb-6">{project.details}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.links.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center space-x-2 px-4 py-2 border border-gray-600 text-[#aaaaaa] rounded-lg transition-all duration-300 text-sm w-full sm:w-auto"
                      whileHover={{ 
                        borderColor: "rgb(107, 114, 128)",
                        color: "#f5f5f5",
                        y: -2
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.type === 'report' && <FileText size={16} />}
                      {link.type === 'live' && <ExternalLink size={16} />}
                      <span>{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
