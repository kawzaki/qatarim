import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = ({ dark = false }) => {
  return (
    <div className={`relative overflow-hidden ${dark ? 'bg-white/5' : 'bg-surface-high'} p-12 md:p-16 border ${dark ? 'border-white/10' : 'border-surface-high'}`}>
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-right">
            <span className={`text-tertiary font-title font-bold text-xs tracking-widest uppercase mb-4 block ${dark ? 'text-tertiary' : 'text-tertiary'}`}>تواصل مستمر</span>
            <h2 className={`text-3xl md:text-4xl font-title font-black mb-4 ${dark ? 'text-white' : 'text-primary'}`}>اشترك في النشرة البريدية</h2>
            <p className={`font-body text-lg ${dark ? 'text-white/60' : 'text-primary/60'}`}>
                انضم لأكثر من 40,000 مشترك ليصلك جديد الفكر الإداري والقيادي.
            </p>
        </div>
        
        <form className="w-full lg:w-[500px] flex flex-col md:flex-row gap-0 group">
          <input 
            type="email" 
            placeholder="بريدك الإلكتروني"
            className={`flex-1 p-5 focus:outline-none transition-all font-body text-right border ${dark ? 'bg-white/10 border-white/10 text-white placeholder:text-white/30' : 'bg-white border-surface-high text-primary placeholder:text-primary/30'}`}
            required
          />
          <button className="px-10 py-5 bg-tertiary text-primary font-bold font-title text-lg hover:bg-primary hover:text-white transition-all whitespace-nowrap">
            اشترك الآن
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
