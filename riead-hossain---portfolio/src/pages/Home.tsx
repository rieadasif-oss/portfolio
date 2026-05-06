import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Resume } from '../components/Resume';
import { Portfolio } from '../components/Portfolio';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'resume', 'portfolio', 'testimonials', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex bg-brand-off-white">
      <Sidebar activeSection={activeSection} />
      
      <main className="flex-1 lg:ml-64 overflow-x-hidden">
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      {/* Floating Action/Social Bar (Right Side) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-40 hidden xl:flex">
        <div className="w-[1px] h-24 bg-brand-charcoal/20 mx-auto" />
        <div className="flex flex-col gap-4 font-display font-black text-[10px] uppercase tracking-[0.4em] [writing-mode:vertical-lr] text-brand-charcoal/40 rotate-180">
          Social Connections
        </div>
        <div className="w-[1px] h-24 bg-brand-charcoal/20 mx-auto" />
      </div>
    </div>
  );
};
