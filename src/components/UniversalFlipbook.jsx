import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip-rtl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Home, Info } from 'lucide-react';

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page bg-white overflow-hidden" ref={ref}>
      {props.children}
      <div className="sr-only">{props.ocrText}</div>
    </div>
  );
});

const UniversalFlipbook = ({ pages = [] }) => {
  const book = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onPage = (e) => {
    setCurrentPage(e.data);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const bookWidth = isMobile ? 350 : (isFullscreen ? 600 : 550);
  const bookHeight = isMobile ? 500 : (isFullscreen ? 850 : 780);

  return (
    <div dir="rtl" className={`relative ${isFullscreen ? 'fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4' : 'w-full py-20 px-4'}`}>
      
      {/* Cinematic Controls Top */}
      <div className="max-w-6xl mx-auto mb-12 flex items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => window.history.back()}
            className="p-3 bg-surface-low border border-surface-high hover:border-tertiary rounded-xl text-primary/40 hover:text-tertiary transition-all"
          >
            <Home size={20} />
          </button>
          <div className="h-8 w-[1px] bg-surface-high" />
          <div className="text-right">
            <h3 className="text-xs font-title font-bold text-primary/30 uppercase tracking-[0.2em] mb-1">الصفحة الحالية</h3>
            <div className="text-lg font-title font-black text-primary flex items-center gap-2">
              <span className="text-tertiary">{currentPage + 1}</span>
              <span className="text-primary/20">/</span>
              <span>{pages.length}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
             onClick={() => setShowInfo(!showInfo)}
             className="p-4 bg-white/5 border border-surface-high rounded-full text-primary/40 hover:text-tertiary hover:border-tertiary transition-all"
          >
            <Info size={20} />
          </button>
          <button 
             onClick={toggleFullscreen}
             className="p-4 bg-primary text-white rounded-full hover:bg-tertiary transition-all shadow-xl shadow-primary/20"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
        </div>
      </div>

      <div className="relative mx-auto flex items-center justify-center overflow-visible">
        {/* Navigation Arrows */}
        <button 
          onClick={() => book.current.pageFlip().flipNext()}
          className="absolute -right-4 md:-right-20 z-50 p-4 md:p-6 bg-white border border-surface-high rounded-full shadow-2xl hover:bg-tertiary hover:text-white transition-all group"
        >
          <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
        </button>

        <button 
          onClick={() => book.current.pageFlip().flipPrev()}
          className="absolute -left-4 md:-left-20 z-50 p-4 md:p-6 bg-white border border-surface-high rounded-full shadow-2xl hover:bg-tertiary hover:text-white transition-all group"
        >
          <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
        </button>

        {/* The Book Container */}
        <div className="relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden">
           {/* Spine Highlight (only on desktop) */}
           {!isMobile && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/20 via-white/10 to-black/20 z-40 pointer-events-none" />}
           
           <HTMLFlipBook
             width={bookWidth}
             height={bookHeight}
             size="stretch"
             minWidth={280}
             maxWidth={1000}
             minHeight={400}
             maxHeight={1533}
             maxShadowOpacity={0.5}
             showCover={true}
             mobileScrollSupport={true}
             onFlip={onPage}
             className="flipbook-canvas"
             ref={book}
             usePortrait={isMobile}
             startPage={0}
             drawShadow={true}
             flippingTime={1000}
             useMouseEvents={true}
             swipeDistance={30}
             showPageCorners={true}
             disableFlipByClick={false}
             rtl={true}
           >
             {pages.map((page, index) => (
               <Page key={index} ocrText={page.ocrText}>
                 <div className="relative w-full h-full bg-surface-low flex items-center justify-center">
                    {/* Page Content */}
                    <img 
                      src={page.image} 
                      alt={`Page ${index + 1}`} 
                      className="w-full h-full object-fill select-none pointer-events-none"
                      loading={index < 5 ? "eager" : "lazy"}
                    />
                    
                    {/* Artistic Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 pointer-events-none" />
                    
                    {/* Subtle Texture */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />
                 </div>
               </Page>
             ))}
           </HTMLFlipBook>
        </div>
      </div>

      {/* Centered Thumbnail Progress */}
      <div className="max-w-4xl mx-auto mt-16 flex justify-center items-center gap-3 flex-wrap px-10">
          {pages.length <= 150 && pages.filter((_, i) => i % 5 === 0).map((_, i) => {
             const pageIdx = i * 5;
             const isActive = currentPage >= pageIdx && currentPage < pageIdx + 5;
             return (
               <button
                 key={i}
                 onClick={() => book.current.pageFlip().turnToPage(pageIdx)}
                 className={`h-1.5 rounded-full transition-all duration-500 ${isActive ? 'w-12 bg-tertiary' : 'w-2 bg-primary/10 hover:bg-primary/20'}`}
                 title={`Go to page ${pageIdx + 1}`}
               />
             )
          })}
      </div>

      {/* Info Modal */}
      <AnimatePresence>
        {showInfo && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md"
            onClick={() => setShowInfo(false)}
          >
            <div className="bg-white max-w-xl w-full p-12 rounded-[2rem] shadow-2xl text-right" onClick={e => e.stopPropagation()}>
               <div className="w-16 h-16 bg-surface-low rounded-3xl flex items-center justify-center text-tertiary mb-8 border border-surface-high">
                  <Info size={32} />
               </div>
               <h2 className="text-3xl font-title font-black text-primary mb-6">تعليمات التصفح</h2>
               <div className="space-y-6 text-primary/60 font-body leading-relaxed text-lg">
                  <p>• استخدم الأسهم الجانبية أو اسحب زوايا الصفحة لقلبها.</p>
                  <p>• انقر على أيقونة التوسيع لتجربة القراءة بملء الشاشة.</p>
                  <p>• يمكنك استخدام شريط التقدم السفلي للانتقال السريع بين الفصول.</p>
                  <p>• الكتاب متوافق مع الأجهزة اللوحية والهواتف الذكية.</p>
               </div>
               <button 
                  onClick={() => setShowInfo(false)}
                  className="mt-12 w-full py-5 bg-primary text-white font-title font-bold rounded-2xl hover:bg-tertiary transition-all shadow-xl"
               >
                  فهمت ذلك
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default UniversalFlipbook;
