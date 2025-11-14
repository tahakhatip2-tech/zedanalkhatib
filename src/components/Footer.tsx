import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Phone, MapPin, Clock, Code } from 'lucide-react';

export const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-forge-dark text-foreground border-t-4 border-primary">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-6">
              <div className="w-14 h-14 rounded-full bg-fire-gradient flex items-center justify-center shadow-fire-glow animate-pulse">
                <span className="text-3xl font-bold text-forge-dark">خ</span>
              </div>
              <div>
                <h3 
                  className="font-bold text-2xl text-transparent bg-clip-text bg-fire-gradient"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('الخطيب', 'Al-Khatib')}
                </h3>
                <p className="text-sm text-muted-foreground font-semibold">
                  {t('للحدادة العامة', 'Blacksmithing')}
                </p>
              </div>
            </div>
            <p 
              className="text-muted-foreground leading-relaxed mb-4"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t(
                'خبرة تمتد لعقود في صناعة الحدادة العربية والأوروبية، نجمع بين الأصالة والحداثة في كل عمل نقدمه',
                'Decades of experience in Arabic and European blacksmithing, combining authenticity and modernity in every work'
              )}
            </p>
            
            {/* Business Hours */}
            <div className="flex items-start gap-2 text-muted-foreground mb-2">
              <Clock className="h-5 w-5 mt-1 text-primary" />
              <div>
                <p className="font-semibold text-foreground mb-1">
                  {t('ساعات العمل', 'Business Hours')}
                </p>
                <p className="text-sm">{t('يومياً من 7 صباحاً - 6 مساءً', 'Daily 7 AM - 6 PM')}</p>
                <p className="text-sm">{t('مغلق أيام الجمعة', 'Closed on Fridays')}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 
              className="font-bold text-lg mb-6 text-foreground border-b-2 border-primary/30 pb-2"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t('روابط سريعة', 'Quick Links')}
            </h4>
            <ul className="space-y-3">
              {[
                { link: '/', label: t('الرئيسية', 'Home') },
                { link: '/#services', label: t('الخدمات', 'Services') },
                { link: '/#projects', label: t('المشاريع', 'Projects') },
                { link: '/blog', label: t('المدونة', 'Blog') },
                { link: '/#contact', label: t('تواصل معنا', 'Contact Us') }
              ].map((item, index) => (
                <li key={index} className="group">
                  <a 
                    href={item.link}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 hover:translate-x-2 rtl:hover:-translate-x-2"
                    style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    <span className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 
              className="font-bold text-lg mb-6 text-foreground border-b-2 border-primary/30 pb-2"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t('خدماتنا', 'Our Services')}
            </h4>
            <ul className="space-y-3">
              {[
                t('حدادة عربية تقليدية', 'Traditional Arabic Blacksmithing'),
                t('أعمال أوروبية حديثة', 'Modern European Works'),
                t('زخرفة ونقش المعادن', 'Metal Decoration'),
                t('قطع بالليزر', 'Laser Cutting'),
                t('تشكيل فني معدني', 'Artistic Metal Shaping')
              ].map((service, index) => (
                <li key={index} className="group">
                  <span 
                    className="text-muted-foreground hover:text-primary transition-colors cursor-default flex items-center gap-2"
                    style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-fire-gradient" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 
              className="font-bold text-lg mb-6 text-foreground border-b-2 border-primary/30 pb-2"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t('تواصل معنا', 'Contact Us')}
            </h4>
            <div className="space-y-4 mb-6">
              <a 
                href="tel:0797714706" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-fire-gradient transition-all">
                  <Phone className="h-5 w-5" />
                </div>
                <span dir="ltr" className="font-semibold">0797714706</span>
              </a>
              
              <div className="flex items-start gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    {t('الأردن - عمان - أبو علندا', 'Jordan - Amman - Abu Alanda')}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p 
                className="font-semibold mb-3 text-foreground"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              >
                {t('تابعنا على', 'Follow Us')}
              </p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-muted hover:bg-fire-gradient flex items-center justify-center transition-all duration-300 hover:shadow-fire-glow hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 group-hover:text-forge-dark transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-muted hover:bg-fire-gradient flex items-center justify-center transition-all duration-300 hover:shadow-fire-glow hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 group-hover:text-forge-dark transition-colors" />
                </a>
                <a 
                  href="https://wa.me/962797714706" 
                  className="w-12 h-12 rounded-full bg-muted hover:bg-fire-gradient flex items-center justify-center transition-all duration-300 hover:shadow-fire-glow hover:scale-110 group"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5 group-hover:text-forge-dark transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/30 bg-forge-dark/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p 
              className="text-muted-foreground text-sm text-center md:text-left"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t(
                `© ${new Date().getFullYear()} الخطيب للحدادة العامة. جميع الحقوق محفوظة.`,
                `© ${new Date().getFullYear()} Al-Khatib Blacksmithing. All rights reserved.`
              )}
            </p>
            
            {/* Signature Link */}
            <a
              href="https://alkhatib-marketing.great-site.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-fire-gradient hover:to-fire-gradient border border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-fire-glow hover:scale-105 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <Code className="h-4 w-4 text-primary group-hover:text-forge-dark transition-colors" />
              <span 
                className="text-sm font-semibold text-foreground group-hover:text-forge-dark transition-colors"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              >
                {t('مُطور بواسطة الخطيب للبرمجيات', 'Developed by Al-Khatib Software')}
              </span>
              <svg 
                className="h-4 w-4 text-primary group-hover:text-forge-dark transition-all duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
