import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Calendar, Tag, Layers } from 'lucide-react';
import { projects } from '../data/projects';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-off-white px-6 text-center">
        <h1 className="text-4xl font-display font-black text-brand-charcoal mb-4">PROJECT NOT FOUND</h1>
        <p className="text-gray-500 mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Link 
          to="/" 
          className="px-8 py-4 bg-brand-charcoal text-brand-yellow font-black uppercase tracking-widest rounded-xl hover:shadow-2xl transition-all"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-off-white min-h-screen"
    >
      {/* Header / Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent" />
        
        <div className="absolute bottom-12 left-12 lg:left-24 right-12">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-brand-yellow text-xs font-black uppercase tracking-widest mb-4 block">
              {project.category}
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-black text-white leading-tight uppercase">
              {project.title}
            </h1>
          </motion.div>
        </div>

        <button 
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 lg:left-24 w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-charcoal hover:bg-brand-yellow transition-all shadow-xl z-10"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-12 lg:px-24 py-24">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-display font-black text-brand-charcoal mb-6 border-b-4 border-brand-yellow inline-block">
                OVERVIEW
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.description}
              </p>
            </section>

            {project.challenges && (
              <section>
                <h2 className="text-2xl font-display font-black text-brand-charcoal mb-6 border-b-4 border-brand-yellow inline-block">
                  THE CHALLENGE
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {project.challenges}
                </p>
              </section>
            )}

            {project.solution && (
              <section>
                <h2 className="text-2xl font-display font-black text-brand-charcoal mb-6 border-b-4 border-brand-yellow inline-block">
                  THE SOLUTION
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {project.solution}
                </p>
              </section>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-charcoal/5 border border-gray-100">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-brand-charcoal mb-8">Role & Tools</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-off-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Tag className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Category</p>
                    <p className="font-bold text-sm text-brand-charcoal">{project.category}</p>
                  </div>
                </div>

                {project.tools && (
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-off-white rounded-xl flex items-center justify-center flex-shrink-0">
                      <Layers className="w-5 h-5 text-brand-yellow" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Tools Used</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.tools.map((tool, i) => (
                          <span key={i} className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal bg-brand-yellow/20 px-2 py-1 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-off-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Date</p>
                    <p className="font-bold text-sm text-brand-charcoal">September 2025</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-10 py-4 bg-brand-charcoal text-white font-black uppercase tracking-widest rounded-xl hover:bg-brand-yellow hover:text-brand-charcoal transition-all flex items-center justify-center gap-2 group">
                Live Preview <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-brand-yellow p-8 rounded-3xl shadow-xl shadow-brand-yellow/20">
              <h3 className="text-brand-charcoal font-black text-xl mb-4">WANT A PROJECT LIKE THIS?</h3>
              <p className="text-brand-charcoal/80 text-sm mb-6 leading-relaxed font-medium">
                I can help you achieve similar results with bold design and strategic thinking.
              </p>
              <Link 
                to="/#contact"
                className="inline-block px-6 py-3 bg-brand-charcoal text-white text-xs font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Navigation */}
      <div className="bg-brand-charcoal py-24 px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-brand-yellow text-xs font-black uppercase tracking-[0.4em] mb-4">Thanks for watching</h2>
          <Link to="/" className="text-4xl lg:text-6xl font-display font-black text-white hover:text-brand-yellow transition-colors leading-tight">
            BACK TO ALL PROJECTS
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
