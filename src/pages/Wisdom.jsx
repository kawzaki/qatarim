import React from 'react';
import { motion } from 'framer-motion';

const capsules = [
  { id: 1, text: 'الإدارة ليست مجرد توجيه، بل هي إلهام يسري في روح الفريق.', category: 'فكر' },
  { id: 2, text: 'القائد الحقيقي هو من يصنع قادة، لا من يجمع أتباعاً.', category: 'قيادة' },
  { id: 3, text: 'الوقت هو المادة الخام التي يصنع منها النجاح، فاحسن تشكيلها.', category: 'تطوير' },
  { id: 4, text: 'المؤسسة العظيمة تبدأ من إنسان عظيم، والتعليم هو المحرك الأول.', category: 'بناء' },
];

const Wisdom = () => {
  return (
    <div className="pt-32 pb-24">
      <header className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="display-lg text-primary mb-6"
        >
          رصيد الحكمة
        </motion.h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto font-body">كبسولات معرفية وتأملات في فنون الإدارة والحياة.</p>
      </header>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {capsules.map((capsule, index) => (
          <motion.div
            key={capsule.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="p-12 rounded-3xl bg-surface-high/50 border border-primary/5 hover:bg-white hover:shadow-2xl transition-all"
          >
            <span className="label-md text-tertiary mb-6 block text-sm">{capsule.category}</span>
            <p className="headline-lg !text-2xl leading-relaxed italic text-primary">"{capsule.text}"</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Wisdom;
