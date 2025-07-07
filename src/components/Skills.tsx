import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarField } from './StarField';
import { WaveBackground } from './WaveBackground';

const skills = [
  { name: 'Docker', icon: '🐳', animation: 'rotate' },
  { name: 'Kubernetes', icon: '☸️', animation: 'bounce' },
  { name: 'Terraform', icon: '🔺', animation: 'spin' },
  { name: 'Prometheus', icon: '📊', animation: 'pulse' },
  { name: 'Grafana', icon: '📈', animation: 'scale' },
  { name: 'Jenkins', icon: '🔧', animation: 'shake' },
  { name: 'AWS', icon: '☁️', animation: 'float' },
  { name: 'GitHub Actions', icon: '⚡', animation: 'glow' },
  { name: 'Python', icon: '🐍', animation: 'wiggle' },
  { name: 'Linux', icon: '🐧', animation: 'tilt' },
  { name: 'Git', icon: '🌿', animation: 'grow' },
  { name: 'Ansible', icon: '🔄', animation: 'loop' },
];

const animations = {
  rotate: { rotate: [0, 360] },
  bounce: { y: [0, -10, 0] },
  spin: { rotate: [0, 180, 360] },
  pulse: { scale: [1, 1.2, 1] },
  scale: { scale: [1, 1.1, 1] },
  shake: { x: [0, -5, 5, 0] },
  float: { y: [0, -8, 0] },
  glow: { boxShadow: ['0 0 0 rgba(51, 209, 255, 0)', '0 0 20px rgba(51, 209, 255, 0.5)', '0 0 0 rgba(51, 209, 255, 0)'] },
  wiggle: { rotate: [0, 10, -10, 0] },
  tilt: { rotate: [0, 5, -5, 0] },
  grow: { scale: [1, 1.15, 1] },
  loop: { rotate: [0, 360] },
};

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
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
            Skills & <span className="text-[#33d1ff]">Tools</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#33d1ff] to-[#00a8ff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl backdrop-blur-sm border border-[#33d1ff]/20 p-6 text-center hover:border-[#33d1ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#33d1ff]/20">
                <motion.div
                  className="text-4xl mb-4 cursor-pointer"
                  whileHover={animations[skill.animation as keyof typeof animations]}
                  transition={{ duration: 0.8, repeat: 1 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#33d1ff] transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};