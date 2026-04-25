import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, ArrowLeft, ArrowRight, Video } from 'lucide-react';

const mediaVideos = [
  { 
    id: 1, 
    title: 'قلق الامتحانات', 
    thumbnail: '/assets/videos/exam_anxiety.png',
    date: '14 سبتمبر 2016',
    duration: '12:45',
    category: 'مقابلات تلفزيونية'
  },
  { 
    id: 2, 
    title: 'الإتصال الإنساني', 
    thumbnail: '/assets/videos/human_connection.png',
    date: '14 سبتمبر 2015',
    duration: '15:20',
    category: 'محاضرات'
  },
  { 
    id: 3, 
    title: 'الطموح', 
    thumbnail: '/assets/videos/ambition.png',
    date: '25 مارس 2012',
    duration: '10:15',
    category: 'رؤى إدارية'
  },
];

const MediaCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % mediaVideos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + mediaVideos.length) % mediaVideos.length);
    };

    return (
        <section className="py-32 bg-primary relative overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 text-right">
                    <div className="max-w-2xl ml-auto">
                        <span className="text-tertiary font-title font-bold tracking-[0.4em] uppercase text-sm mb-4 block">الثقافة المرئية</span>
                        <h2 className="text-5xl md:text-6xl font-title font-black text-white leading-tight">فضاء <span className="text-tertiary">المشاهدة</span></h2>
                    </div>
                    
                    <div className="flex gap-4">
                        <button 
                            onClick={prevSlide} 
                            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-tertiary hover:border-tertiary transition-all"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={nextSlide} 
                            className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-tertiary hover:border-tertiary transition-all"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Video Slider */}
                <div className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-[40px] border border-white/5">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0"
                        >
                            <img 
                                src={mediaVideos[currentIndex].thumbnail} 
                                alt={mediaVideos[currentIndex].title} 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                            
                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 text-right">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="flex items-center justify-end gap-4 mb-6">
                                        <span className="text-white/40 font-body text-xs flex items-center gap-2">
                                            {mediaVideos[currentIndex].duration} <Video className="w-3 h-3" />
                                        </span>
                                        <span className="px-4 py-1 bg-tertiary text-primary font-title font-bold text-[10px] uppercase tracking-widest rounded-full">
                                            {mediaVideos[currentIndex].category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-6xl font-title font-black text-white mb-6 md:mb-10 max-w-3xl ml-auto">
                                        {mediaVideos[currentIndex].title}
                                    </h3>
                                    
                                    <div className="flex flex-col md:flex-row items-center justify-end gap-6 md:gap-8">
                                        <div className="text-white/40 font-body text-sm uppercase tracking-widest order-2 md:order-1">
                                            {mediaVideos[currentIndex].date}
                                        </div>
                                        <div className="hidden md:block w-32 h-px bg-white/20 order-2" />
                                        <button className="flex items-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-white text-primary font-title font-bold text-base md:text-lg hover:bg-tertiary transition-all group/play order-1 md:order-3">
                                            <Play className="w-5 md:w-6 h-5 md:h-6 fill-primary group-hover/play:fill-primary transition-all" />
                                            شاهد الفيديو
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-20 flex justify-center">
                    <Link to="/visual-library" className="inline-flex items-center gap-4 text-white/60 font-title font-bold hover:text-tertiary transition-colors group">
                        <span>مشاهدة جميع الفيديوهات</span>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-tertiary group-hover:border-tertiary group-hover:text-primary transition-all">
                            <ArrowLeft className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
            
            {/* Abstract Decorative SVG */}
            <div className="absolute -bottom-20 -left-20 p-40 opacity-[0.05] pointer-events-none">
                <svg width="600" height="600" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
            </div>
        </section>
    );
};

export default MediaCarousel;
