import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { StarField } from './StarField';
import { WaveBackground } from './WaveBackground';

const projects = [
  {
    title: 'AI-Powered Salary Predictor',
    description: 'Machine Learning model using Linear Regression to predict salaries based on real-world datasets. Deployed with Streamlit and automated CI/CD pipeline.',
    tech: ['Python', 'Streamlit', 'Linear Regression', 'GitHub Actions'],
    github: 'https://github.com/srajveer76483/my',
    live: '#',
    emoji: '🧠'
  },
  {
    title: 'Kubernetes Cluster Management',
    description: 'Automated Kubernetes deployment with monitoring, logging, and scaling capabilities using Helm charts and custom operators.',
    tech: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana'],
    github: 'https://github.com/srajveer76483',
    live: '#',
    emoji: '☸️'
  },
  {
    title: 'CI/CD Pipeline Automation',
    description: 'End-to-end CI/CD pipeline with automated testing, security scanning, and multi-environment deployment using Jenkins and Docker.',
    tech: ['Jenkins', 'Docker', 'Terraform', 'AWS'],
    github: 'https://github.com/srajveer76483',
    live: '#',
    emoji: '🚀'
  }
];

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 px-4 bg-black relative overflow-hidden">
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
            Projects & <span className="text-[#33d1ff]">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#33d1ff] to-[#00a8ff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl backdrop-blur-sm border border-[#33d1ff]/20 p-6 h-full hover:border-[#33d1ff] transition-all duration-500 hover:shadow-2xl hover:shadow-[#33d1ff]/20 hover:transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{project.emoji}</div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#33d1ff] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#33d1ff]/10 text-[#33d1ff] rounded-full text-xs border border-[#33d1ff]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black/30 rounded-lg text-[#33d1ff] hover:bg-[#33d1ff]/10 transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                  
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#33d1ff]/10 rounded-lg text-[#33d1ff] hover:bg-[#33d1ff]/20 transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};