import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, MapPin, Mail, Sparkles, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-foreground border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Al-Khatib Logo"
                className="w-14 h-14 object-contain"
              />
              <div>
                <h3 className="font-black text-xl text-white leading-none">
                  {t('الخطيب', 'Al-Khatib')}
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-primary font-bold">
                  {t('للحدادة العامة', 'Blacksmithing')}
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs" style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'inherit' }}>
              {t(
                'خبرة في الحدادة العربية التقليدية والأوروبية الحديثة، نجمع بين المتانة والجمال في كل عمل.',
                'Expertise in traditional Arabic and modern European blacksmithing, combining durability and beauty.'
              )}
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Mail, href: 'mailto:info@alkhatib.com' }
              ].map((social, i) => (
                <a key={i} href={social.href} className="text-gray-500 hover:text-primary transition-colors">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'inherit' }}>
            <h4 className="text-white font-bold mb-6">{t('روابط سريعة', 'Quick Links')}</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: t('الرئيسية', 'Home') },
                { to: '/portfolio', label: t('معرض الأعمال', 'Portfolio') },
                { to: '/blog', label: t('المدونة', 'Blog') },
                { to: '/booking', label: t('احجز موعد', 'Book Now') }
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.to} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'inherit' }}>
            <h4 className="text-white font-bold mb-6">{t('خدماتنا', 'Our Services')}</h4>
            <ul className="space-y-3">
              {[
                t('حدادة فنية', 'Artistic Forge'),
                t('أبواب ليزر', 'Laser Doors'),
                t('أثاث معدني', 'Metal Furniture'),
                t('سياج وديكور', 'Fencing & Decor')
              ].map((s, i) => (
                <li key={i} className="text-gray-400 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6" style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'inherit' }}>
            <h4 className="text-white font-bold mb-6">{t('تواصل معنا', 'Contact Us')}</h4>
            <div className="space-y-4">
              <a href="tel:0797714706" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <span className="text-white font-bold">0797714706</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="text-gray-400 text-sm">{t('عمان، الأردن', 'Amman, Jordan')}</span>
              </div>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-4 flex items-center gap-2 text-primary font-bold text-sm hover:underline"
            >
              <ChevronUp size={18} />
              {t('العودة للأعلى', 'Back to Top')}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6" style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'inherit' }}>
          <p className="text-gray-600 text-xs">
            {t(
              `© ${new Date().getFullYear()} الخطيب للحدادة. جميع الحقوق محفوظة.`,
              `© ${new Date().getFullYear()} Al-Khatib Blacksmithing. All rights reserved.`
            )}
          </p>
          <motion.a
            href="https://alkhatib-marketing.great-site.net/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-xs"
          >
            <Sparkles size={14} />
            <span>{t('تطوير الخطيب للبرمجيات', 'By Al-Khatib Software')}</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};
