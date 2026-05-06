import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-display font-black text-brand-charcoal mb-16 relative">
          GET IN TOUCH
          <div className="absolute -left-12 top-1/2 w-8 h-1 bg-brand-yellow" />
        </h2>

        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <p className="text-xl font-display font-black text-brand-charcoal mb-8 tracking-tight uppercase">
              Feel <span className="text-brand-yellow underline decoration-4 underline-offset-8">free</span> to contact me!
            </p>
            
            <p className="text-gray-500 mb-12 leading-relaxed max-w-md">
              I'm currently available for freelance projects and full-time creative roles. If you have a question or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-charcoal rounded-xl flex items-center justify-center shadow-lg">
                  <Mail className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Email Me</p>
                  <p className="font-display font-black text-brand-charcoal uppercase">rieadasif@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-charcoal rounded-xl flex items-center justify-center shadow-lg">
                  <Phone className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Call Me</p>
                  <p className="font-display font-black text-brand-charcoal">+8801996463892</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-charcoal rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-gray-400">Visit Me</p>
                  <p className="font-display font-black text-brand-charcoal uppercase">Bangladesh, Barisal</p>
                </div>
              </div>
            </div>
          </div>

          <motion.form 
            className="bg-brand-off-white p-10 rounded-3xl shadow-2xl shadow-brand-charcoal/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[10px] uppercase font-black tracking-widest text-gray-500 mb-2">Name</label>
                <input type="text" className="w-full bg-white border-2 border-transparent focus:border-brand-yellow outline-none px-6 py-4 rounded-xl transition-all font-medium" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[10px] uppercase font-black tracking-widest text-gray-500 mb-2">Email</label>
                <input type="email" className="w-full bg-white border-2 border-transparent focus:border-brand-yellow outline-none px-6 py-4 rounded-xl transition-all font-medium" />
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-[10px] uppercase font-black tracking-widest text-gray-500 mb-2">Message</label>
              <textarea rows={5} className="w-full bg-white border-2 border-transparent focus:border-brand-yellow outline-none px-6 py-4 rounded-xl transition-all font-medium resize-none"></textarea>
            </div>
            <button 
              onClick={() => window.location.href = 'mailto:rieadasif@gmail.com'}
              type="button"
              className="w-full py-5 bg-brand-charcoal text-white font-black uppercase tracking-widest rounded-xl hover:bg-brand-yellow hover:text-brand-charcoal transition-all flex items-center justify-center gap-3 group"
            >
              Send Message <Send className="w-5 h-5 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </button>
          </motion.form>
        </div>

        <div className="mt-24 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs uppercase font-black tracking-[0.3em] text-gray-400">
            THANKS FOR VISITING!
          </p>
        </div>
      </div>
    </section>
  );
};
