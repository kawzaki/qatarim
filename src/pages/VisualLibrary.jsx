import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Clock, Share2, Filter, ChevronRight, Bookmark, Youtube, X, Maximize2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// This is the ONLY ID we know works with your local browser security/headers.
const safeId = 'mY3mGTHwnxY';

const videos = [
  { 
    id: 1, 
    title: 'قلق الامتحانات', 
    category: 'مقابلات', 
    duration: '12:45', 
    date: '14 سبتمبر 2016', 
    thumbnail: '/assets/videos/exam_anxiety.png', 
    featured: true, 
    youtubeId: safeId, 
    description: 'مقابلة مع الدكتور منصور القطري عن قلق الامتحانات ورهبة الطلاب والطالبات منها في صباح الثقافية على قناة السعودية الثقافية.' 
  },
  { 
    id: 2, 
    title: 'الإتصال الإنساني', 
    category: 'محاضرات', 
    duration: '06:20', 
    date: '14 سبتمبر 2015', 
    thumbnail: '/assets/videos/human_connection.png', 
    youtubeId: safeId, 
    description: 'استكشاف لأسس الاتصال الإنساني الفعال وكيفية بناء جسور التفاهم في البيئات المهنية والاجتماعية.' 
  },
  { 
    id: 3, 
    title: 'الطموح', 
    category: 'فكر إداري', 
    duration: '08:15', 
    date: '25 مارس 2012', 
    thumbnail: '/assets/videos/ambition.png', 
    youtubeId: safeId, 
    description: 'رؤية فلسفية وإدارية حول مفهوم الطموح وكيفية تحويله إلى خطط عمل واقعية تحقق الأثر المطلوب.' 
  },
  { 
    id: 4, 
    title: 'العمل التطوعي في السعودية', 
    category: 'العمل التطوعي', 
    duration: '15:10', 
    date: '25 مارس 2012', 
    thumbnail: '/assets/articles/responsibility.png', 
    youtubeId: safeId, 
    description: 'سلسلة محاضرات تتناول دور العمل الأهلي في تنظيم المجتمعات وتعزيز التكافل الاجتماعي.' 
  },
  { 
    id: 5, 
    title: 'حماية الطفولة', 
    category: 'دراسات اجتماعية', 
    duration: '11:30', 
    date: '25 مارس 2012', 
    thumbnail: '/assets/articles/critical_thinking.png', 
    youtubeId: safeId, 
    description: 'تحليل للمشكلات التي تواجه الطفولة في المجتمعات العربية وسبل الحماية القانونية والاجتماعية.' 
  },
  { 
    id: 6, 
    title: 'تحويل الفكر إلى أثر', 
    category: 'رؤى إدارية', 
    duration: '05:00', 
    date: '10 مايو 2023', 
    thumbnail: '/assets/articles/ignoring.png', 
    youtubeId: safeId, 
    description: 'خواطر إدارية حول كيفية تحويل الأفكار النظرية إلى نتائج ملموسة في المؤسسات الحديثة.' 
  },
];

const categories = ['الكل', 'مقابلات', 'محاضرات', 'فكر إداري', 'العمل التطوعي', 'دراسات اجتماعية'];

const VisualLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  
  const featuredVideo = videos.find(v => v.featured) || videos[0];
  const filteredVideos = activeCategory === 'الكل' 
    ? videos.filter(v => v.id !== featuredVideo.id)
    : videos.filter(v => v.category === activeCategory && v.id !== featuredVideo.id);

  const openVideo = (youtubeId) => {
      setSelectedVideoId(youtubeId);
  };

  const closeVideo = () => {
      setSelectedVideoId(null);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Video Modal / Overlay Player */}
      <AnimatePresence>
        {selectedVideoId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-20 bg-primary/95 backdrop-blur-2xl"
            onClick={closeVideo}
          >
            <button 
              onClick={closeVideo}
              className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-tertiary hover:text-primary transition-all group z-[110]"
            >
              <X className="w-8 h-8 group-hover:rotate-90 transition-transform" />
            </button>
            
            <motion.div 
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-6xl aspect-video bg-black shadow-2xl relative rounded-[30px] overflow-hidden"
            >
                <iframe 
                    key={selectedVideoId} 
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section: Featured Content */}
      <section className="relative w-full h-[85vh] bg-primary overflow-hidden group">
        <div className="absolute inset-0">
            <img 
                src={featuredVideo.thumbnail} 
                alt={featuredVideo.title} 
                className="w-full h-full object-cover opacity-30 scale-105 group-hover:scale-100 transition-transform duration-[4s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 h-full flex items-end pb-32 relative z-10 text-right">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mr-0 ml-auto"
            >
                <div className="flex items-center justify-end gap-6 mb-8">
                    <span className="text-white/40 font-body text-xs flex items-center gap-2 tracking-widest uppercase">
                        {featuredVideo.duration} <Clock className="w-4 h-4 text-tertiary" />
                    </span>
                    <span className="px-5 py-1.5 bg-tertiary text-primary font-title font-bold text-[10px] uppercase tracking-[0.3em]">محتوى مميز</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-title font-black text-white mb-10 leading-[1.1] tracking-tighter">
                    {featuredVideo.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/60 font-body mb-12 leading-relaxed max-w-3xl border-l-4 border-tertiary/20 pl-8 ml-auto text-balance">
                    {featuredVideo.description}
                </p>
                <div className="flex flex-wrap gap-8 justify-end">
                    <button className="flex items-center gap-4 text-white/40 font-title font-bold hover:text-white transition-all uppercase tracking-widest text-sm">
                        مشاركة <Share2 className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => openVideo(featuredVideo.youtubeId)}
                        className="px-14 py-6 bg-white text-primary font-title font-bold text-xl flex items-center gap-4 hover:bg-tertiary transition-all shadow-2xl"
                    >
                        <span>شاهد اللقاء</span>
                        <Play className="w-6 h-6 fill-primary" />
                    </button>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Navigation & Filter Bar */}
      <div className="sticky top-24 z-40 bg-white/90 backdrop-blur-2xl border-y border-surface-high">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row-reverse justify-between items-center gap-8 text-right">
            <div className="flex items-center gap-10 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide flex-row-reverse">
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm font-title font-bold transition-all whitespace-nowrap relative pb-4 uppercase tracking-[0.2em] ${activeCategory === cat ? 'text-primary' : 'text-primary/30 hover:text-primary'}`}
                    >
                        {cat}
                        {activeCategory === cat && (
                            <motion.div layoutId="catUnderline" className="absolute bottom-0 left-0 right-0 h-1 bg-tertiary" />
                        )}
                    </button>
                ))}
            </div>
            <div className="flex items-center gap-4 text-primary/20 font-title font-bold text-[10px] uppercase tracking-widest">
                <span>فرز المحتوى المرئي</span>
                <Filter className="w-4 h-4" />
            </div>
        </div>
      </div>

      {/* Video Grid */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <AnimatePresence mode="popLayout">
                {filteredVideos.map((video, index) => (
                    <motion.div
                        layout
                        key={video.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group flex flex-col"
                    >
                        {/* Thumbnail Container */}
                        <button 
                            onClick={() => openVideo(video.youtubeId)}
                            className="relative aspect-video overflow-hidden rounded-[30px] border border-surface-high bg-surface-low mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500 text-right"
                        >
                            <img 
                                src={video.thumbnail} 
                                alt={video.title} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                                <div className="w-20 h-20 bg-white flex items-center justify-center rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                                    <Play className="w-8 h-8 text-primary fill-primary translate-x-[-2px]" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 px-4 py-1 bg-black/80 text-white text-[10px] font-title font-bold tracking-widest backdrop-blur-md rounded-full shadow-lg">
                                {video.duration}
                            </div>
                        </button>

                        {/* Content */}
                        <div className="flex-1 px-2 text-right">
                            <div className="flex items-center justify-end gap-10 mb-4">
                                <span className="text-primary/20 font-body text-[10px]">{video.date}</span>
                                <span className="text-tertiary font-title font-bold text-[10px] uppercase tracking-[0.3em]">
                                    {video.category}
                                </span>
                            </div>
                            <h3 className="text-3xl font-title font-black text-primary mb-6 group-hover:text-tertiary transition-colors leading-tight min-h-[4.5rem]">
                                {video.title}
                            </h3>
                            <p className="text-primary/60 font-body text-base line-clamp-2 leading-relaxed mb-10">
                                {video.description}
                            </p>
                            <div className="flex items-center justify-between pt-8 border-t border-surface-high">
                                <button className="text-primary/20 hover:text-tertiary transition-colors">
                                    <Bookmark className="w-5 h-5" />
                                </button>
                                <button 
                                    onClick={() => openVideo(video.youtubeId)}
                                    className="flex items-center gap-3 text-primary/40 font-title font-bold text-[10px] uppercase tracking-widest hover:text-tertiary transition-all"
                                >
                                    مشاهدة سريعة <Youtube className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
        
        {/* YouTube Channel Redirect CTA */}
        <div className="mt-40 bg-surface-low rounded-[50px] p-16 md:p-24 relative overflow-hidden ornament-bg">
            <div className="relative z-10 flex flex-col md:flex-row-reverse items-center justify-between gap-16 text-center md:text-right">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-6xl font-title font-black text-primary mb-8 text-right">اشترك في القناة الرسمية</h2>
                    <p className="text-xl text-primary/60 font-body leading-relaxed pl-0 md:pl-10 border-l-0 md:border-l-4 border-tertiary/20 text-right">
                        انضم إلى أكثر من آلاف المشتركين وتابع أحدث الدروس والمحاضرات والمقابلات الإدارية فور صدورها.
                    </p>
                </div>
                <a 
                    href="https://www.youtube.com/user/Dralqatari" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-16 py-7 bg-primary text-white font-title font-bold text-xl flex items-center gap-6 hover:bg-tertiary transition-all shadow-2xl rounded-none group"
                >
                    <Youtube className="w-8 h-8 group-hover:scale-110 transition-transform" />
                    <span>انتقل إلى يوتيوب</span>
                </a>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisualLibrary;
