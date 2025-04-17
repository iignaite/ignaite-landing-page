'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'AI Pilipinas Platform',
    category: 'Enterprise Web Application',
    description: 'A comprehensive platform showcasing AI initiatives and resources in the Philippines. Built with enterprise-grade architecture and modern technologies to ensure scalability, performance, and security.',
    image: '/projects/ai-pilipinas.jpg',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'ExpressJS', 'PostgreSQL', 'AI Integration', 'Enterprise Architecture'],
    url: 'https://staging.aipilipinas.org/',
    features: [
      'Robust authentication and authorization system',
      'Advanced data visualization components',
      'Optimized for performance and SEO',
      'Responsive design for all devices',
      'Secure API integration architecture'
    ]
  }
];

const categories = ['All', 'Enterprise Web Application'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent z-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="gradient-text">Portfolio</span>
          </motion.h2>
          <motion.p 
            className="text-foreground/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We deliver enterprise-quality solutions with a focus on technical excellence and business value. Our projects reflect our commitment to pushing boundaries while maintaining industry best practices.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-foreground/5 hover:bg-foreground/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          className="max-w-6xl mx-auto"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-foreground/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block bg-primary/90 text-white text-xs font-medium py-1.5 px-3 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-foreground/80 mb-6">{project.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold uppercase text-foreground/50 mb-2">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span className="text-foreground/70">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors duration-300"
                      >
                        View Case Study
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-primary/10 px-6 py-3 rounded-xl mb-8">
            <h3 className="text-xl font-semibold text-primary">Ready to build your next project?</h3>
          </div>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            We&apos;re actively taking on select new projects. Our team brings enterprise experience and specialized expertise to deliver exceptional results for your business.
          </p>
          <Link 
            href="#contact" 
            className="btn-primary inline-flex items-center px-8 py-3 rounded-full text-white font-medium"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
} 