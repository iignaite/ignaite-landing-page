'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 z-0" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl opacity-30" />
            <div className="w-full h-full relative rounded-2xl overflow-hidden border border-foreground/10">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-48 h-48 bg-primary/10 rounded-full blur-2xl z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="gradient-text">Ignaite Labs</span>
            </h2>
            <p className="text-foreground/80 text-lg">
              Founded with a passion for innovation, Ignaite Labs is a development agency dedicated to lighting up ideas and bringing them to life. Our name reflects our mission - to ignite creativity and transform concepts into reality.
            </p>
            <p className="text-foreground/80">
              Our team of experienced developers, designers, and strategists work together to create exceptional digital experiences. We believe in collaborative partnerships with our clients, ensuring that every project is tailored to meet their unique needs and objectives.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col">
                <span className="text-primary text-3xl font-bold">100+</span>
                <span className="text-foreground/70 text-sm">Completed Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary text-3xl font-bold">15+</span>
                <span className="text-foreground/70 text-sm">Team Members</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary text-3xl font-bold">5+</span>
                <span className="text-foreground/70 text-sm">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-primary text-3xl font-bold">99%</span>
                <span className="text-foreground/70 text-sm">Client Satisfaction</span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Our Core Values</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span>Innovation in everything we create</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span>Quality and attention to detail</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span>Client-focused approach</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span>Continuous learning and improvement</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 