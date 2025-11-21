import { useState } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from './ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { ar: 'الرئيسية', en: 'Home', href: '/', isRoute: true },
    { ar: 'الخدمات', en: 'Services', href: '#services', isRoute: false },
    { ar: 'معرض الأعمال', en: 'Portfolio', href: '/portfolio', isRoute: true },
    { ar: 'المدونة', en: 'Blog', href: '/blog', isRoute: true },
    { ar: 'احجز موعد', en: 'Book Now', href: '/booking', isRoute: true },
    { ar: 'تواصل معنا', en: 'Contact', href: '#contact', isRoute: false },
  ];

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home with hash
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If on home page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-fire-glow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Link to Home */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse hover:opacity-90 transition-opacity">
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
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => {
              const isActive = item.isRoute && location.pathname === item.href;
              return item.isRoute ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-fire-gradient after:transition-all after:duration-300 ${
                    isActive ? 'text-primary after:w-full' : 'after:w-0 hover:after:w-full'
                  }`}
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t(item.ar, item.en)}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleSectionNavigation(item.href.replace('#', ''))}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-fire-gradient hover:after:w-full after:transition-all after:duration-300"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t(item.ar, item.en)}
                </button>
              );
            })}
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
            {navItems.map((item) => {
              const isActive = item.isRoute && location.pathname === item.href;
              return item.isRoute ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 hover:bg-muted hover:text-primary rounded-lg transition-all font-medium ${
                    isActive ? 'bg-muted text-primary' : 'text-foreground'
                  }`}
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t(item.ar, item.en)}
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => {
                    setIsOpen(false);
                    setTimeout(() => handleSectionNavigation(item.href.replace('#', '')), 100);
                  }}
                  className="block w-full text-right py-3 px-4 text-foreground hover:bg-muted hover:text-primary rounded-lg transition-all cursor-pointer font-medium"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t(item.ar, item.en)}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};
