import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { 
    name: 'Oliver Hudson', 
    role: 'CEO at TechStream', 
    text: 'Riead is a creative powerhouse. He took our messy brand concept and turned it into a sleek, professional identity that our customers love.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  { 
    name: 'Janny Rose', 
    role: 'Marketing Director', 
    text: 'The photography work Riead provided was beyond my expectations. His eye for light and composition is truly unique in the industry.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  },
  { 
    name: 'Luna Smith', 
    role: 'Founder of GreenEco', 
    text: 'Working with Riead was a breeze. He perfectly understood our values and translated them into beautiful web designs that improved our conversion.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  { 
    name: 'Marko Vane', 
    role: 'Creative Lead', 
    text: 'Bold, professional, and consistent. Riead is my go-to designer for any project that needs a high-impact visual touch.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-12 lg:px-24 bg-brand-off-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-display font-black text-brand-charcoal mb-16 relative">
          CLIENT REVIEWS
          <div className="absolute -left-12 top-1/2 w-8 h-1 bg-brand-yellow" />
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-xl shadow-brand-charcoal/5 relative group"
            >
              <div className="absolute top-6 right-6 text-brand-yellow opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, star) => (
                  <Star key={star} className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>

              <p className="text-gray-600 mb-8 italic leading-relaxed">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-yellow">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-display font-black text-brand-charcoal uppercase leading-tight">{item.name}</h4>
                  <p className="text-xs text-brand-yellow font-bold tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
