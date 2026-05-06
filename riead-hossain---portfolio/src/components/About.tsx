import React from 'react';
import { motion } from 'motion/react';
import { Palette, Camera, Monitor, Award, Heart, CheckCircle } from 'lucide-react';

const stats = [
  { label: 'Month Experience', value: '6+', icon: Award },
  { label: 'Projects Completed', value: '15+', icon: CheckCircle },
  { label: 'Happy Clients', value: '10+', icon: Heart },
];

const services = [
  { title: 'Print Design', icon: Palette, desc: 'High-quality brochures, posters, and magazine layouts that grab attention.' },
  { title: 'Thumbnail Design', icon: Camera, desc: 'Professional high-click rate thumbnails with a unique creative eye for content creators.' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-12 lg:px-24 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-display font-black text-brand-charcoal mb-8 relative">
              ABOUT ME
              <div className="absolute -left-12 top-1/2 w-8 h-1 bg-brand-yellow" />
            </h2>
            <p className="text-2xl font-display font-bold text-brand-charcoal/80 mb-6 tracking-tight">
              I'm <span className="text-brand-yellow">RIEAD HOSSAIN ASIF</span>, Graphic Designer / Thumbnail Designer
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Based in the creative heart of the city, I'm a passionate creator dedicated to perfecting the art of visual communication. My work is a blend of minimalist aesthetics and bold, high-contrast storytelling. Whether it's a brand identity or a photographic series, I strive for perfection in every pixel and frame.
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-brand-charcoal p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl shadow-brand-charcoal/20"
              >
                <stat.icon className="w-8 h-8 text-brand-yellow mb-4" />
                <span className="text-3xl font-display font-black text-white">{stat.value}</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform shadow-lg">
                <service.icon className="w-8 h-8 text-brand-charcoal" />
              </div>
              <h3 className="text-xl font-display font-black mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
