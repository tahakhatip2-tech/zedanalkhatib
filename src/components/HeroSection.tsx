import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-blacksmith.jpg';

export const HeroSection = () => {
  const { language, t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forge-dark/90 via-forge-dark/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="animate-slide-up">
            <h1 
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-fire-gradient mb-6 leading-tight animate-fire-flicker"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t('الخطـيب للحدادة العامة', 'Al-Khatib General Blacksmithing')}
            </h1>
            <p 
              className="text-xl md:text-2xl text-foreground mb-4 font-semibold"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t('إتقان النار والمعادن منذ عقود', 'Mastering Fire and Metal for Decades')}
            </p>
            <p 
              className="text-lg text-muted-foreground mb-8"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t(
                'نجمع بين الحرفية العربية التقليدية والتقنيات الأوروبية الحديثة لإنشاء أعمال فنية معدنية استثنائية',
                'Combining traditional Arabic craftsmanship with modern European techniques to create exceptional metalwork art'
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-fire-gradient hover:shadow-fire-glow text-forge-dark font-bold text-lg px-8 py-6 animate-glow-pulse"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('احجز خدمة', 'Book Service')}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                onClick={() => window.open('tel:0797714706')}
              >
                <Phone className="mr-2 h-5 w-5" />
                {t('اتصل بنا', 'Call Us')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Fire Sparks */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
