import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Hero() {
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-drew-purple/20 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 filter blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-[30px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="flex flex-col space-y-6">
            <span className="service-chip">Premium Design Studio</span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming <span className="text-gradient">Ideas</span> Into Digital <span className="text-gradient">Excellence</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl">
              DrewVerse Design crafts premium digital experiences that blend
              stunning aesthetics with exceptional functionality to elevate your brand.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
              <Link to="/portfolio" className="group">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.98
              }} className="bg-drew-purple hover:bg-drew-purple/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center">
                  View Our Work
                  <motion.span initial={{
                  x: 0
                }} animate={{
                  x: 5
                }} transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 0.8
                }} className="ml-2">
                    <ArrowRight size={18} />
                  </motion.span>
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.98
              }} className="border border-white/20 hover:border-drew-purple/50 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:bg-drew-purple/10">
                  Let's Connect
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="relative">
            <div className="relative w-full h-[400px] md:h-[500px] glass-card rounded-2xl overflow-hidden">
              <motion.div initial={{
              y: 20,
              opacity: 0
            }} animate={{
              y: 0,
              opacity: 1
            }} transition={{
              duration: 1,
              delay: 0.6
            }} className="absolute inset-0 bg-gradient-to-br from-drew-purple/20 to-transparent"></motion.div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400">DrewVerse Design</span>
                    <h3 className="text-xl font-bold text-white">Creative Solutions</h3>
                  </div>
                  <span className="text-xs text-gray-400 bg-black/30 px-2 py-1 rounded-full">Premium</span>
                </div>
                
                <motion.div initial={{
                y: 20,
                opacity: 0
              }} animate={{
                y: 0,
                opacity: 1
              }} transition={{
                duration: 1,
                delay: 0.8
              }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Web Design', 'UX/UI Design', 'Brand Identity', 'Mobile Apps'].map((item, index) => <div key={index} className="glass-card rounded-lg p-4 hover-scale">
                      <h4 className="text-sm font-medium text-white">{item}</h4>
                      <div className="mt-2 w-16 h-1 bg-drew-purple rounded-full"></div>
                    </div>)}
                </motion.div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div animate={{
            y: [0, -10, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }} className="absolute -top-6 -right-6 w-24 h-24 glass-card rounded-xl flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-drew-purple flex items-center justify-center">
                <span className="text-lg font-bold text-white">D</span>
              </div>
            </motion.div>
            
            <motion.div animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }} className="absolute -bottom-8 -left-8 w-32 h-16 glass-card rounded-xl flex items-center justify-center">
              <span className="text-gradient font-medium">Let's Create</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
}