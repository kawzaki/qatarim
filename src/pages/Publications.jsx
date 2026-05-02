import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Download, Search, Filter, ArrowRight, Share2, Star, Bookmark, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mapped exactly as per user instruction:
// 1st cover (20147C1) -> 3rd book (فضل السكوت)
// 2nd cover (203B041) -> 1st book (تربية الحرية)
// 3rd cover (484367) -> 2nd book (رصيد الحكمة)
// Remaining covers stay for their respective books.
const books = [
  {
    id: 1,
    title: 'تربية الحرية',
    year: '2012',
    description: 'كتاب يمثل قراءة مشاكسة تستبطن ضرورة ثقافية لتأكيد حرية الناس وتوسيع خياراتهم في عدم الانحناء والطأطأة.',
    category: 'فكر وثقافة',
    pages: '180',
    status: 'متاح للتحميل',
    pdfUrl: 'https://www.qatarim.net/wp-content/uploads/Freedom.pdf',
    image: 'https://www.qatarim.net/wp-content/uploads/2014/10/2010-4-19_0-55-6_203B041-188x3001.jpg', // 2nd cover
    rating: 4.8
  },
  {
    id: 2,
    title: 'رصيد الحكمة',
    year: '2012',
    description: 'مجموعة من الكلمات والأقوال المأثورة والحكم من التراث العربي والإسلامي وتراث الأمم الأخرى، مدعمة برؤى إدارية وتربوية.',
    category: 'حكمة وفلسفة',
    pages: '210',
    status: 'متاح للتحميل',
    pdfUrl: 'https://www.qatarim.net/wp-content/uploads/Wizdom.pdf',
    image: 'https://ak-asset.jarir.com/akeneo-prod/asset/m1images/4/8/484367.jpg', // 3rd cover
    rating: 4.9
  },
  {
    id: 3,
    title: 'فضل السكوت ولزوم البيوت',
    year: '2012',
    description: 'محاولة جادة لكتابة استثنائية بعيداً عن الانخراط في "عقلية القطيع"، متجاوزة الروح الانهزامية ولغة التيئيس.',
    category: 'فلسفة اجتماعية',
    pages: '195',
    status: 'متاح',
    image: 'https://www.qatarim.net/wp-content/uploads/2014/10/2010-4-19_0-54-0_20147C1-209x3001.jpg', // 1st cover
    rating: 4.7
  },
  {
    id: 4,
    title: 'صناعة الرؤية في التربية والمجتمع',
    year: '2012',
    description: 'مقالات ورؤى نقدية في شؤون التربية والمجتمع، تهدف إلى بناء رؤية استراتيجية للتغيير الإيجابي.',
    category: 'تربية وإدارة',
    pages: '240',
    status: 'متاح',
    image: 'https://m.media-amazon.com/images/I/61xOPlej-HL._SL1500_.jpg',
    rating: 4.6
  },
  {
    id: 5,
    title: 'الجواب الشافي لتمكين البائس الحافي',
    year: '2016',
    description: 'أحدث إصدارات الدكتور القطري، يتناول آليات التمكين الذاتي والمجتمعي بأسلوب أدبي وفلسفي عميق.',
    category: 'إدارة وتطوير',
    pages: '280',
    status: 'جديد',
    image: 'https://ak-asset.jarir.com/akeneo-prod/asset/m1images/4/6/460656.jpg',
    rating: 5.0
  },
  {
    id: 6,
    title: 'ومضات فكرية',
    year: '2024',
    description: 'عمل بصري يجمع خلاصات تسعين كتاباً في قوالب فنية ملهمة، يمزج بين عمق الفكر الإداري وجمال التصميم البصري المعزز بالذكاء الاصطناعي.',
    category: 'إدارة وتطوير',
    pages: '109',
    status: 'تفاعلي',
    isFlipbook: true,
    image: '/assets/books/wamadat/page-001.png',
    rating: 5.0
  }
];

const categories = ['الكل', 'فكر وثقافة', 'حكمة وفلسفة', 'فلسفة اجتماعية', 'تربية وإدارة', 'إدارة وتطوير'];

const Publications = () => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter(book => {
    const matchesCategory = activeCategory === 'الكل' || book.category === activeCategory;
    const matchesSearch = book.title.includes(searchQuery) || book.description.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen font-body text-right" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 bg-surface-low overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-[120px]" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-tertiary rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-tertiary font-title font-bold text-sm tracking-[0.3em] uppercase mb-6 block">المكتبة الفكرية</span>
            <h1 className="text-6xl md:text-8xl font-title font-black text-primary mb-10 leading-tight">
              المؤلفات والكتب
            </h1>
            <p className="text-xl text-primary/60 leading-relaxed mb-12">
              نتاج أكثر من ثلاثة عقود من البحث والتدريب والفكر الإداري والتربوي، نضعها بين أيديكم لتعزيز الوعي وبناء الرؤية.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-24 z-40 bg-white/80 backdrop-blur-2xl border-y border-surface-high">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8 overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0 scrollbar-hide">
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm font-title font-bold transition-all whitespace-nowrap relative pb-2 uppercase tracking-widest ${activeCategory === cat ? 'text-primary' : 'text-primary/30 hover:text-primary'}`}
                    >
                        {cat}
                        {activeCategory === cat && (
                            <motion.div layoutId="catUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-tertiary" />
                        )}
                    </button>
                ))}
            </div>

            <div className="relative w-full lg:w-96">
                <input 
                    type="text"
                    placeholder="بحث في الكتب..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface-low border border-surface-high px-6 py-4 rounded-full font-body text-sm focus:outline-none focus:border-tertiary transition-all pr-14"
                />
                <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/30" />
            </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <AnimatePresence mode="popLayout">
                {filteredBooks.map((book, index) => (
                    <motion.div
                        layout
                        key={book.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group flex flex-col md:flex-row gap-10 items-center md:items-start"
                    >
                        {/* Book Cover */}
                        <div className="relative w-64 flex-shrink-0">
                            <div className="aspect-[3/4] bg-surface-low overflow-hidden rounded-2xl border border-surface-high shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                                <img 
                                    src={book.image} 
                                    alt={book.title} 
                                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            {book.status === 'جديد' && (
                                <div className="absolute -top-4 -right-4 bg-tertiary text-primary font-title font-bold text-[10px] px-4 py-2 rounded-full shadow-lg animate-pulse">
                                    إصدار جديد
                                </div>
                            )}
                        </div>

                        {/* Book Details */}
                        <div className="flex-1 text-center md:text-right pt-4">
                            <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 mb-6">
                                <div className="flex items-center gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(book.rating) ? 'text-tertiary fill-tertiary' : 'text-primary/10'}`} />
                                    ))}
                                    <span className="text-[10px] font-title font-bold text-primary/30 mr-2">{book.rating}</span>
                                </div>
                                <span className="text-tertiary font-title font-bold text-[10px] tracking-widest uppercase">{book.category}</span>
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-title font-black text-primary mb-6 group-hover:text-tertiary transition-colors">
                                {book.title}
                            </h2>
                            
                            <p className="text-primary/60 text-lg leading-relaxed mb-8 line-clamp-3">
                                {book.description}
                            </p>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-10">
                                <div className="flex items-center gap-2 text-primary/40 text-xs font-body">
                                    <BookOpen className="w-4 h-4" />
                                    <span>{book.pages} صفحة</span>
                                </div>
                                <div className="w-1 h-1 bg-primary/10 rounded-full" />
                                <div className="text-primary/40 text-xs font-body">{book.year} م</div>
                            </div>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                                {book.isFlipbook ? (
                                    <Link 
                                        to="/wamadat"
                                        className="px-8 py-4 bg-tertiary text-primary font-title font-bold text-xs flex items-center gap-3 hover:bg-primary hover:text-white transition-all shadow-xl"
                                    >
                                        تصفح الكتاب تفاعلياً <BookOpen className="w-4 h-4" />
                                    </Link>
                                ) : book.pdfUrl ? (
                                    <a 
                                        href={book.pdfUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="px-8 py-4 bg-primary text-white font-title font-bold text-xs flex items-center gap-3 hover:bg-tertiary transition-all shadow-xl"
                                    >
                                        تحميل الكتاب <Download className="w-4 h-4" />
                                    </a>
                                ) : (
                                    <button className="px-8 py-4 bg-surface-high text-primary/40 font-title font-bold text-xs flex items-center gap-3 cursor-not-allowed">
                                        قريباً رقمياً <ExternalLink className="w-4 h-4" />
                                    </button>
                                )}
                                <button className="p-4 border border-surface-high hover:border-tertiary hover:text-tertiary transition-all rounded-full group/btn">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <button className="p-4 border border-surface-high hover:border-tertiary hover:text-tertiary transition-all rounded-full">
                                    <Bookmark className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
      </section>

      {/* Institutional Quote */}
      <section className="bg-primary py-32 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <h3 className="text-tertiary font-title font-bold text-sm tracking-[0.4em] uppercase mb-12">من رصيد الحكمة</h3>
                <p className="text-4xl md:text-6xl font-title font-black text-white leading-tight mb-16 italic">
                    "الحكمة شجرة تنبت في القلب وتثمر على اللسان"
                </p>
                <div className="w-24 h-[1px] bg-tertiary mx-auto mb-8" />
                <span className="text-white/40 font-body text-sm tracking-widest uppercase">الإمام علي (ع)</span>
            </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publications;
