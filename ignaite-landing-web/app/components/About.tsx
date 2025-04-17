'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Team member data
const teamMembers = [
  {
    name: "Gaille Amolong",
    role: "Team Lead & AI/Software Engineer",
    description: "Enterprise-experienced engineer specializing in AI solutions and technical leadership.",
    image: "/team/placeholder.jpg",
  },
  {
    name: "Jake Bajenting",
    role: "Full Stack Engineer",
    description: "Expert in building robust, scalable applications with modern frameworks and technologies.",
    image: "/team/placeholder.jpg",
  },
  {
    name: "Iben Anoos",
    role: "Data Specialist",
    description: "Transforms complex data into actionable insights with advanced analytical techniques.",
    image: "/team/placeholder.jpg",
  },
  {
    name: "Kharl Patrick Cedeño",
    role: "UI/UX & Frontend Specialist",
    description: "Creates intuitive user experiences and visually stunning interfaces with a focus on user-centered design.",
    image: "/team/placeholder.jpg",
  },
  {
    name: "Milbert Macarambon",
    role: "DevOps and Cybersecurity Expert",
    description: "Ensures infrastructure security and optimization with industry-leading practices.",
    image: "/team/placeholder.jpg",
  },
  {
    name: "John Vincent Balazon",
    role: "Frontend Developer",
    description: "Creates beautiful, user-friendly interfaces with a focus on modern design principles.",
    image: "/team/placeholder.jpg",
  },
  {
    name: "Fred Heruela",
    role: "Linux Specialist",
    description: "Masters complex Linux environments and optimizes system performance for enterprise applications.",
    image: "/team/placeholder.jpg",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About <span className="gradient-text">Us</span>
          </motion.h2>
          <motion.p 
            className="text-foreground/80 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are a dynamic team led by enterprise-experienced professionals who combine technical excellence with innovative thinking to deliver exceptional results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
            <p className="text-foreground/80 mb-6">
              Under the leadership of our experienced technical lead, we combine enterprise-level expertise with specialized skills to deliver solutions that exceed expectations. Our approach merges industry best practices with innovative ideas.
            </p>
            <p className="text-foreground/80 mb-6">
              Each of our team members brings unique strengths to the table, creating a synergy that allows us to tackle complex challenges with confidence and deliver results that drive real business value.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-1">Enterprise Experience</h4>
                <p className="text-sm text-foreground/70">We bring industry-proven methods from enterprise environments to every project.</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-1">Technical Excellence</h4>
                <p className="text-sm text-foreground/70">Our specialized team members deliver cutting-edge solutions across the technology stack.</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-1">Strategic Leadership</h4>
                <p className="text-sm text-foreground/70">We provide clear direction and insights to achieve your business objectives.</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-medium mb-1">Client Focus</h4>
                <p className="text-sm text-foreground/70">Your goals become our mission, with regular communication and transparency.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/about/team.jpg" 
                alt="Ignaite Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-semibold mb-2">Our Team</h3>
                <p className="text-white/80">Led by enterprise expertise, powered by specialized talent</p>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">6+</div>
                <div className="text-sm">Years Combined Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-4 text-center">Meet Our Team</h3>
        <p className="text-foreground/80 max-w-3xl mx-auto text-center mb-10">
          Led by enterprise experience and composed of specialists in their domains, we bring together the perfect mix of skills to deliver exceptional results for your projects.
        </p>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/40 backdrop-blur-sm p-6 rounded-xl border border-foreground/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/20">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-center">{member.name}</h4>
              <p className="text-primary/90 text-center text-sm font-medium mb-2">{member.role}</p>
              <p className="text-foreground/70 text-center text-sm">{member.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 