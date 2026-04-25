import React from 'react';
import { motion } from 'framer-motion';

const Training = () => {
  return (
    <div className="pt-32 pb-24 bg-surface-low min-h-screen">
      <header className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
            <span className="label-md text-tertiary mb-4 block tracking-widest">تطوير الموارد البشرية</span>
            <h1 className="text-6xl font-title font-black text-primary mb-6 leading-tight">التدريب والاستشارات الإدارية</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto font-body leading-relaxed">
                خبرة تمتد لأكثر من 35 عاماً في تصميم وتنفيذ البرامج التدريبية المتقدمة والاستشارات الإدارية لكبرى المؤسسات الحكومية والخاصة.
            </p>
        </motion.div>
      </header>

      {/* NEW: Scientific Model Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-primary/5 flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-title font-black text-primary mb-6">منهجية قياس أثر التدريب</h2>
                  <p className="text-lg text-secondary font-body leading-relaxed mb-8">
                      نعتمد في برامجنا على نموذج "كيرك باتريك" العالمي لقياس فاعلية التدريب عبر أربعة مستويات أساسية: ردود الفعل، التعلم، السلوك، والنتائج النهائية.
                  </p>
                  <ul className="space-y-4">
                      {['تحليل الاحتياجات التدريبية بدقة', 'تصميم حقائب تدريبية مخصصة', 'قياس الأثر الميداني بعد التدريب'].map(item => (
                          <li key={item} className="flex items-center gap-3 text-primary font-bold">
                              <span className="w-2 h-2 bg-tertiary rounded-full" />
                              {item}
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="lg:w-1/2 bg-surface-high p-8 flex items-center justify-center">
                  <img 
                    src="/assets/training_model.jpg" 
                    alt="نموذج قياس أثر التدريب" 
                    className="max-w-full h-auto rounded-xl shadow-lg border border-primary/5" 
                  />
              </div>
          </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
        >
            <div className="bg-white p-8 rounded-xl shadow-sm border border-primary/5">
                <h3 className="title-lg text-primary mb-4">التدريب الإداري</h3>
                <p className="text-secondary font-body">دورات متخصصة في القيادة الذكية، إدارة التغيير، وبناء فرق العمل عالية الأداء.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-primary/5">
                <h3 className="title-lg text-primary mb-4">الاستشارات المؤسسية</h3>
                <p className="text-secondary font-body">حلول مخصصة لهيكلة الموارد البشرية، تطوير اللوائح الإدارية، وقياس كفاءة الأداء.</p>
            </div>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-primary p-12 rounded-2xl text-white shadow-2xl"
        >
            <h3 className="headline-lg !text-white mb-8">طلب استشارة أو تدريب</h3>
            <form className="space-y-6">
                <div>
                    <label className="block mb-2 font-title font-bold">الاسم الكريم</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 p-4 rounded-md focus:outline-none focus:border-tertiary transition-colors" />
                </div>
                <div>
                    <label className="block mb-2 font-title font-bold">البريد الإلكتروني</label>
                    <input type="email" className="w-full bg-white/10 border border-white/20 p-4 rounded-md focus:outline-none focus:border-tertiary transition-colors" />
                </div>
                <div>
                    <label className="block mb-2 font-title font-bold">تفاصيل الطلب</label>
                    <textarea className="w-full bg-white/10 border border-white/20 p-4 rounded-md h-32 focus:outline-none focus:border-tertiary transition-colors"></textarea>
                </div>
                <button className="w-full py-4 bg-tertiary text-primary-container font-black font-title text-lg rounded-md hover:bg-tertiary-fixed transition-all">إرسال الطلب</button>
            </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Training;
