import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Command, Book, Layout, MessageSquare } from 'lucide-react';

const CommandCenter = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen]);

  const quickLinks = [
    { name: 'بحث في المقالات', icon: <Book className="w-5 h-5"/> },
    { name: 'استعراض الدورات', icon: <Layout className="w-5 h-5"/> },
    { name: 'تواصل مباشر', icon: <MessageSquare className="w-5 h-5"/> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-primary/40 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-primary/5"
          >
            <div className="p-6 border-b border-primary/5 flex items-center gap-4">
              <Search className="text-secondary/40 w-6 h-6" />
              <input
                autoFocus
                placeholder="ابحث عن حكمة، مقال، أو دورة تدريبية..."
                className="flex-1 bg-transparent border-none outline-none text-xl font-body text-primary placeholder:text-secondary/30"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="flex items-center gap-2 px-2 py-1 bg-surface-high rounded-md text-secondary/40 text-xs font-bold font-title uppercase">
                <Command className="w-3 h-3" /> K
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-surface-low rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-secondary/40" />
              </button>
            </div>

            <div className="p-4 bg-surface-low/50">
                <div className="px-4 py-2 text-xs font-bold text-secondary/40 tracking-widest uppercase">روابط سريعة</div>
                <div className="grid grid-cols-1 gap-2 mt-2">
                    {quickLinks.map(link => (
                        <button 
                            key={link.name}
                            className="flex items-center gap-4 p-4 hover:bg-white rounded-xl transition-all text-right group"
                        >
                            <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                {link.icon}
                            </div>
                            <span className="text-lg font-title font-bold text-primary/80 group-hover:text-primary">{link.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-4 border-t border-primary/5 text-center text-xs text-secondary/30 font-body">
                اضغط ESC أو المدى الرمادي للإغلاق
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandCenter;
