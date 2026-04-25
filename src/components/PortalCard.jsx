import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const PortalCard = ({ title, category, description, link = "#" }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white p-10 border border-surface-high hover:border-tertiary/30 transition-all h-full flex flex-col relative"
    >
      <div className="flex justify-between items-start mb-8">
        <span className="text-tertiary text-xs font-title font-bold uppercase tracking-[0.2em]">
          {category}
        </span>
        <div className="text-primary/10 group-hover:text-tertiary transition-colors">
          <BookOpen className="w-5 h-5" />
        </div>
      </div>

      <h3 className="text-2xl font-title font-black text-primary mb-6 group-hover:text-tertiary transition-colors line-clamp-2 min-h-[4rem]">
        {title}
      </h3>

      <p className="text-primary/60 font-body mb-10 line-clamp-3 text-base leading-relaxed grow">
        {description}
      </p>

      <a
        href={link}
        className="inline-flex items-center gap-3 text-primary font-bold font-title text-lg transition-colors group/link"
      >
        <span>قراءة المزيد</span>
        <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-[-5px]" />
      </a>

      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-12 bg-tertiary transition-all duration-500" />
    </motion.div>
  );
};

export default PortalCard;
