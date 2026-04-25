import React from 'react';
import { motion } from 'framer-motion';

const Books90 = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="label-md text-tertiary mb-4 block">مشروعنا الرائد</span>
          <h1 className="display-lg text-primary mb-8 leading-tight">90 كتاباً في كتاب واحد</h1>
          <p className="text-xl text-secondary mb-10 leading-relaxed font-body">
            خلاصة الخبرات العالمية في الإدارة والقيادة وتطوير الموارد البشرية. 
            جمعنا لك زبدة الفكر الإداري من 90 كتاباً مرجعياً في مؤلف واحد لتوفير الوقت وتحقيق أقصى استفادة.
          </p>
          <div className="space-y-6 mb-12">
            {[
              'تلخيص ذكي لأهم النظريات العالمية',
              'تطبيقات عملية واقعية للبيئة العربية',
              'منهجية مبسطة للتعلم السريع',
              'دليل مرجعي شامل للقادة والمديرين'
            ].map(feature => (
              <div key={feature} className="flex items-center gap-4 font-title font-bold text-lg text-primary/80">
                <span className="text-tertiary">✔</span> {feature}
              </div>
            ))}
          </div>
          <button className="px-10 py-5 bg-tertiary text-primary font-black font-title text-xl rounded-md shadow-2xl hover:bg-tertiary-fixed transition-all">
            احصل على نسختك الآن
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="aspect-[3/4] bg-primary-container rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 relative">
             <div className="absolute inset-0 bg-gradient-to-br from-tertiary/20 to-transparent" />
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="display-lg !text-white opacity-20 rotate-[-15deg]">المؤلفات</span>
             </div>
          </div>
          {/* Decorative gold badge */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-tertiary text-primary rounded-full flex flex-col items-center justify-center font-title font-black shadow-xl border-4 border-white">
            <span className="text-sm">الأكثر</span>
            <span className="text-xl">مبيعاً</span>
          </div>
        </motion.div>
      </section>

      {/* Detail Section */}
      <section className="bg-surface-low mt-32 py-24">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="headline-lg text-primary mb-8">لماذا هذا الكتاب؟</h2>
            <p className="text-lg text-secondary font-body leading-loose">
               في ظل تسارع وتيرة الأعمال، لا يملك القائد وقتاً لقراءة مئات الكتب. 
               جاء هذا المشروع ليكون الرفيق الأمثل لكل طموح يسعى لامتلاك أدوات النجاح الإداري دون إهدار للجهد.
            </p>
         </div>
      </section>
    </div>
  );
};

export default Books90;
