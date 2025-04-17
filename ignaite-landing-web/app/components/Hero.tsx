'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent z-0" />
      

      <div className="container mx-auto px-4 md:px-6 z-10 mt-24 sm:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                We <span className="gradient-text">Light Up</span> Your Ideas
              </motion.h1>
              <motion.p 
                className="mt-4 text-lg md:text-xl text-foreground/80 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ignaite Labs is a development agency led by enterprise-experienced professionals, delivering innovative solutions with advanced technical expertise.
              </motion.p>
            </div>
            
            <div className="flex items-start space-x-2 mt-2">
              
              <div className="bg-primary/10 px-3 py-1.5 rounded-full text-sm">
                <span className="text-primary font-medium">Technical Excellence</span>
              </div>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="#contact" 
                className="btn-primary px-6 py-3 rounded-full text-center font-medium"
              >
                Start Your Project
              </Link>
              <Link 
                href="#services" 
                className="px-6 py-3 rounded-full text-center border border-foreground/20 hover:border-primary/60 transition-all duration-300 font-medium"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              {/* Primary glow effect */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-primary/20 blur-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              
              {/* Secondary glow effect */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-primary/10 blur-3xl"
                animate={{ 
                  scale: [1.2, 0.8, 1.2],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />

              {/* Outer rotating ring */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] border-2 border-primary/20 rounded-full" />
              </motion.div>

              {/* Middle rotating ring */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-56 h-56 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] border border-primary/30 rounded-full" />
              </motion.div>

              {/* Inner rotating ring */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-40 h-40 md:w-64 md:h-64 lg:w-[300px] lg:h-[300px] border border-primary/40 rounded-full" />
              </motion.div>

              {/* Logo container */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ 
                  scale: [1, 1.05, 1],
                  filter: ["brightness(0.9)", "brightness(1.1)", "brightness(0.9)"]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <Image 
                  src="/logo/logo.png" 
                  alt="Ignaite Labs Logo" 
                  width={300}
                  height={125}
                  className="opacity-95 drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 