import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, MapPin, Clock, Code, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-gradient-to-b from-forge-dark via-forge-dark to-black text-foreground overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Top Border Gradient */}
      <div className="h-1 bg-fire-gradient" />

      {/* Main Footer Content */}
      <motion.div 
        className="relative container mx-auto px-4 py-16 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-fire-gradient flex items-center justify-center shadow-fire-glow group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-forge-dark">خ</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-ping opacity-75" />
              </div>
              <div>
                <h3 
                  className="font-black text-2xl text-transparent bg-clip-text bg-fire-gradient"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('الخطيب', 'Al-Khatib')}
                </h3>
                <p 
                  className="text-sm text-primary font-bold"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('للحدادة العامة', 'Blacksmithing')}
                </p>
              </div>
            </div>
            
            <p 
              className="text-muted-foreground leading-relaxed mb-6 text-sm"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t(
                'خبرة تمتد لعقود في صناعة الحدادة العربية والأوروبية، نجمع بين الأصالة والحداثة في كل عمل نقدمه',
                'Decades of experience in Arabic and European blacksmithing, combining authenticity and modernity in every work'
              )}
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
              ].map((social, index) => (
                <motion.a 
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-muted/50 hover:bg-fire-gradient flex items-center justify-center transition-all duration-300 hover:shadow-fire-glow group border border-border/50 hover:border-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-forge-dark transition-colors" />
                </motion.a>
              ))}
              <motion.a 
                href="https://wa.me/962797714706"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl bg-muted/50 hover:bg-fire-gradient flex items-center justify-center transition-all duration-300 hover:shadow-fire-glow group border border-border/50 hover:border-primary"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5 text-muted-foreground group-hover:text-forge-dark transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 
              className="font-bold text-lg mb-6 text-foreground flex items-center gap-2"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              <span className="w-8 h-1 bg-fire-gradient rounded-full" />
              {t('روابط سريعة', 'Quick Links')}
            </h4>
            <ul className="space-y-3">
              {[
                { link: '/', label: t('الرئيسية', 'Home'), isRoute: true },
                { link: '/#services', label: t('الخدمات', 'Services'), isRoute: false },
                { link: '/portfolio', label: t('معرض الأعمال', 'Portfolio'), isRoute: true },
                { link: '/blog', label: t('المدونة', 'Blog'), isRoute: true },
                { link: '/booking', label: t('احجز موعد', 'Book Now'), isRoute: true },
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  className="group"
                  whileHover={{ x: language === 'ar' ? -8 : 8 }}
                >
                  {item.isRoute ? (
                    <Link
                      to={item.link}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 text-sm"
                      style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                    >
                      <ArrowUpRight className={`h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity ${language === 'ar' ? 'rotate-180' : ''}`} />
                      {item.label}
                    </Link>
                  ) : (
                    <a 
                      href={item.link}
                      onClick={(e) => {
                        e.preventDefault();
                        const targetId = item.link.replace('/#', '');
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.href = item.link;
                        }
                      }}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 cursor-pointer text-sm"
                      style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                    >
                      <ArrowUpRight className={`h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity ${language === 'ar' ? 'rotate-180' : ''}`} />
                      {item.label}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 
              className="font-bold text-lg mb-6 text-foreground flex items-center gap-2"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              <span className="w-8 h-1 bg-fire-gradient rounded-full" />
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
                <li key={index} className="group flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-fire-gradient flex-shrink-0" />
                  <span 
                    className="text-muted-foreground text-sm"
                    style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 
              className="font-bold text-lg mb-6 text-foreground flex items-center gap-2"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              <span className="w-8 h-1 bg-fire-gradient rounded-full" />
              {t('تواصل معنا', 'Contact Us')}
            </h4>
            
            <div className="space-y-4">
              <motion.a 
                href="tel:0797714706"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-fire-gradient/20 flex items-center justify-center group-hover:bg-fire-gradient transition-all">
                  <Phone className="h-5 w-5 text-primary group-hover:text-forge-dark" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t('اتصل بنا', 'Call Us')}</p>
                  <span dir="ltr" className="font-bold text-foreground">0797714706</span>
                </div>
              </motion.a>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-fire-gradient/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t('الموقع', 'Location')}</p>
                  <p 
                    className="font-medium text-foreground text-sm"
                    style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    {t('الأردن - عمان - أبو علندا', 'Jordan - Amman - Abu Alanda')}
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-fire-gradient/20 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{t('ساعات العمل', 'Working Hours')}</p>
                  <p 
                    className="font-medium text-foreground text-sm"
                    style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    {t('يومياً 7ص - 6م (عدا الجمعة)', 'Daily 7AM-6PM (Except Friday)')}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="relative border-t border-border/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p 
              className="text-muted-foreground text-sm text-center md:text-start"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t(
                `© ${new Date().getFullYear()} الخطيب للحدادة العامة. جميع الحقوق محفوظة.`,
                `© ${new Date().getFullYear()} Al-Khatib Blacksmithing. All rights reserved.`
              )}
            </p>
            
            {/* Signature Link */}
            <motion.a
              href="https://alkhatib-marketing.great-site.net/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-muted/50 to-muted/30 hover:from-fire-gradient hover:to-fire-gradient border border-primary/30 hover:border-primary transition-all duration-500 hover:shadow-fire-glow overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-fire-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Sparkles className="relative h-4 w-4 text-primary group-hover:text-forge-dark transition-colors animate-pulse" />
              <span 
                className="relative text-sm font-bold text-foreground group-hover:text-forge-dark transition-colors"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              >
                {t('مُطور بواسطة الخطيب للبرمجيات', 'Developed by Al-Khatib Software')}
              </span>
              <ArrowUpRight className="relative h-4 w-4 text-primary group-hover:text-forge-dark transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};
