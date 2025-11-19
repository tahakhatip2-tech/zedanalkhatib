import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound = () => {
  const location = useLocation();
  const { language, t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 404 Number with Fire Effect */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 
                className="text-9xl md:text-[200px] font-black bg-fire-gradient bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(255,165,0,0.5)]"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              >
                404
              </h1>
              <div className="absolute inset-0 bg-fire-gradient opacity-20 blur-3xl"></div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 
                className="text-3xl md:text-5xl font-bold text-foreground mb-4"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              >
                {t('الصفحة غير موجودة', 'Page Not Found')}
              </h2>
              <p 
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              >
                {t(
                  'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى موقع آخر',
                  'Sorry, the page you are looking for does not exist or has been moved'
                )}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to="/">
                <Button 
                  size="lg"
                  className="bg-fire-gradient hover:opacity-90 text-forge-dark font-bold shadow-fire-glow hover:shadow-fire-glow-md transition-all min-w-[200px]"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  <Home className={`w-5 h-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                  {t('العودة للرئيسية', 'Back to Home')}
                </Button>
              </Link>
              
              <Link to="/blog">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 hover:bg-muted font-bold min-w-[200px]"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  <Search className={`w-5 h-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                  {t('تصفح المدونة', 'Browse Blog')}
                </Button>
              </Link>
            </motion.div>

            {/* Suggested Links */}
            <motion.div
              className="mt-12 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p 
                className="text-sm text-muted-foreground mb-4"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              >
                {t('قد تكون مهتماً بـ:', 'You might be interested in:')}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  to="/portfolio"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('معرض الأعمال', 'Portfolio')}
                </Link>
                <Link 
                  to="/#services"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('خدماتنا', 'Our Services')}
                </Link>
                <Link 
                  to="/#contact"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('تواصل معنا', 'Contact Us')}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
