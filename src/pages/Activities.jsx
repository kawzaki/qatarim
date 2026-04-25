import React from 'react';
import { motion } from 'framer-motion';
import PortalCard from '../components/PortalCard';

const events = [
  { 
    id: 1, 
    title: 'معهد الإدارة العامة يحتفي بالدكتور منصور بمناسبة تقاعده', 
    category: 'فعاليات', 
    date: '02 يناير 2022', 
    description: 'احتفى منسوبو معهد الإدارة العامة بالمنطقة الشرقية بالدكتور منصور القطري تقديراً لمسيرته الحافلة بالبذل والعطاء في مجال التدريب الإداري.',
    link: '#' 
  },
  { 
    id: 2, 
    title: 'إصدار "الجواب الشافي لتمكين البائس الحافي" في شبكة القطيف', 
    category: 'إصدارات', 
    date: '25 سبتمبر 2016', 
    description: 'رصد الدكتور منصور القطري في كتابه الجديد جملة من النصائح والتوجهات لتمكين الكفاءات وتجاوز التحديات المهنية بطرق مبتكرة.',
    link: '#' 
  },
  { 
    id: 3, 
    title: 'مشاركة الدكتور في ندوة "القيادة والتحول الرقمي"', 
    category: 'ندوات', 
    date: '12 مارس 2025', 
    description: 'استعرض الدكتور منصور أهمية الموازنة بين التقنية والمشاعر الإنسانية في فن القيادة المعاصر خلال الندوة السنوية لغرفة الشرقية.',
    link: '#' 
  }
];

const Activities = () => {
  return (
    <div className="pt-32 pb-24 bg-surface-low min-h-screen">
      <header className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
            <span className="label-md text-tertiary mb-4 block">النشاط العام</span>
            <h1 className="text-6xl font-title font-black text-primary mb-6">النشاطات والفعاليات</h1>
            <p className="text-xl text-secondary max-w-2xl font-body leading-relaxed">
                متابعة لأحدث الملتقيات، الندوات، وحفلات التوقيع التي يشارك فيها الدكتور منصور القطري لتبادل المعرفة ونشر الوعي الإداري.
            </p>
        </motion.div>
      </header>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Using 'article' type for events as it fits the report style */}
              <PortalCard type="article" {...event} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Legacy Album Section placeholder */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
          <div className="flex justify-between items-end mb-16 border-b border-primary/10 pb-8">
              <h2 className="text-4xl font-title font-black text-primary">ألبوم الصور</h2>
              <span className="text-secondary font-body">ذكريات من فعاليات متنوعة</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="aspect-square bg-white rounded-xl shadow-sm border border-primary/5 overflow-hidden flex items-center justify-center relative group"
                  >
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-title font-bold">
                            عرض الصورة
                        </div>
                        <span className="text-primary/10 font-bold text-4xl">📸</span>
                  </motion.div>
              ))}
          </div>
      </section>
    </div>
  );
};

export default Activities;
