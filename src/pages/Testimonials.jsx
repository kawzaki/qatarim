import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, name: 'أحمد الشمري', role: 'مهندس برمجيات', text: 'دورة صناعة السيرة الذاتية كانت نقطة تحول في حياتي المهنية. الأسلوب العملي للدكتور منصور يجعلك ترى قدراتك بمنظور جديد تماماً.' },
  { id: 2, name: 'سارة العتيبي', role: 'مديرة عمليات', text: 'عملنا مع الدكتور في هيكلة قسم الموارد البشرية، وكانت النتائج مبهرة من حيث الكفاءة والروح المعنوية للفريق.' },
  { id: 3, name: 'خالد القرني', role: 'باحث إداري', text: 'كتاب 90 كتاباً في كتاب هو كنز حقيقي لكل قائد طموح. اختصارات ذكية وعميقة توفر الوقت والجهد.' },
];

const Testimonials = () => {
  return (
    <div className="pt-32 pb-24">
      <header className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="display-lg text-primary mb-6"
        >
          شركاء النجاح وآراء المستفيدين
        </motion.h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto font-body">كلمات نعتز بها من أفراد ومؤسسات شاركناهم رحلة التطوير.</p>
      </header>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-10 rounded-xl shadow-sm border border-primary/5 hover:shadow-xl transition-all"
          >
            <div className="text-tertiary mb-6">★★★★★</div>
            <p className="text-lg text-secondary font-body italic mb-10">"{t.text}"</p>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-surface-high rounded-full overflow-hidden" />
               <div>
                  <h4 className="title-lg text-primary !text-lg">{t.name}</h4>
                  <span className="text-secondary/60 text-sm font-body">{t.role}</span>
               </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="bg-surface-low py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="label-md text-secondary/40 text-center mb-16">مؤسسات نفتخر بالتعاون معها</h2>
            <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-40">
                {['شركة أرامكو', 'وزارة التعليم', 'مكتبة جرير', 'جامعة الملك سعود'].map(partner => (
                    <span key={partner} className="text-2xl font-black font-title text-primary">{partner}</span>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
