import React from 'react';
import { motion } from 'framer-motion';
import ExpertiseGrid from '../components/ExpertiseGrid';
import RecentArticlesCarousel from '../components/RecentArticlesCarousel';
import WisdomCompass from '../components/WisdomCompass';
import LibraryScroller from '../components/LibraryScroller';
import ImpactStats from '../components/ImpactStats';
import MediaCarousel from '../components/MediaCarousel';
import SocialBridge from '../components/SocialBridge';
import ActivityPulse from '../components/ActivityPulse';

const Home = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white noise-bg ornament-bg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-right"
          >
            <span className="text-tertiary font-title font-bold tracking-[0.2em] text-sm mb-10 block uppercase">
              المنصة الرسمية | د. منصور القطري
            </span>
            <h1 className="text-6xl md:text-8xl font-title font-black text-primary mb-12 leading-[1.5] tracking-tight text-balance">
              تحويل الفكر الإداري <br className="hidden md:block"/> إلى <span className="text-tertiary">أثر مؤسسي</span>
            </h1>
            <p className="text-xl text-primary/70 mb-12 leading-relaxed font-body max-w-xl text-balance mr-0 ml-auto">
              نلتقي هنا لنرتقي، حيث يجتمع الفكر الإداري الرصين مع الخبرة الميدانية لبناء جيل من القادة القادرين على مواكبة التحولات الكبرى.
            </p>
            <div className="flex flex-wrap gap-6 justify-end">
              <Link to="/publications" className="px-10 py-5 bg-primary text-white rounded-none font-title font-bold text-lg hover:bg-primary/90 transition-all border border-primary">
                استكشف المكتبة
              </Link>
              <Link to="/training" className="px-10 py-5 border border-primary text-primary rounded-none font-title font-bold text-lg hover:bg-primary hover:text-white transition-all">
                استشارات وتدريب
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden border border-surface-high grayscale hover:grayscale-0 transition-all duration-1000 shadow-sm bg-white">
              <img 
                src="/assets/dr_mansour_portrait.png" 
                alt="د. منصور القطري" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
            </div>
            {/* Minimal accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-tertiary/30 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Library Scroller: Ornament BG (Now immediately after Hero) */}
      <section className="bg-white border-b border-surface-high ornament-bg">
        <LibraryScroller />
      </section>

      {/* Expertise Carousel: Integrated Header & Content */}
      <ExpertiseGrid />

      {/* Recent Articles Carousel */}
      <RecentArticlesCarousel />

      {/* NEW: Activity Pulse (Social Proof & Events) */}
      <ActivityPulse />

      {/* Impact Stats: Copper Lines */}
      <ImpactStats />

      {/* Media Carousel: Cinematic View */}
      <MediaCarousel />

      {/* Wisdom Compass: Card Style inside Section */}
      <WisdomCompass />

      {/* Social Pulse: Patterns */}
      <section className="bg-white py-32 relative overflow-hidden copper-lines border-t border-surface-high">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="text-right ml-auto">
                    <span className="text-tertiary font-title font-bold text-sm tracking-widest uppercase mb-4 block">نبض المجتمع</span>
                    <h2 className="text-5xl font-title font-black text-primary">تواصل مستمر</h2>
                </div>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="text-primary/40 font-title font-bold hover:text-tertiary transition-colors uppercase tracking-[0.2em]">
                    Follow on X →
                </a>
            </div>
            <SocialBridge />
        </div>
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </div>
      </section>
    </div>
  );
};

export default Home;
