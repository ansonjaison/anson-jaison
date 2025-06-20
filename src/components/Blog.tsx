
import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'What I Learned From Building Dinero',
      excerpt: 'A deep dive into the challenges and insights from creating a finance tracking app with modern web technologies.',
      tags: ['React', 'Supabase', 'UI/UX'],
      readTime: '5 min read',
      date: '2024'
    },
    {
      title: 'How I Built This Portfolio Website',
      excerpt: 'A complete breakdown of how I built this modern personal portfolio website using Lovable, React, TailwindCSS, and other modern tools.',
      tags: ['Lovable', 'Vibe Coding', 'Personal'],
      readTime: '3 min read',
      date: '2025'
    },
    {
      title: 'FaceCertify: Building Without Knowing Everything',
      excerpt: 'The story of building a facial recognition system while learning TensorFlow and OpenCV from scratch.',
      tags: ['Machine Learning', 'Python', 'Learning'],
      readTime: '7 min read',
      date: '2023'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={post.title} 
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:scale-105 cursor-pointer"
            >
              <div className="mb-4">
                <div className="flex items-center text-sm text-[#aaaaaa] mb-2 space-x-4">
                  <span>{post.date}</span>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
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

              <div className="flex items-center text-[#007f5f] font-semibold group-hover:text-[#00664d] transition-colors duration-300">
                <span className="mr-2">Read More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://ansonblogs.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-transparent border-2 border-[#007f5f] text-[#007f5f] px-8 py-3 rounded-lg font-semibold hover:bg-[#007f5f] hover:text-[#0d0d0d] transition-all duration-300 group"
          >
            <span>View All Posts</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
