import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ExternalLink, Calendar, MapPin } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: 'معهد الإدارة العامة بالمنطقة الشرقية يحتفي بالدكتور منصور القطري بمناسبة تقاعده',
    location: 'المنطقة الشرقية',
    date: '2 يناير 2022',
    image: '/assets/institutional_logos.png', // Using a thematic placeholder since actual event photo isn't in local assets yet
    type: 'احتفاء'
  },
  {
    id: 2,
    title: 'إصدار كتاب "الجواب الشافي لتمكين البائس الحافي"',
    location: 'شبكة القطيف الإخبارية',
    date: '25 سبتمبر 2016',
    image: '/assets/training_model.jpg',
    type: 'إصدارات'
  },
  {
    id: 3,
    title: 'الانطلاقة الثانية للموقع الرسمي للدكتور منصور القطري',
    location: 'منصة رقمية',
    date: '9 نوفمبر 2014',
    image: '/assets/dr_mansour_portrait.png',
    type: 'نشاط رقمي'
  }
];

const ActivityPulse = () => {
  return (
    <section className="bg-white py-32 overflow-hidden border-t border-surface-high">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="text-right ml-auto">
                <span className="text-tertiary font-title font-bold text-sm tracking-[0.3em] uppercase mb-4 block">التواجد والأثر</span>
                <h2 className="text-5xl md:text-7xl font-title font-black text-primary">أبرز الفعاليات</h2>
            </div>
            <div className="flex items-center gap-4 text-primary/40 font-title font-bold text-xs uppercase tracking-widest">
                <Camera className="w-5 h-5 text-tertiary" />
                الأخبار والنشاطات الميدانية
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {activities.map((activity, index) => (
                <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                >
                    <div className="relative aspect-[16/10] overflow-hidden mb-8 border border-surface-high grayscale group-hover:grayscale-0 transition-all duration-700 bg-surface-low">
                        <img 
                            src={activity.image} 
                            alt={activity.title} 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="absolute top-6 left-6">
                            <span className="px-4 py-2 bg-white text-primary font-title font-bold text-[10px] uppercase tracking-widest shadow-xl">
                                {activity.type}
                            </span>
                        </div>
                    </div>
                    
                    <div className="text-right">
                        <div className="flex items-center justify-end gap-3 text-primary/30 font-body text-xs mb-4">
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {activity.location}</span>
                            <div className="w-1 h-1 bg-tertiary rounded-full" />
                            <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {activity.date}</span>
                        </div>
                        <h3 className="text-2xl font-title font-black text-primary group-hover:text-tertiary transition-colors leading-tight mb-6">
                            {activity.title}
                        </h3>
                        <p className="text-primary/50 font-body text-sm line-clamp-2 leading-relaxed">
                            متابعة وتغطية لأحدث الفعاليات والمشاركات الرسمية للدكتور منصور في مختلف المحافل الإدارية والثقافية.
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* View All / Archive Link */}
        <div className="mt-24 pt-10 border-t border-surface-high flex justify-center">
            <button className="flex items-center gap-4 text-primary/40 font-title font-bold hover:text-primary transition-all group text-sm uppercase tracking-widest">
                <span>استكشف أرشيف الفعاليات كاملاً</span>
                <div className="w-12 h-[1px] bg-primary/10 group-hover:w-20 group-hover:bg-tertiary transition-all" />
                <ExternalLink className="w-4 h-4" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default ActivityPulse;
