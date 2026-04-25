import React from 'react';
import { motion } from 'framer-motion';

const books = [
  { id: 1, title: '90 كتاباً في كتاب', image: '/assets/books_cover_90.jpg' },
  { id: 2, title: 'رصيد الحكمة', image: '/assets/dr_mansour_books_collection.jpg' },
  { id: 3, title: 'الجواب الشافي', image: '/assets/logo.png' },
  { id: 4, title: 'بناء القادة', image: '/assets/dr_mansour_portrait.png' },
  { id: 5, title: 'الإدارة بالقيم', image: '/assets/dr_mansour_real.jpg' },
];

const LibraryScroller = () => {
  return (
    <div className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-20 flex justify-between items-center">
          <div>
            <span className="text-tertiary font-title font-bold text-sm tracking-widest uppercase mb-2 block">المؤلفات والإصدارات</span>
            <h2 className="text-4xl font-title font-black text-primary">المكتبة الإدارية</h2>
          </div>
          <span className="text-primary/20 font-body text-sm">اسحب للاستكشاف ←</span>
      </div>

      <motion.div 
        drag="x"
        dragConstraints={{ left: -1200, right: 0 }}
        className="flex gap-12 px-6 cursor-grab active:cursor-grabbing pb-12"
      >
        {books.map((book) => (
          <motion.a
            key={book.id}
            href="#book-details"
            whileHover={{ 
                y: -10,
                rotateY: -15,
                z: 50,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="flex-none w-[300px] aspect-[3/4.5] bg-white border border-surface-high shadow-sm relative p-8 flex flex-col justify-end overflow-hidden group"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            {/* Book Cover Image */}
            {book.image && (
                <img 
                    src={book.image} 
                    alt={book.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-80" />
            
            <motion.div 
                style={{ translateZ: 30 }}
                className="relative z-10"
            >
                <h3 className="text-2xl font-title font-black text-white leading-tight">
                    {book.title}
                </h3>
                <div className="w-8 h-0.5 bg-tertiary mt-4 transition-all group-hover:w-16" />
            </motion.div>

            {/* Depth effect for the "spine" */}
            <div className="absolute top-0 left-0 h-full w-1.5 bg-black/10" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default LibraryScroller;
