import React from 'react';
import { Link } from 'react-router-dom';
import Newsletter from './Newsletter';

const Footer = () => {
  const sitemap = [
    { name: 'الرئيسية', href: '/' },
    { name: 'المؤلفات', href: '/publications' },
    { name: 'المقالات', href: '/articles' },
    { name: 'المكتبة المرئية', href: '/visual-library' },
    { name: 'التدريب والاستشارات', href: '/training' },
  ];

  return (
    <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary rounded-full blur-[120px] -mr-64 -mt-64" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Newsletter Hub */}
        <div className="mb-24 border-b border-white/10 pb-20">
            <Newsletter dark={true} />
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-right">
          
          {/* Column 1: Identity */}
          <div className="space-y-8 order-last lg:order-first">
            <img src="/assets/logo.png" alt="د. منصور القطري" className="h-12 brightness-0 invert opacity-90 mr-auto lg:mr-0" />
            <p className="text-white/60 font-body leading-relaxed text-sm">
              مستشار في الموارد البشرية والتدريب، كاتب وباحث في الفكر الإداري والقيادي. نسعى معاً لبناء ثقافة مؤسسية ترتكز على القيم والابتكار.
            </p>
            <div className="flex gap-6 text-tertiary justify-end lg:justify-start">
                <a href="#" className="hover:text-white transition-colors text-xl font-title font-bold">X</a>
                <a href="#" className="hover:text-white transition-colors text-xl font-title font-bold">IN</a>
                <a href="#" className="hover:text-white transition-colors text-xl font-title font-bold">YT</a>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div>
            <h4 className="text-white font-title font-black text-lg mb-10 uppercase tracking-widest border-r-2 border-tertiary pr-4">خريطة الموقع</h4>
            <ul className="space-y-4">
              {sitemap.map(item => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/50 hover:text-tertiary font-title font-bold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Insights (Evergreen) */}
          <div>
            <h4 className="text-white font-title font-black text-lg mb-10 uppercase tracking-widest border-r-2 border-tertiary pr-4">رؤى إدارية</h4>
            <ul className="space-y-6">
                {['القيادة بالقيم', 'إدارة التغيير الاستراتيجي', 'بناء الكفاءات الوطنية'].map(topic => (
                    <li key={topic} className="group cursor-pointer">
                        <span className="text-white/70 font-title font-bold group-hover:text-tertiary transition-colors block mb-1">{topic}</span>
                        <div className="w-4 h-0.5 bg-tertiary/30 group-hover:w-8 transition-all mr-auto ml-0" />
                    </li>
                ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-title font-black text-lg mb-10 uppercase tracking-widest border-r-2 border-tertiary pr-4">تواصل مباشر</h4>
            <div className="space-y-6">
                <div className="p-6 bg-white/5 border border-white/10 group hover:border-tertiary/30 transition-all">
                    <p className="text-xs font-title font-bold text-white/30 mb-2 uppercase tracking-widest">البريد الرسمي</p>
                    <p className="text-white font-body font-bold group-hover:text-tertiary transition-colors">info@qatarim.net</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 group hover:border-tertiary/30 transition-all">
                    <p className="text-xs font-title font-bold text-white/30 mb-2 uppercase tracking-widest">طلب الاستشارات</p>
                    <p className="text-white font-body font-bold group-hover:text-tertiary transition-colors">+966 5XX XXX XXX</p>
                </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 font-body text-xs uppercase tracking-widest">
            <p>© 2026 د. منصور القطري. جميع الحقوق محفوظة.</p>
            <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
                <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
