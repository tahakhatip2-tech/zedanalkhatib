import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-forge-dark text-foreground py-12 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-12 h-12 rounded-full bg-fire-gradient flex items-center justify-center shadow-fire-glow-sm">
                <span className="text-3xl font-bold text-forge-dark">خ</span>
              </div>
              <div>
                <h3 
                  className="font-bold text-xl"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('الخطيب', 'Al-Khatib')}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t('للحدادة العامة', 'Blacksmithing')}
                </p>
              </div>
            </div>
            <p 
              className="text-muted-foreground"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t(
                'خبرة عقود في الحدادة العربية والأوروبية',
                'Decades of experience in Arabic and European blacksmithing'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="font-bold text-lg mb-4"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t('روابط سريعة', 'Quick Links')}
            </h4>
            <ul className="space-y-2">
              {['home', 'services', 'projects', 'contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    {t(
                      link === 'home' ? 'الرئيسية' : 
                      link === 'services' ? 'الخدمات' :
                      link === 'projects' ? 'المشاريع' : 'تواصل معنا',
                      link.charAt(0).toUpperCase() + link.slice(1)
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 
              className="font-bold text-lg mb-4"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t('تواصل معنا', 'Contact')}
            </h4>
            <div className="space-y-3 mb-4">
              <a href="tel:0797714706" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span dir="ltr">0797714706</span>
              </a>
            </div>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted hover:bg-fire-gradient flex items-center justify-center transition-all hover:shadow-fire-glow-sm"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-muted hover:bg-fire-gradient flex items-center justify-center transition-all hover:shadow-fire-glow-sm"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p 
            className="text-muted-foreground text-sm"
            style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t(
              '© 2024 الخطيب للحدادة العامة. جميع الحقوق محفوظة.',
              '© 2024 Al-Khatib Blacksmithing. All rights reserved.'
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};
