import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, ChevronLeft } from 'lucide-react';

const recentArticles = [
  { 
    id: 1, 
    title: 'التدريب على تحمل المسؤولية', 
    image: '/assets/articles/responsibility.png',
    date: '9 نوفمبر 2014',
    category: 'إدارة الذات',
    excerpt: 'للأسد في اللغة العربية عديد من الأسماء والصفات، التي نجدها في شعرهم أولاً ثم في المصادر التاريخية...'
  },
  { 
    id: 2, 
    title: 'التفكير الناقد', 
    image: '/assets/articles/critical_thinking.png',
    date: '9 نوفمبر 2014',
    category: 'الفكر الإداري',
    excerpt: 'يسهم التفكير الناقد في تحرير الأفراد من التبعية للآخرين والاستقلالية في الرأي، ويمكنهم من استخدام...'
  },
  { 
    id: 3, 
    title: 'تجنب العداوات..«فن التغافل» مثالاً', 
    image: '/assets/articles/ignoring.png',
    date: '9 نوفمبر 2014',
    category: 'العلاقات الإنسانية',
    excerpt: 'روي أن الإمام علي عليه السلام عنه كان جالساً في أصحابه فسمع رجلاً يشتم قنبر – خادمه – وقد همّ قنبر...'
  },
];

const RecentArticles = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden ornament-bg">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 text-right">
                    <div className="max-w-2xl ml-auto">
                        <span className="text-tertiary font-title font-bold tracking-[0.4em] uppercase text-sm mb-4 block">مدونة الفكر</span>
                        <h2 className="text-5xl md:text-7xl font-title font-black text-primary leading-tight">آخر <span className="text-tertiary">المقالات</span></h2>
                    </div>
                    
                    <Link to="/articles" className="hidden md:inline-flex items-center gap-4 text-primary font-title font-bold hover:text-tertiary transition-colors group">
                        <span>مشاهدة الكل</span>
                        <div className="w-12 h-12 rounded-full border border-surface-high flex items-center justify-center group-hover:bg-tertiary group-hover:text-white transition-all">
                            <ArrowLeft className="w-5 h-5" />
                        </div>
                    </Link>
                </div>

                {/* Static Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right" dir="rtl">
                    {recentArticles.map((article, index) => (
                        <motion.div 
                            key={article.id} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-surface-high hover:border-tertiary/30 transition-all flex flex-col h-full group rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl"
                        >
                            {/* Image Section */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img 
                                    src={article.image} 
                                    alt={article.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 right-6 px-4 py-1 bg-white/90 backdrop-blur-md text-tertiary font-title font-bold text-[10px] uppercase tracking-widest rounded-full">
                                    {article.category}
                                </div>
                            </div>
                            
                            {/* Content Section */}
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center justify-end gap-3 text-primary/30 font-body text-[10px] mb-4">
                                    {article.date} <Calendar className="w-3 h-3" />
                                </div>
                                
                                <h3 className="text-xl font-title font-black text-primary group-hover:text-tertiary transition-colors mb-4 leading-tight min-h-[3rem]">
                                    {article.title}
                                </h3>
                                
                                <p className="text-primary/60 font-body text-sm leading-relaxed mb-8 line-clamp-3">
                                    {article.excerpt}
                                </p>
                                
                                <div className="mt-auto">
                                    <Link 
                                        to="/articles" 
                                        className="inline-flex items-center gap-2 text-primary font-title font-bold text-sm group-hover:text-tertiary transition-colors"
                                    >
                                        <span>اقرأ المزيد</span>
                                        <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View All Link */}
                <div className="mt-16 text-center md:hidden">
                    <Link to="/articles" className="inline-flex items-center gap-4 text-primary font-title font-bold hover:text-tertiary transition-colors group">
                        <span>مشاهدة جميع المقالات</span>
                        <div className="w-12 h-12 rounded-full border border-surface-high flex items-center justify-center group-hover:bg-tertiary group-hover:text-white transition-all">
                            <ArrowLeft className="w-5 h-5" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RecentArticles;
