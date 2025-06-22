
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      title: 'What I Learned From Building Dinero',
      excerpt: 'A deep dive into the challenges and insights from creating a finance tracking app with modern web technologies.',
      tags: ['React', 'Supabase', 'UI/UX'],
      date: '15 December 2024',
      url: 'https://ansonblogs.netlify.app/'
    },
    {
      title: 'How I Built This Portfolio Website',
      excerpt: 'A complete breakdown of how I built this modern personal portfolio website using Lovable, React, TailwindCSS, and other modern tools.',
      tags: ['Lovable', 'Vibe Coding', 'Personal'],
      date: '19 June 2025',
      url: 'https://ansonblogs.netlify.app/posts/how-i-build-portfolio-website-using-lovable/'
    },
    {
      title: 'FaceCertify: Building Without Knowing Everything',
      excerpt: 'The story of building a facial recognition system while learning TensorFlow and OpenCV from scratch.',
      tags: ['Machine Learning', 'Python', 'Learning'],
      date: '20 November 2023',
      url: 'https://ansonblogs.netlify.app/'
    },
    {
      title: 'How I Built My Minimal Blog Website',
      excerpt: "From idea to deployment — how I built my own blog using Hugo, Netlify, and custom theming. Here's everything I learned.",
      tags: ['Blog', 'Hugo', 'Personal'],
      date: '20 June 2025',
      url: 'https://ansonblogs.netlify.app/posts/how-to-build-a-minimal-blog-website/'
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
            <a 
              href="https://ansonblogs.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#007f5f] hover:text-[#00664d] transition-colors duration-300"
            >
              Blog
            </a> – Honest Thoughts
          </h2>
          <p className="text-lg text-[#aaaaaa]">
            Sharing learnings, failures, and insights from the journey
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.title} 
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                borderColor: "rgb(55, 65, 81)",
                boxShadow: "0 10px 25px rgba(0, 127, 95, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="mb-4">
                <div className="flex items-center text-sm text-[#aaaaaa] mb-2">
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-[#f5f5f5] mb-3 group-hover:text-[#007f5f] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-[#aaaaaa] leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 bg-[#2a2a2a] text-[#aaaaaa] text-sm rounded-full border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#007f5f] font-semibold group-hover:text-[#00664d] transition-colors duration-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <span className="mr-2">Read More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="https://ansonblogs.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-transparent border-2 border-[#007f5f] text-[#007f5f] px-8 py-3 rounded-lg font-semibold hover:bg-[#007f5f] hover:text-[#0d0d0d] transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Posts</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
