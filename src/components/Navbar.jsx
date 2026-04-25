import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';

const Navbar = ({ onSearchClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let timeoutId = null;

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'المؤلفات', href: '/publications' },
    { name: 'المقالات', href: '/articles' },
    { name: 'المكتبة المرئية', href: '/visual-library' },
    { name: 'التدريب', href: '/training' },
    { name: 'اراء المستفيدين', href: '/testimonials' },
  ];

  const submenuItems = [
    { name: 'رصيد الحكمة', href: '/wisdom' },
    { name: '90 كتاباً في كتاب', href: '/90-books' },
  ];

  return (
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

        {/* Left Side: Actions & Submenu */}
        <div className="flex items-center gap-8">
            <button 
                onClick={onSearchClick}
                className="p-2 text-primary/40 hover:text-primary transition-colors"
                title="Search (Cmd+K)"
            >
                <Search className="w-5 h-5" />
            </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
