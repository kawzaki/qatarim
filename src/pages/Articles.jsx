import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const articles = [
  { 
    id: 1, 
    title: 'التدريب على تحمل المسؤولية', 
    category: 'رؤى إدارية', 
    image: '/assets/articles/responsibility.png',
    date: '9 نوفمبر 2014',
    author: 'د. منصور القطري',
    description: 'للأسد في اللغة العربية عديد من الأسماء والصفات، التي نجدها في شعرهم أولاً ثم في المصادر التاريخية، وهو يمثل رمزاً للقوة والتحمل والقيادة...' 
  },
  { 
    id: 2, 
    title: 'التفكير الناقد', 
    category: 'تطوير الذات', 
    image: '/assets/articles/critical_thinking.png',
    date: '9 نوفمبر 2014',
    author: 'د. منصور القطري',
    description: 'يسهم التفكير الناقد في تحرير الأفراد من التبعية للآخرين والاستقلالية في الرأي، ويمكنهم من استخدام المهارات الذهنية لتحليل المواقف بعمق...' 
  },
  { 
    id: 3, 
    title: 'تجنب العداوات..«فن التغافل» مثالاً', 
    category: 'الذكاء الاجتماعي', 
    image: '/assets/articles/ignoring.png',
    date: '9 نوفمبر 2014',
    author: 'د. منصور القطري',
    description: 'روي أن الإمام علي عليه السلام عنه كان جالساً في أصحابه فسمع رجلاً يشتم قنبر – خادمه – وقد همّ قنبر بالرد عليه، فناداه الإمام مهلاً يا قنبر...' 
  },
  { 
    id: 4, 
    title: 'علاقة الإنسان العربي بالساعة', 
    category: 'ثقافة العمل', 
    image: '/assets/articles/clock.png',
    date: '9 نوفمبر 2014',
    author: 'د. منصور القطري',
    description: 'دُعيت في إحدى المرات إلى إلقاء محاضرة، وقد أعلن عنها لكي تبدأ الساعة الثامنة مساءً. وفعلاً حضرت في الوقت تماماً، ولكن الحضور بدأوا بالتوافد لاحقاً...' 
  },
];

const ArticleCard = ({ article, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group bg-white border border-surface-high hover:border-tertiary/30 transition-all duration-500 rounded-[30px] overflow-hidden flex flex-col shadow-sm hover:shadow-xl"
  >
    {/* Image: Edge-to-edge as seen in recent home grid updates */}
    <div className="relative aspect-[16/9] overflow-hidden">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <span className="px-8 py-3 bg-white text-primary font-title font-bold text-sm rounded-full shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">اقرأ المقال الكامل</span>
      </div>
      <div className="absolute top-6 right-6 px-4 py-1 bg-white/90 backdrop-blur-md text-tertiary font-title font-bold text-[10px] uppercase tracking-[0.2em] rounded-full shadow-sm">
        {article.category}
      </div>
    </div>

    {/* Content Area */}
    <div className="p-10 flex flex-col flex-1 relative bg-white">
      <div className="flex items-center gap-6 text-primary/30 font-body text-[10px] mb-6 uppercase tracking-widest">
        <span className="flex items-center gap-2">
            <Calendar className="w-3 h-3 text-tertiary" /> {article.date}
        </span>
        <span className="flex items-center gap-2">
            <User className="w-3 h-3 text-tertiary" /> {article.author}
        </span>
      </div>

      <h3 className="text-2xl font-title font-black text-primary mb-6 group-hover:text-tertiary transition-colors leading-tight min-h-[4rem]">
        {article.title}
      </h3>

      <p className="text-primary/60 font-body text-base leading-relaxed line-clamp-3 mb-10 flex-1">
        {article.description}
      </p>

      <div className="pt-8 border-t border-surface-high mt-auto">
        <a 
            href="#" 
            className="inline-flex items-center gap-4 text-primary font-title font-bold text-sm hover:text-tertiary transition-all group/link"
        >
            <span className="uppercase tracking-[0.2em]">قراءة المزيد</span>
            <div className="w-10 h-10 rounded-full border border-surface-high flex items-center justify-center group-hover/link:bg-tertiary group-hover/link:border-tertiary group-hover/link:text-white transition-all shadow-sm">
                <ArrowLeft className="w-5 h-5" />
            </div>
        </a>
      </div>
    </div>
  </motion.div>
);

const Articles = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Cinematic Header Section */}
      <header className="pt-56 pb-32 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 p-60 opacity-[0.03] pointer-events-none">
            <div className="w-[800px] h-[800px] border border-primary rounded-full" />
        </div>
        <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <span className="text-tertiary font-title font-bold text-sm tracking-[0.5em] mb-8 block uppercase">مدونة الفكر الإداري</span>
                <h1 className="text-7xl md:text-9xl font-title font-black text-primary mb-12 tracking-tighter leading-tight">رؤى <span className="text-tertiary italic">استراتيجية</span></h1>
                
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <p className="text-xl md:text-2xl text-primary/60 max-w-2xl font-body leading-relaxed border-r-4 border-tertiary/20 pr-8">
                        مقالات مختارة تجمع بين العمق المعرفي والتحليل الواقعي لمشكلات الإدارة والقيادة وبناء الإنسان في العالم العربي.
                    </p>
                </div>
            </motion.div>
        </div>
      </header>

      {/* Filter & Search Bar */}
      <div className="sticky top-24 z-40 bg-white/80 backdrop-blur-xl border-y border-surface-high py-6 mb-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
                {['الكل', 'رؤى إدارية', 'تطوير الذات', 'ثقافة العمل', 'الذكاء الاجتماعي'].map((cat) => (
                    <button 
                        key={cat}
                        className={`px-8 py-3 rounded-full font-title font-bold text-xs uppercase tracking-widest transition-all whitespace-nowrap ${cat === 'الكل' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-low text-primary/40 hover:bg-surface-high hover:text-primary'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="relative w-full md:w-96 group">
                <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/20 group-focus-within:text-tertiary transition-colors" />
                <input 
                    type="text" 
                    placeholder="ابحث عن مقال..."
                    className="w-full bg-surface-low border border-transparent focus:border-tertiary/30 focus:bg-white pr-14 pl-6 py-4 rounded-full font-body text-sm outline-none transition-all shadow-sm"
                />
            </div>
        </div>
      </div>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 mb-40">
        {articles.map((article, index) => (
          <ArticleCard key={article.id} article={article} index={index} />
        ))}
      </section>
      
      {/* Cinematic CTA Integration */}
      <div className="max-w-7xl mx-auto px-6 mb-40">
          <div className="bg-primary p-16 md:p-32 relative overflow-hidden rounded-[60px] group">
              <div className="absolute inset-0 noise-bg opacity-10" />
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-tertiary/20 rounded-full blur-[120px] group-hover:bg-tertiary/30 transition-colors duration-1000" />
              
              <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                  <span className="text-tertiary font-title font-bold tracking-[0.5em] text-sm mb-8 block uppercase">المكتبة المعرفية</span>
                  <h2 className="text-5xl md:text-7xl font-title font-black text-white mb-10 leading-tight">اشترك في النشرة <br/> <span className="text-tertiary italic">المعرفية الأسبوعية</span></h2>
                  <p className="text-white/60 font-body text-lg mb-16 leading-relaxed">
                      كن أول من يتلقى المقالات والرؤى الإدارية الجديدة والتحليلات العميقة مباشرة إلى بريدك الإلكتروني.
                  </p>
                  
                  <div className="flex flex-col md:flex-row w-full gap-4">
                      <input 
                        type="email" 
                        placeholder="أدخل بريدك الإلكتروني" 
                        className="bg-white/5 border border-white/10 px-10 py-6 font-body text-white flex-1 outline-none focus:border-tertiary focus:bg-white/10 transition-all rounded-[20px]"
                      />
                      <button className="bg-tertiary text-primary font-title font-bold px-12 py-6 hover:bg-white transition-all rounded-[20px] text-lg shadow-xl shadow-tertiary/10">اشترك الآن</button>
                  </div>
              </div>
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default Articles;
