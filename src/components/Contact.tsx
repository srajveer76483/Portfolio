import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { StarField } from './StarField';
import { WaveBackground } from './WaveBackground';

export const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black relative overflow-hidden">
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
            Get In <span className="text-[#33d1ff]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#33d1ff] to-[#00a8ff] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-[#33d1ff]/20 rounded-lg text-white placeholder-gray-400 focus:border-[#33d1ff] focus:outline-none focus:ring-2 focus:ring-[#33d1ff]/20 transition-all duration-300"
                  placeholder="Your Name"
                />
                <motion.div
                  className="absolute inset-0 border-2 border-[#33d1ff] rounded-lg opacity-0 pointer-events-none"
                  animate={{ opacity: formData.name ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-[#33d1ff]/20 rounded-lg text-white placeholder-gray-400 focus:border-[#33d1ff] focus:outline-none focus:ring-2 focus:ring-[#33d1ff]/20 transition-all duration-300"
                  placeholder="Your Email"
                />
                <motion.div
                  className="absolute inset-0 border-2 border-[#33d1ff] rounded-lg opacity-0 pointer-events-none"
                  animate={{ opacity: formData.email ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-[#33d1ff]/20 rounded-lg text-white placeholder-gray-400 focus:border-[#33d1ff] focus:outline-none focus:ring-2 focus:ring-[#33d1ff]/20 transition-all duration-300 resize-none"
                  placeholder="Your Message"
                />
                <motion.div
                  className="absolute inset-0 border-2 border-[#33d1ff] rounded-lg opacity-0 pointer-events-none"
                  animate={{ opacity: formData.message ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#33d1ff] to-[#00a8ff] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#33d1ff]/30 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Message 🚀
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl backdrop-blur-sm border border-[#33d1ff]/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#33d1ff]/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#33d1ff]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-400">srajveer76483@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#33d1ff]/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#33d1ff]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-400">+91 9057592503</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#33d1ff]/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#33d1ff]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-400">India</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#33d1ff]/20">
                <div className="text-white font-semibold mb-4">Follow Me</div>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/srajveer76483"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#33d1ff]/10 rounded-full flex items-center justify-center hover:bg-[#33d1ff]/20 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-6 h-6 text-[#33d1ff]" />
                  </motion.a>
                  
                  <motion.a
                    href="https://linkedin.com/in/rajveer-singh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#33d1ff]/10 rounded-full flex items-center justify-center hover:bg-[#33d1ff]/20 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-6 h-6 text-[#33d1ff]" />
                  </motion.a>
                  
                  <motion.a
                    href="https://instagram.com/c2_dangi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#33d1ff]/10 rounded-full flex items-center justify-center hover:bg-[#33d1ff]/20 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="w-6 h-6 text-[#33d1ff]" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};