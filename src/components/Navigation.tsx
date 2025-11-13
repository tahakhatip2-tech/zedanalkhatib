import { useState } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { ar: 'الرئيسية', en: 'Home', href: '/', isRoute: true },
    { ar: 'الخدمات', en: 'Services', href: '#services', isRoute: false },
    { ar: 'المشاريع', en: 'Projects', href: '#projects', isRoute: false },
    { ar: 'المدونة', en: 'Blog', href: '/blog', isRoute: true },
    { ar: 'تواصل معنا', en: 'Contact', href: '#contact', isRoute: false },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-fire-glow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-10 h-10 rounded-full bg-fire-gradient flex items-center justify-center shadow-fire-glow-sm">
              <span className="text-2xl font-bold text-forge-dark">خ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-foreground" style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}>
                {t('الخطيب', 'Al-Khatib')}
              </span>
              <span className="text-xs text-muted-foreground">
                {t('للحدادة العامة', 'Blacksmithing')}
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t(item.ar, item.en)}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t(item.ar, item.en)}
                </a>
              )
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-muted"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="hover:bg-muted"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-1 text-xs font-bold">{language === 'ar' ? 'EN' : 'ع'}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden hover:bg-muted"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t(item.ar, item.en)}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t(item.ar, item.en)}
                </a>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
