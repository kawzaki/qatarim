import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const institutes = [
  { name: 'غرفة الشرقية', logo: '/assets/institutes/asharqia.png' },
  { name: 'معهد الإدارة العامة', logo: '/assets/institutes/ipa.png' },
  { name: 'جامعة الملك فيصل', logo: '/assets/institutes/kfu.png' },
  { name: 'هيئة حقوق الإنسان', logo: '/assets/institutes/hrc.png' },
  { name: 'ميناء الملك عبدالعزيز', logo: '/assets/institutes/mawani.png' },
  { name: 'جريدة الوسط البحرينية', logo: '/assets/institutes/alwasat.png' },
  { name: 'الجمعية السعودية للإدارة', logo: '/assets/institutes/sam.png' },
  { name: 'جامعة الملك فهد البحرية', logo: '/assets/institutes/naval_academy.png' },
  { name: 'جمعية القطيف الخيرية', logo: '/assets/institutes/qatif_charity.png' },
  { name: 'الجامعة الأهلية بالبحرين', logo: '/assets/institutes/ahlia.png' },
];

const ImpactStats = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(institutes.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <section className="py-32 bg-white relative overflow-hidden border-y border-surface-high">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    <div className="max-w-2xl">
                        <span className="text-tertiary font-title font-bold tracking-[0.4em] uppercase text-sm mb-4 block">شركاء النجاح</span>
                        <h2 className="text-5xl md:text-6xl font-title font-black text-primary leading-tight">نطاق الأثر <span className="text-tertiary">المؤسسي</span></h2>
                    </div>
                    
                    {/* Carousel Controls */}
                    <div className="flex gap-4">
                        <button 
                            onClick={prevSlide}
                            className="w-16 h-16 rounded-full border border-surface-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="w-16 h-16 rounded-full border border-surface-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Sliding Content */}
                <div className="relative overflow-hidden">
                    <div 
                        className="flex transition-transform duration-700 ease-[0.16,1,0.3,1]"
                        style={{ transform: `translateX(${currentIndex * 100}%)` }}
                    >
                        {Array.from({ length: totalPages }).map((_, pageIndex) => (
                            <div key={pageIndex} className="flex-none w-full grid grid-cols-2 md:grid-cols-5 gap-12 items-center">
                                {institutes.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((inst, i) => (
                                    <motion.div
                                        key={inst.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex flex-col items-center group h-full"
                                    >
                                        <div className="w-full aspect-square bg-white border border-surface-high p-8 flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:border-tertiary/30 transition-all duration-500 rounded-[20px] shadow-sm mb-6 overflow-hidden">
                                            <img 
                                                src={inst.logo} 
                                                alt={inst.name} 
                                                className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <h3 className="text-[10px] md:text-xs font-title font-bold text-primary/40 group-hover:text-tertiary transition-colors text-center uppercase tracking-wider">
                                            {inst.name}
                                        </h3>
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Page Indicators */}
                <div className="flex justify-center gap-2 mt-16">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button 
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1 transition-all duration-500 rounded-full ${currentIndex === i ? 'w-10 bg-tertiary' : 'w-4 bg-surface-high'}`}
                        />
                    ))}
                </div>

                {/* Royal Stats Accent */}
                <div className="mt-32 pt-20 border-t border-surface-high grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                    <div>
                        <div className="text-6xl font-title font-black text-primary mb-4">35+</div>
                        <div className="text-tertiary font-title font-bold uppercase tracking-widest text-sm">عقود من الخبرة</div>
                    </div>
                    <div>
                        <div className="text-6xl font-title font-black text-primary mb-4">10K+</div>
                        <div className="text-tertiary font-title font-bold uppercase tracking-widest text-sm">متدرب ومتدربة</div>
                    </div>
                    <div>
                        <div className="text-6xl font-title font-black text-primary mb-4">300+</div>
                        <div className="text-tertiary font-title font-bold uppercase tracking-widest text-sm">ندوة ومحاضرة</div>
                    </div>
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 p-40 opacity-[0.02] pointer-events-none">
                <div className="w-96 h-96 border-2 border-primary rounded-full" />
            </div>
        </section>
    );
};

export default ImpactStats;
