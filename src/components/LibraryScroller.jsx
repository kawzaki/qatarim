import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const books = [
  { id: 1, title: '90 كتاباً في كتاب', image: '/assets/books_cover_90.jpg' },
  { id: 2, title: 'رصيد الحكمة', image: '/assets/dr_mansour_books_collection.jpg' },
  { id: 3, title: 'الجواب الشافي', image: '/assets/logo.png' },
  { id: 4, title: 'بناء القادة', image: '/assets/dr_mansour_portrait.png' },
  { id: 5, title: 'الإدارة بالقيم', image: '/assets/dr_mansour_real.jpg' },
];

const LibraryScroller = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row justify-between items-end gap-8 text-right">
          <div className="ml-auto">
            <span className="text-tertiary font-title font-bold text-sm tracking-widest uppercase mb-2 block">المؤلفات والإصدارات</span>
            <h2 className="text-4xl md:text-5xl font-title font-black text-primary leading-tight">المكتبة الإدارية</h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-surface-high flex items-center justify-center text-primary hover:bg-tertiary hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-surface-high flex items-center justify-center text-primary hover:bg-tertiary hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-12 px-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-12"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {books.map((book) => (
          <motion.div
            key={book.id}
            className="flex-none w-[280px] md:w-[350px] aspect-[3/4.5] bg-white border border-surface-high shadow-sm relative p-8 flex flex-col justify-end overflow-hidden group snap-center"
          >
            {/* Book Cover Image */}
            {book.image && (
                <img 
                    src={book.image} 
                    alt={book.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-90" />
            
            <div className="relative z-10 text-right">
                <h3 className="text-2xl font-title font-black text-white leading-tight">
                    {book.title}
                </h3>
                <div className="w-8 h-0.5 bg-tertiary mt-4 transition-all group-hover:w-16 mr-auto ml-0" />
                <Link to="/publications" className="mt-6 inline-block text-white/60 hover:text-tertiary font-title font-bold text-sm transition-colors">
                  تفاصيل الكتاب
                </Link>
            </div>

            {/* Depth effect for the "spine" */}
            <div className="absolute top-0 right-0 h-full w-1.5 bg-black/10" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LibraryScroller;
