import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Expand, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const categories = ['All', 'Print Design', 'Thumbnail Design'];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl font-display font-black text-brand-charcoal relative inline-block mb-4">
              PORTFOLIO
              <div className="absolute -left-12 top-1/2 w-8 h-1 bg-brand-yellow" />
            </h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Selected works that define my style</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-xs font-black uppercase tracking-widest rounded-full border-2 transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-brand-yellow border-brand-yellow text-brand-charcoal shadow-lg' 
                  : 'bg-transparent border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { delay: index * 0.1, duration: 0.4 }
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-brand-charcoal/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <span className="text-brand-yellow text-xs font-black uppercase tracking-widest mb-4 block">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-display font-black mb-6">
                      {project.title}
                    </h3>
                    <div className="flex gap-4 justify-center">
                      <Link 
                        to={`/project/${project.id}`}
                        className="w-12 h-12 rounded-full bg-white text-brand-charcoal flex items-center justify-center hover:bg-brand-yellow hover:scale-110 transition-all"
                      >
                        <LinkIcon className="w-5 h-5" />
                      </Link>
                      <Link 
                        to={`/project/${project.id}`}
                        className="w-12 h-12 rounded-full bg-white text-brand-charcoal flex items-center justify-center hover:bg-brand-yellow hover:scale-110 transition-all text-xs font-bold"
                      >
                        <Expand className="w-5 h-5" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
