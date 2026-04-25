import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, Menu, X } from 'lucide-react';

const Navbar = ({ onSearchClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'المؤلفات', href: '/publications' },
    { name: 'المقالات', href: '/articles' },
    { name: 'المكتبة المرئية', href: '/visual-library' },
    { name: 'التدريب والاستشارات', href: '/training' },
    { name: 'اراء المستفيدين', href: '/testimonials' },
  ];

  return (
    <>
    <nav className="fixed top-0 w-full z-50 bg-white/80 border-b border-surface-high backdrop-blur-xl py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Right Side: Logo & Main Navigation */}
        <div className="flex items-center gap-16">
            <Link to="/" className="h-10">
                <img src="/assets/logo.png" alt="د. منصور القطري" className="h-full w-auto brightness-0" />
            </Link>

            <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
                <Link
                    key={link.name}
                    to={link.href}
                    className="text-primary/60 hover:text-primary font-title font-bold transition-colors text-lg relative group"
                >
                    {link.name}
                    <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-tertiary transition-all group-hover:w-full" />
                </Link>
            ))}
            </div>
        </div>

        {/* Left Side: Actions */}
        <div className="flex items-center gap-4 md:gap-8">
            <button 
                onClick={onSearchClick}
                className="p-2 text-primary/40 hover:text-primary transition-colors"
                title="Search"
            >
                <Search className="w-5 h-5" />
            </button>

            {/* Mobile Toggle */}
            <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-primary hover:text-tertiary transition-colors"
            >
                <Menu className="w-6 h-6" />
            </button>
        </div>
      </div>
    </nav>

    {/* Full Screen Mobile Menu */}
    <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div 
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-0 z-[60] bg-primary text-white flex flex-col p-10 text-right"
                dir="rtl"
            >
                <div className="flex justify-between items-center mb-20">
                    <img src="/assets/logo.png" alt="Logo" className="h-8 brightness-0 invert" />
                    <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-white/40 hover:text-white">
                        <X className="w-8 h-8" />
                    </button>
                </div>

                <div className="flex flex-col gap-8">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link 
                                to={link.href} 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-4xl font-title font-black text-white hover:text-tertiary transition-colors"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-auto border-t border-white/10 pt-10 flex flex-col gap-6">
                    <p className="text-white/40 font-body text-sm tracking-widest uppercase">تواصل مباشر</p>
                    <p className="text-2xl font-title font-bold text-tertiary">info@qatarim.net</p>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
    </>
  );
};

export default Navbar;
