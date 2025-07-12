import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Instagram, Phone, Mail } from 'lucide-react';
import { StarField } from './StarField';
import { WaveBackground } from './WaveBackground';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black" ref={heroRef}>
      <StarField />
      <WaveBackground />
      
      {/* Social Icons - Fixed Position */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 space-y-4">
        <motion.a
          href="tel:+919057592503"
          className="block p-3 rounded-full bg-gray-900/30 backdrop-blur-sm border border-[#33d1ff]/20 hover:border-[#33d1ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#33d1ff]/30"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone className="w-5 h-5 text-[#33d1ff]" />
        </motion.a>
        
        <motion.a
          href="mailto:srajveer76483@gmail.com"
          className="block p-3 rounded-full bg-gray-900/30 backdrop-blur-sm border border-[#33d1ff]/20 hover:border-[#33d1ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#33d1ff]/30"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="w-5 h-5 text-[#33d1ff]" />
        </motion.a>
        
        <motion.a
          href="https://linkedin.com/in/rajveer-singh"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 rounded-full bg-gray-900/30 backdrop-blur-sm border border-[#33d1ff]/20 hover:border-[#33d1ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#33d1ff]/30"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Linkedin className="w-5 h-5 text-[#33d1ff]" />
        </motion.a>
        
        <motion.a
          href="https://github.com/srajveer76483"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 rounded-full bg-gray-900/30 backdrop-blur-sm border border-[#33d1ff]/20 hover:border-[#33d1ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#33d1ff]/30"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="w-5 h-5 text-[#33d1ff]" />
        </motion.a>
        
        <motion.a
          href="https://instagram.com/c2_dangi"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 rounded-full bg-gray-900/30 backdrop-blur-sm border border-[#33d1ff]/20 hover:border-[#33d1ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#33d1ff]/30"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Instagram className="w-5 h-5 text-[#33d1ff]" />
        </motion.a>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-[#33d1ff] to-[#00a8ff] bg-clip-text text-transparent relative">
              Rajveer Singh
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#33d1ff] to-[#00a8ff] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
            {/* Glowing ring animation - only the ring rotates, not the photo */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#33d1ff] to-[#00a8ff] p-1"
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="w-full h-full rounded-full bg-black p-1">
                {/* Photo container - no rotation */}
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/dangi.jpg"
                    alt="Rajveer Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Additional glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#33d1ff]/20 blur-xl"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl text-gray-300 mb-12"
        >
          DevOps Engineer ⚙️ | ML Enthusiast 🤖 | CI/CD Specialist
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={scrollToProjects}
            className="px-8 py-4 rounded-full border-2 border-[#33d1ff] text-[#33d1ff] font-semibold hover:bg-[#33d1ff] hover:text-black transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">🚀 View Projects</span>
            <motion.div
              className="absolute inset-0 bg-[#33d1ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            />
          </motion.button>
          
          <motion.button
            onClick={scrollToContact}
            className="px-8 py-4 rounded-full border-2 border-[#33d1ff] text-[#33d1ff] font-semibold hover:bg-[#33d1ff] hover:text-black transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">📬 Contact</span>
            <motion.div
              className="absolute inset-0 bg-[#33d1ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#33d1ff] cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};