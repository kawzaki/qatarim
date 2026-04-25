import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MessageCircle, Repeat2, Heart } from 'lucide-react';

const mockTweets = [
  {
    id: 1,
    text: "القيادة ليست منصباً، بل هي أثر تتركه في نفوس من حولك. ابدأ بنفسك أولاً، ثم ألهم الآخرين. #قيادة #تطوير_ذاتي",
    date: "منذ ساعتين",
  },
  {
    id: 2,
    text: "سعيد اليوم بالمشاركة في ندوة التحول الرقمي بالمنطقة الشرقية. نقاشات ثرية حول مستقبل العمل الحكومي وتحديات الموارد البشرية.",
    date: "أمس",
  },
  {
    id: 3,
    text: "أنهيت اليوم مراجعة النسخة النهائية لكتابي القادم (إدارة الأزمات في العصر الرقمي). ترقبوا الإصدار قريباً بإذن الله.",
    date: "قبل يومين",
  }
];

const SocialBridge = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {mockTweets.map((tweet, i) => (
        <motion.div
            key={tweet.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-10 border border-surface-high relative group hover:border-tertiary/30 transition-all shadow-sm"
        >
            <div className="flex justify-between items-start mb-8">
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
                <ExternalLink className="w-4 h-4 text-primary/10 group-hover:text-tertiary transition-colors" />
            </div>
            
            <p className="text-xl font-body text-primary leading-relaxed mb-10 min-h-[120px]">
                {tweet.text}
            </p>

            <div className="flex items-center justify-between pt-8 border-t border-surface-high text-primary/30">
                <div className="flex gap-6">
                    <span className="flex items-center gap-2 text-xs"><MessageCircle className="w-4 h-4"/> 12</span>
                    <span className="flex items-center gap-2 text-xs"><Repeat2 className="w-4 h-4"/> 45</span>
                    <span className="flex items-center gap-2 text-xs"><Heart className="w-4 h-4"/> 128</span>
                </div>
                <span className="text-xs font-bold font-title">{tweet.date}</span>
            </div>
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-tertiary transition-all duration-700 group-hover:w-full" />
        </motion.div>
      ))}
    </div>
  );
};

export default SocialBridge;
