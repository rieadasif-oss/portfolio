import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase } from 'lucide-react';

const education = [
  { year: '2024 – Present', title: 'Diploma in Engineering (Polytechnic)', school: 'Currently studying in 3rd Semester', desc: 'Focused on technical skills, problem-solving, and practical learning.' },
  { year: '2022 – 2024', title: 'Secondary School Certificate (SSC)', school: 'General Education', desc: 'Completed general education with a strong interest in creative and digital fields.' },
];

const experience = [
  { year: '2025 – Present', title: 'Part-Time Graphic Designer', school: 'Self-Employed / Freelance', desc: 'Creating social media designs, posters, banners, and basic branding while improving creativity and communication skills.' },
  { year: '2024 – 2025', title: 'Beginner Designer', school: 'Practice & Learning Phase', desc: 'Learned design fundamentals (color, typography, layout) and practiced tools like Photoshop, Illustrator, and Canva.' },
];

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 px-12 lg:px-24 bg-brand-off-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-display font-black text-brand-charcoal mb-16 relative">
          MY RESUME
          <div className="absolute -left-12 top-1/2 w-8 h-1 bg-brand-yellow" />
        </h2>

        <div className="grid lg:grid-cols-2 gap-24">
          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-brand-yellow" />
              </div>
              <h3 className="text-2xl font-display font-black">EDUCATION</h3>
            </div>
            
            <div className="space-y-12 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-[2px] before:bg-brand-charcoal/10">
              {education.map((item, i) => (
                <div key={i} className="relative pl-16">
                  <div className="absolute left-5 top-2 w-3 h-3 bg-brand-yellow rounded-full border-2 border-white shadow-md z-10" />
                  <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest bg-brand-charcoal px-3 py-1 rounded-full mb-3 inline-block">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-display font-black mb-1">{item.title}</h4>
                  <p className="text-brand-charcoal/60 font-bold mb-3">{item.school}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Briefcase className="w-6 h-6 text-brand-yellow" />
              </div>
              <h3 className="text-2xl font-display font-black">EXPERIENCE</h3>
            </div>
            
            <div className="space-y-12 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-[2px] before:bg-brand-charcoal/10">
              {experience.map((item, i) => (
                <div key={i} className="relative pl-16">
                  <div className="absolute left-5 top-2 w-3 h-3 bg-brand-yellow rounded-full border-2 border-white shadow-md z-10" />
                  <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest bg-brand-charcoal px-3 py-1 rounded-full mb-3 inline-block">
                    {item.year}
                  </span>
                  <h4 className="text-xl font-display font-black mb-1">{item.title}</h4>
                  <p className="text-brand-charcoal/60 font-bold mb-3">{item.school}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
