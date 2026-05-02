import React from 'react';
import { motion } from 'framer-motion';

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
    return (
        <section className="py-32 bg-white relative overflow-hidden ornament-bg">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 text-right">
                    <div className="max-w-2xl ml-auto">
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
                </div>

                {/* Flexible Grid / Mobile Scroller */}
                <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-6 pb-8 scrollbar-hide snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                duration: 0.8, 
                                delay: index * 0.05,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            whileHover={{ y: -12 }}
                            className="flex-none w-[200px] md:w-full p-8 md:p-10 bg-white border border-surface-high hover:border-tertiary/30 group relative flex flex-col items-center text-center h-full snap-center will-change-transform transition-colors duration-300"
                            style={{ backfaceVisibility: 'hidden' }}
                        >
                            <span className="text-4xl md:text-5xl mb-6 md:mb-8 block transition-transform duration-500 group-hover:translate-y-[-4px]">
                                {item.icon}
                            </span>
                            <h3 className="text-lg md:text-xl font-title font-black text-primary group-hover:text-tertiary transition-colors leading-snug">
                                {item.title}
                            </h3>
                            
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-high group-hover:bg-tertiary transition-all" />
                        </motion.div>
                    ))}
                </div>

                <p className="mt-12 text-center text-primary/30 font-body text-sm md:hidden">
                    اسحب لليسار لرؤية المزيد من المجالات ←
                </p>
            </div>
        </section>
    );
};

export default ExpertiseCarousel;
