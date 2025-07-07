import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarField } from './StarField';
import { WaveBackground } from './WaveBackground';

const experiences = [
  {
    title: 'LinuxWorld Internship',
    company: 'LinuxWorld',
    period: '2023 - Present',
    description: 'Built pipelines with Jenkins & Docker, monitored infrastructure with Grafana. Implemented automated deployment strategies and container orchestration.',
    icon: '🚀',
    skills: ['Jenkins', 'Docker', 'Grafana', 'Linux', 'CI/CD']
  },
  {
    title: 'B.Tech in Artificial Intelligence',
    company: 'Vivekananda Global University',
    period: '2021 - 2025',
    description: 'Focused on DevOps, MLOps, and Infrastructure-as-Code. Specialized in cloud technologies and automated deployment pipelines.',
    icon: '🎓',
    skills: ['DevOps', 'MLOps', 'Infrastructure-as-Code', 'Cloud Computing']
  }
];

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      <StarField />
      <WaveBackground />
      
      <div className="max-w-4xl mx-auto relative z-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-[#33d1ff]">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#33d1ff] to-[#00a8ff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#33d1ff] to-transparent opacity-30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#33d1ff] rounded-full border-4 border-black z-10">
                <div className="w-full h-full bg-[#33d1ff] rounded-full animate-pulse"></div>
              </div>

              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl backdrop-blur-sm border border-[#33d1ff]/20 p-6 hover:border-[#33d1ff] transition-all duration-300 hover:shadow-lg hover:shadow-[#33d1ff]/20">
                  <div className="text-3xl mb-3">{exp.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="text-[#33d1ff] font-semibold mb-2">{exp.company}</div>
                  <div className="text-gray-400 text-sm mb-4">{exp.period}</div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[#33d1ff]/10 text-[#33d1ff] rounded-full text-xs border border-[#33d1ff]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};