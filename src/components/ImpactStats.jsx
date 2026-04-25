import React from 'react';
import { motion } from 'framer-motion';

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
    return (
        <section className="py-32 bg-white relative overflow-hidden border-y border-surface-high">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 text-right">
                    <div className="max-w-2xl ml-auto">
                        <span className="text-tertiary font-title font-bold tracking-[0.4em] uppercase text-sm mb-4 block">شركاء النجاح</span>
                        <h2 className="text-5xl md:text-6xl font-title font-black text-primary leading-tight">نطاق الأثر <span className="text-tertiary">المؤسسي</span></h2>
                    </div>
                </div>

                {/* Partner Logo Scroller */}
                <div className="flex overflow-x-auto gap-8 pb-12 scrollbar-hide snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {institutes.map((inst, i) => (
                        <motion.div
                            key={inst.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex-none w-[180px] md:w-[220px] group snap-center"
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

                <p className="mt-8 text-center text-primary/30 font-body text-sm md:hidden">
                    اسحب لليسار لرؤية جميع الشركاء ←
                </p>

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
