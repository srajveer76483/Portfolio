import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarField } from './StarField';
import { WaveBackground } from './WaveBackground';

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-4 bg-black relative overflow-hidden">
      <StarField />
      <WaveBackground />
      
      <div className="max-w-6xl mx-auto relative z-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#33d1ff]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#33d1ff] to-[#00a8ff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="w-full h-80 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl backdrop-blur-sm border border-[#33d1ff]/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">⚙️</div>
                <div className="text-2xl font-bold text-[#33d1ff] mb-2">CI/CD Pipeline</div>
                <motion.div
                  className="flex space-x-2 justify-center"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-3 h-3 bg-[#33d1ff] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#33d1ff] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#33d1ff] rounded-full"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl backdrop-blur-sm border border-[#33d1ff]/20 p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm Rajveer Singh, a DevOps Engineer passionate about automation, infrastructure scaling & smooth deployments. 
                Hooked on Docker 🐳, Kubernetes ☸️, Jenkins 🔧. Now mastering MLOps and Infrastructure-as-Code to deliver smarter pipelines.
              </p>
              
              <div className="flex justify-center mb-6">
                <div className="text-center p-4 bg-black/30 rounded-lg">
                  <div className="text-2xl font-bold text-[#33d1ff]">10+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
              </div>

              <div className="text-center">
                <motion.button
                  className="px-6 py-3 rounded-full border-2 border-[#33d1ff] text-[#33d1ff] font-semibold hover:bg-[#33d1ff] hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Connect
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};