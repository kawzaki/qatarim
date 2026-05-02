import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Share2, Expand } from 'lucide-react';
import { wamadatPages } from '../data/wamadat';
import { Link } from 'react-router-dom';

const DailyFlash = () => {
  const [randomPage, setRandomPage] = useState(null);

  useEffect(() => {
    // Pick a page based on the current day of the year to ensure it's "Daily"
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    
    // Cycle through pages 4-109 (avoiding cover/toc for daily flash)
    const pageIdx = (dayOfYear % (wamadatPages.length - 4)) + 4;
    setRandomPage(wamadatPages[pageIdx]);
  }, []);

  if (!randomPage) return null;

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Ornament */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Content Side */}
          <div className="flex-1 text-right order-2 lg:order-1" dir="rtl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-tertiary/10 text-tertiary rounded-full mb-8">
                <Sparkles size={16} />
                <span className="text-[10px] font-title font-bold uppercase tracking-[0.2em]">ومضة اليوم الفكرية</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-title font-black text-primary mb-8 leading-tight">
                استبصارٌ يتجدد <br /> كل يوم
              </h2>
              
              <p className="text-xl text-primary/60 font-body leading-relaxed mb-12 max-w-2xl">
                نستعرض يومياً فكرة من كتاب "ومضات فكرية"، حيث يلتقي عمق الفلسفة الإدارية بجمال التصميم البصري.
              </p>

              <div className="flex flex-wrap items-center justify-end gap-6">
                <button className="p-4 border border-surface-high hover:border-tertiary hover:text-tertiary transition-all rounded-full group">
                   <Share2 size={24} />
                </button>
                <Link 
                  to="/wamadat"
                  className="px-10 py-5 bg-primary text-white font-title font-bold text-lg flex items-center gap-4 hover:bg-tertiary transition-all shadow-2xl group"
                >
                  <span>تصفح الكتاب كاملاً</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Visual Side */}
          <div className="flex-1 order-1 lg:order-2 perspective-1000">
            <motion.div
              initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative group cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative aspect-[3/4] max-w-[450px] mx-auto rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] group-hover:shadow-[0_80px_120px_-20px_rgba(0,0,0,0.4)] transition-all duration-700">
                <img 
                  src={randomPage.image} 
                  alt={randomPage.title} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-12">
                   <Link to="/wamadat" className="flex items-center gap-3 text-white font-title font-bold text-sm tracking-widest uppercase bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20">
                      تكبير الومضة <Expand size={16} />
                   </Link>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-4 border-b-4 border-tertiary/20 rounded-br-[60px] pointer-events-none" />
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-tertiary/20 rounded-tl-[60px] pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DailyFlash;
