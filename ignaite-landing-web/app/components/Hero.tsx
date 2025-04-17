'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent z-0" />
      
      <div className="absolute inset-0 z-0">
        {/* Background particles that flow across the header */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.3,
              scale: Math.random() * 0.8 + 0.5,
            }}
            animate={{
              x: [
                `${Math.random() * 10}%`,
                `${Math.random() * 90 + 10}%`,
                `${Math.random() * 10}%`,
              ],
              y: [
                `${Math.random() * 10}%`,
                `${Math.random() * 90 + 10}%`,
                `${Math.random() * 10}%`,
              ],
              opacity: [Math.random() * 0.4 + 0.3, Math.random() * 0.4 + 0.3],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Flowing dots that move horizontally across the screen */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`flow-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
            initial={{
              x: "-5%",
              y: `${10 + i * 10}%`,
              opacity: 0.5,
            }}
            animate={{
              x: ["-5%", "105%", "-5%"],
              y: [`${10 + i * 10}%`, `${15 + i * 10}%`, `${10 + i * 10}%`],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}
        
        {/* Diagonal flowing dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`diag-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
            initial={{
              x: "0%",
              y: "0%",
              opacity: 0.4,
            }}
            animate={{
              x: ["0%", "100%", "0%"],
              y: ["0%", "100%", "0%"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
        
        {/* Reverse diagonal flowing dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`rev-diag-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
            initial={{
              x: "100%",
              y: "0%",
              opacity: 0.4,
            }}
            animate={{
              x: ["100%", "0%", "100%"],
              y: ["0%", "100%", "0%"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 18 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2.5,
            }}
          />
        ))}

        {/* Main orange floating dot */}
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-orange-500/80 blur-sm z-10"
          initial={{
            x: "65%",
            y: "40%",
            opacity: 0.8,
          }}
          animate={{
            x: ["65%", "70%", "62%", "68%", "65%"],
            y: ["40%", "35%", "42%", "38%", "40%"],
            scale: [1, 1.2, 0.9, 1.1, 1],
            opacity: [0.7, 0.9, 0.7, 0.8, 0.7],
            boxShadow: [
              "0 0 20px 10px rgba(249, 115, 22, 0.3)",
              "0 0 30px 15px rgba(249, 115, 22, 0.4)",
              "0 0 25px 5px rgba(249, 115, 22, 0.2)",
              "0 0 35px 15px rgba(249, 115, 22, 0.5)",
              "0 0 20px 10px rgba(249, 115, 22, 0.3)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary orange dot */}
        <motion.div
          className="absolute w-10 h-10 rounded-full bg-orange-400/60 blur-sm"
          initial={{
            x: "30%",
            y: "65%",
            opacity: 0.6,
          }}
          animate={{
            x: ["30%", "33%", "28%", "35%", "30%"],
            y: ["65%", "62%", "68%", "63%", "65%"],
            scale: [1, 1.3, 0.8, 1.2, 1],
            opacity: [0.5, 0.7, 0.4, 0.6, 0.5],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Small tertiary orange dot */}
        <motion.div
          className="absolute w-6 h-6 rounded-full bg-orange-300/50 blur-sm"
          initial={{
            x: "75%",
            y: "75%",
            opacity: 0.5,
          }}
          animate={{
            x: ["75%", "73%", "77%", "72%", "75%"],
            y: ["75%", "72%", "76%", "73%", "75%"],
            scale: [1, 1.4, 0.9, 1.3, 1],
            opacity: [0.4, 0.6, 0.3, 0.5, 0.4],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

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