import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const expertiseItems = [
    { title: 'تطوير القيادات', icon: '👑' },
    { title: 'السلوك التنظيمي', icon: '🤝' },
    { title: 'إدارة الأداء', icon: '📈' },
    { title: 'بناء القدرات', icon: '🏗️' },
    { title: 'التدريب والتطوير', icon: '🎓' },
    { title: 'الموارد البشرية', icon: '👥' },
    { title: 'القيادة الإدارية', icon: '🏛️' },
    { title: 'التفكير الاستراتيجي', icon: '🎯' },
    { title: 'إدارة الأزمات', icon: '🆘' },
    { title: 'قياس الأثر', icon: '📏' },
    { title: 'جودة الحياة الوظيفية', icon: '✨' },
    { title: 'الاستشارات الإدارية', icon: '💡' },
    { title: 'التنمية المهنية', icon: '🚀' },
    { title: 'التخطيط الاستراتيجي', icon: '🗺️' },
    { title: 'إدارة التغيير', icon: '🔄' }
];

const ExpertiseCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(expertiseItems.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <section className="py-32 bg-white relative overflow-hidden ornament-bg">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    <div className="max-w-2xl">
                        <motion.span 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-tertiary font-title font-bold tracking-[0.4em] uppercase text-sm mb-4 block"
                        >
                            مجالات الخبرة والتمكين
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-title font-black text-primary leading-tight"
                        >
                            فضاءات المعرفة <span className="text-tertiary">الاستراتيجية</span>
                        </motion.h2>
                    </div>
                    
                    {/* Carousel Controls */}
                    <div className="flex gap-4">
                        <button 
                            onClick={prevSlide}
                            className="w-16 h-16 rounded-full border border-surface-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="w-16 h-16 rounded-full border border-surface-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Sliding Content */}
                <div className="relative overflow-hidden">
                    <div className="flex transition-transform duration-700 ease-[0.16,1,0.3,1]" 
                         style={{ transform: `translateX(${currentIndex * 100}%)` }}>
                        {Array.from({ length: totalPages }).map((_, pageIndex) => (
                            <div key={pageIndex} className="flex-none w-full grid grid-cols-2 md:grid-cols-5 gap-6">
                                {expertiseItems.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item) => (
                                    <motion.div
                                        key={item.title}
                                        whileHover={{ y: -10 }}
                                        className="p-10 bg-white border border-surface-high hover:border-tertiary/30 transition-all group relative flex flex-col items-center text-center h-full"
                                    >
                                        <span className="text-5xl mb-8 block grayscale group-hover:grayscale-0 transition-all duration-500">
                                            {item.icon}
                                        </span>
                                        <h3 className="text-xl font-title font-black text-primary group-hover:text-tertiary transition-colors leading-snug">
                                            {item.title}
                                        </h3>
                                        
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-high group-hover:bg-tertiary transition-all" />
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Page Indicators */}
                <div className="flex justify-center gap-3 mt-16">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button 
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-2 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-12 bg-tertiary' : 'w-2 bg-surface-high hover:bg-primary/20'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseCarousel;
