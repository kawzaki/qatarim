import React from 'react';
import { motion } from 'framer-motion';
import UniversalFlipbook from '../components/UniversalFlipbook';
import { maqallaPages } from '../data/maqalla';
import { BookOpen, Award, Layers, Search } from 'lucide-react';

const MaqallaBook = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-right" dir="rtl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-tertiary font-title font-bold text-sm tracking-[0.4em] uppercase mb-6 block">المكتبة التفاعلية</span>
            <h1 className="text-6xl md:text-8xl font-title font-black text-primary mb-10 leading-[1.1]">
              ما قل ودل
            </h1>
            <p className="text-xl md:text-2xl text-primary/60 font-body leading-relaxed mb-12 max-w-2xl">
              مجموعة من الحكم والمقالات القصيرة التي تستخلص زبدة التجربة في عبارات مكثفة ومركزة، تفتح آفاق التفكير وتلهم العمل.
            </p>

            <div className="flex flex-wrap gap-12 justify-end mb-20">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-surface-low rounded-2xl flex items-center justify-center text-tertiary border border-surface-high">
                     <Layers size={24} />
                  </div>
                  <div className="text-right">
                     <div className="text-primary font-title font-black text-xl">145</div>
                     <div className="text-primary/40 text-[10px] font-title font-bold uppercase tracking-widest">صفحة ملهمة</div>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-surface-low rounded-2xl flex items-center justify-center text-tertiary border border-surface-high">
                     <Award size={24} />
                  </div>
                  <div className="text-right">
                     <div className="text-primary font-title font-black text-xl">2024</div>
                     <div className="text-primary/40 text-[10px] font-title font-bold uppercase tracking-widest">إصدار جديد</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Flipbook Section */}
      <section className="pb-32 bg-surface-low border-y border-surface-high">
         <UniversalFlipbook pages={maqallaPages} />
      </section>

      {/* Quote / Reflection Section */}
      <section className="py-40 bg-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
           >
              <h3 className="text-tertiary font-title font-bold text-sm tracking-[0.5em] uppercase mb-16">من زبدة القول</h3>
              <p className="text-4xl md:text-6xl font-title font-black text-white leading-tight mb-16">
                "خير الكلام ما قل ودل، ولم يطل فيمل."
              </p>
              <div className="w-24 h-[1px] bg-tertiary mx-auto mb-8" />
              <span className="text-white/40 font-body text-sm tracking-widest uppercase">د. منصور القطري</span>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MaqallaBook;
