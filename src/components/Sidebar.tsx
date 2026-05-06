import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  User, 
  FileText, 
  Grid, 
  MessageSquare, 
  Mail, 
  Linkedin, 
  Instagram, 
  Twitter,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About Me', icon: User },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'portfolio', label: 'Portfolio', icon: Grid },
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const isHome = location.pathname === '/';

  return (
    <>
      {/* Mobile Toggle */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleSidebar}
        className="lg:hidden fixed top-6 right-6 z-[60] w-12 h-12 bg-brand-charcoal text-white rounded-full flex items-center justify-center shadow-lg"
      >
        <div className="relative w-6 h-5 flex flex-col justify-between">
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white origin-left"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-white"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white origin-left"
          />
        </div>
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black/50 z-[55] lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <aside className={`fixed left-0 top-0 h-screen w-64 bg-brand-charcoal text-white flex flex-col items-center py-12 z-[56] transition-transform duration-500 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Profile Section */}
        <div className="mb-12 flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full border-4 border-brand-yellow overflow-hidden">
              <img 
                src="https://i.ibb.co/zVbCynJC/IMG-20250921-160600.jpg" 
                alt="Riead Hossain" 
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center border-2 border-brand-charcoal"
            >
              <span className="w-2 h-2 bg-brand-charcoal rounded-full" />
            </motion.div>
          </div>
          <h2 className="text-xl font-display font-black tracking-tight text-brand-yellow uppercase">RIEAD HOSSAIN</h2>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Creative Professional</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 w-full px-8">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link 
                  to={isHome ? `#${item.id}` : `/#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 transition-all duration-300 group ${
                    activeSection === item.id ? 'text-brand-yellow' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="ml-auto w-1 h-1 bg-brand-yellow rounded-full"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="mt-auto flex gap-4 pt-8 border-t border-white/10 w-full px-8 justify-center">
          {[Linkedin, Instagram, Twitter].map((Social, index) => (
            <motion.a
              key={index}
              whileHover={{ y: -3, color: '#F4B400' }}
              href="#"
              className="text-gray-400 transition-colors"
            >
              <Social className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </aside>
    </>
  );
};
