import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-12 lg:px-24 bg-brand-off-white overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-yellow/10 -skew-x-12 transform origin-top-right -z-10" />
      
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-yellow font-display font-black text-2xl uppercase tracking-widest mb-4 block"
          >
            Hi There!
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-7xl lg:text-9xl font-display font-black text-brand-charcoal leading-none mb-6"
          >
            I'M <span className="text-brand-yellow">RIEAD HOSSAIN</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <span className="px-4 py-1 bg-brand-charcoal text-white text-xs font-bold uppercase tracking-widest rounded-full">
              Graphic Designer
            </span>
            <span className="px-4 py-1 border-2 border-brand-charcoal text-brand-charcoal text-xs font-bold uppercase tracking-widest rounded-full">
              Thumbnail Designer
            </span>
          </motion.div>

          <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed italic border-l-4 border-brand-yellow pl-6">
            "Ready to handle your next project. I blend bold visual storytelling with technical precision to bring your brand to life."
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-brand-charcoal text-brand-yellow text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-shadow hover:shadow-2xl shadow-brand-charcoal/20"
          >
            Hire Me <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
           className="relative flex justify-center items-center"
        >
          {/* Orbiting Elements */}
          <div className="absolute inset-0 border-[1px] border-brand-charcoal/10 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-0 border-[1px] border-brand-charcoal/10 rounded-full scale-125 animate-[spin_30s_linear_infinite_reverse]" />
          
          {/* Orbiting Icons */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-yellow rounded-full shadow-lg" />
          <div className="absolute bottom-1/4 right-0 w-4 h-4 bg-brand-charcoal rounded-full" />
          
          <div className="relative w-[350px] h-[350px] lg:w-[450px] lg:h-[450px]">
            <div className="absolute inset-0 bg-brand-yellow rounded-full -rotate-6 translate-x-4 translate-y-4 -z-10" />
            <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://i.ibb.co/zVbCynJC/IMG-20250921-160600.jpg" 
                alt="Riead Hossain" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
