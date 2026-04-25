import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const wisdoms = [
  "الحكمة ضالة المؤمن، فأنّى وجدها فهو أحق بها.",
  "كُن عادلاً قبل أن تكون كريماً، فالعدل أساس الملك.",
  "الإدارة ليست مجرد توجيه، بل هي إلهام يسري في روح الفريق.",
  "الوقت هو المادة الخام التي يصنع منها النجاح، فاحسن تشكيلها.",
  "القائد الحقيقي هو من يصنع قادة، لا من يجمع أتباعاً.",
  "المؤسسة العظيمة تبدأ من إنسان عظيم، والتعليم هو المحرك الأول.",
  "لا تقاس الإنجازات بما حققته، بل بما كان يمكن أن تحققه بقدراتك."
];

const WisdomCompass = () => {
  const [index, setIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const shuffleWisdom = () => {
    setIsSpinning(true);
    setTimeout(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * wisdoms.length);
      } while (nextIndex === index);
      setIndex(nextIndex);
      setIsSpinning(false);
    }, 600);
  };

  return (
    <section className="py-24 bg-white relative ornament-bg overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white border border-surface-high p-16 md:p-24 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] relative overflow-hidden group"
        >
            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-bl-[100px] -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
            
            <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-4 mb-16">
                    <div className="h-[1px] w-12 bg-tertiary/30" />
                    <span className="text-tertiary font-title font-bold text-sm tracking-[0.5em] uppercase">بوصلة الحكمة</span>
                    <div className="h-[1px] w-12 bg-tertiary/30" />
                </div>

                <div className="min-h-[300px] flex items-center justify-center mb-16 relative">
                    {/* Elegant quotation marks as decorative elements */}
                    <span className="absolute top-0 right-0 text-[180px] font-serif text-tertiary/5 leading-none pointer-events-none select-none">“</span>
                    
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-5xl lg:text-6xl text-primary font-title font-black leading-tight text-balance"
                        >
                            {wisdoms[index]}
                        </motion.p>
                    </AnimatePresence>

                    <span className="absolute bottom-0 left-0 text-[180px] font-serif text-tertiary/5 leading-none pointer-events-none select-none rotate-180">“</span>
                </div>

                <div className="flex flex-col items-center gap-8">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={shuffleWisdom}
                        className="inline-flex items-center gap-4 px-12 py-5 border border-primary text-primary font-bold font-title text-xl transition-all hover:bg-primary hover:text-white group/btn"
                    >
                        <span>تأمل فكرة أخرى</span>
                        <RefreshCw className={`w-5 h-5 group-hover/btn:rotate-180 transition-transform duration-700 ${isSpinning ? 'animate-spin' : ''}`} />
                    </motion.button>
                    
                    <p className="text-primary/20 font-body italic text-sm tracking-widest uppercase">
                        مقتبس من سلسلة "رصيد الحكمة" - د. منصور القطري
                    </p>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WisdomCompass;
