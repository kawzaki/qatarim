import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip-rtl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Home, Search, Share2, Info } from 'lucide-react';
import { wamadatPages } from '../data/wamadat';

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page bg-white overflow-hidden" ref={ref}>
      {props.children}
      <div className="sr-only">{props.ocrText}</div>
    </div>
  );
});

const WamadatFlipbook = () => {
  const book = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const onPage = (e) => {
    setCurrentPage(e.data);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-[80vh] py-20 transition-all duration-700 ${isFullscreen ? 'bg-primary fixed inset-0 z-[200]' : 'bg-surface-low'}`}>
      
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tertiary/5 rounded-full blur-[120px]" />
      </div>

      {/* Toolbar */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-12 flex items-center gap-4 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-primary/5 z-20"
      >
        <button 
          onClick={() => book.current.pageFlip().flip(0)}
          className="p-2 hover:bg-primary/5 rounded-full transition-colors text-primary"
          title="Cover"
        >
          <Home size={20} />
        </button>
        <div className="w-[1px] h-6 bg-primary/10 mx-2" />
        <span className="text-xs font-title font-bold text-primary/40 uppercase tracking-widest">
           صفحة {currentPage + 1} من {wamadatPages.length}
        </span>
        <div className="w-[1px] h-6 bg-primary/10 mx-2" />
        <button 
          onClick={toggleFullscreen}
          className="p-2 hover:bg-primary/5 rounded-full transition-colors text-primary"
          title="Fullscreen"
        >
          {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
        <button 
          onClick={() => setShowInfo(!showInfo)}
          className={`p-2 rounded-full transition-colors ${showInfo ? 'bg-tertiary text-primary' : 'hover:bg-primary/5 text-primary'}`}
          title="Info"
        >
          <Info size={20} />
        </button>
      </motion.div>

      {/* Book Container */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-7xl px-12">
        
        {/* Navigation Buttons */}
        <button 
          onClick={() => book.current.pageFlip().flipPrev()}
          className="absolute left-0 z-30 p-4 bg-white shadow-2xl rounded-full text-primary hover:bg-tertiary transition-all -translate-x-1/2"
        >
          <ChevronLeft size={32} />
        </button>

        <HTMLFlipBook
          width={580}
          height={780}
          size="stretch"
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1533}
          maxShadowOpacity={0.3}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={onPage}
          className="shadow-2xl"
          ref={book}
          flippingTime={1000}
          startPage={0}
          drawShadow={true}
          usePortrait={false}
          useMouseEvents={true}
          showPageCorners={true}
          rtl={true}
          style={{ margin: '0 auto' }}
        >
          {wamadatPages.map((page) => (
            <Page key={page.id} ocrText={page.ocrText}>
              <img 
                src={page.image} 
                alt={page.title} 
                className="w-full h-full block"
                loading="lazy"
              />
            </Page>
          ))}
        </HTMLFlipBook>

        <button 
          onClick={() => book.current.pageFlip().flipNext()}
          className="absolute right-0 z-30 p-4 bg-white shadow-2xl rounded-full text-primary hover:bg-tertiary transition-all translate-x-1/2"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Info Overlay */}
      <AnimatePresence>
        {showInfo && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-10 top-1/2 -translate-y-1/2 w-80 bg-white shadow-2xl p-8 z-[210] border border-primary/5 rounded-3xl text-right"
            dir="rtl"
          >
             <h3 className="text-2xl font-title font-black text-primary mb-4">حول هذا الإصدار</h3>
             <p className="text-primary/60 font-body text-sm leading-relaxed mb-6">
               "ومضات فكرية" هو عمل بصري يجمع خلاصات تسعين كتاباً في قوالب فنية ملهمة للدكتور منصور القطري.
             </p>
             <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-title font-bold text-primary/40 uppercase tracking-widest border-b border-primary/5 pb-2">
                   <span>تاريخ النشر</span>
                   <span className="text-primary">2024</span>
                </div>
                <div className="flex items-center justify-between text-xs font-title font-bold text-primary/40 uppercase tracking-widest border-b border-primary/5 pb-2">
                   <span>عدد الصفحات</span>
                   <span className="text-primary">109</span>
                </div>
             </div>
             <button className="mt-8 w-full py-4 bg-primary text-white font-title font-bold text-xs flex items-center justify-center gap-2 hover:bg-tertiary transition-colors">
                مشاركة هذه الومضة <Share2 size={16} />
             </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thumbnails / Progress Strip */}
      <div className="mt-16 w-full max-w-4xl px-12 z-20 overflow-x-auto py-4 flex flex-row-reverse justify-center gap-2 scrollbar-hide">
         {wamadatPages.map((page, idx) => (
           <button 
             key={page.id}
             onClick={() => book.current.pageFlip().flip(idx)}
             className={`w-3 h-3 rounded-full transition-all shrink-0 ${currentPage === idx ? 'bg-tertiary w-8' : 'bg-primary/10 hover:bg-primary/20'}`}
             title={`Page ${idx + 1}`}
           />
         ))}
      </div>
    </div>
  );
};

export default WamadatFlipbook;
