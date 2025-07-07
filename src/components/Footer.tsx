import React from 'react';
import { motion } from 'framer-motion';
import { StarField } from './StarField';
import { WaveBackground } from './WaveBackground';

const techBadges = [
  { name: 'React', icon: '⚛️', url: 'https://reactjs.org' },
  { name: 'Tailwind', icon: '🎨', url: 'https://tailwindcss.com' },
  { name: 'GitHub', icon: '🧩', url: 'https://github.com' },
  { name: 'Framer Motion', icon: '🎞', url: 'https://framer.com/motion' },
  { name: 'Three.js', icon: '🔭', url: 'https://threejs.org' },
  { name: 'TypeScript', icon: '📘', url: 'https://typescriptlang.org' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-[#33d1ff]/20 py-12 px-4 relative overflow-hidden">
      <StarField />
      <WaveBackground />
      
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {techBadges.map((badge) => (
              <motion.a
                key={badge.name}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 rounded-full border border-[#33d1ff]/20 hover:border-[#33d1ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#33d1ff]/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{badge.icon}</span>
                <span className="text-sm text-gray-300 hover:text-[#33d1ff]">{badge.name}</span>
              </motion.a>
            ))}
          </div>
          
          <div className="text-gray-400 text-center">
            <p>© Rajveer Singh 2025 — Crafted with 💙</p>
            <p className="text-sm mt-2">DevOps Engineer | ML Enthusiast | CI/CD Specialist</p>
          </div>
        </div>
      </div>
    </footer>
  );
};