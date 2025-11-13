import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from './ui/card';
import { Hammer, Sparkles, PenTool, Zap } from 'lucide-react';
import arabicGate from '@/assets/arabic-gate.jpg';
import modernMetal from '@/assets/modern-metal.jpg';
import laserWork from '@/assets/laser-work.jpg';
import metalArt from '@/assets/metal-art.jpg';

export const ServicesSection = () => {
  const { language, t } = useLanguage();

  const services = [
    {
      icon: Hammer,
      titleAr: 'الحدادة العربية التقليدية',
      titleEn: 'Arabic Traditional Blacksmithing',
      descAr: 'بوابات وأسوار وأعمال فنية بالنار على الطراز العربي الأصيل',
      descEn: 'Gates, fences, and artistic firework in authentic Arabic style',
      image: arabicGate,
    },
    {
      icon: Sparkles,
      titleAr: 'الأعمال المعدنية الأوروبية',
      titleEn: 'European Metalwork',
      descAr: 'تصاميم حديثة من الستانلس ستيل والحديد على الطراز الأوروبي',
      descEn: 'Modern designs in stainless steel and iron, European style',
      image: modernMetal,
    },
    {
      icon: Zap,
      titleAr: 'القص والرسم بالليزر',
      titleEn: 'Laser Cutting & Drawing',
      descAr: 'تقنية حديثة لقص المعادن بدقة عالية ونقش التصاميم المعقدة',
      descEn: 'Modern technology for precise metal cutting and intricate designs',
      image: laserWork,
    },
    {
      icon: PenTool,
      titleAr: 'الزخرفة والنقش المعدني',
      titleEn: 'Metal Decoration & Engraving',
      descAr: 'تصاميم زخرفية فنية ونقوش مخصصة على المعادن',
      descEn: 'Artistic ornamental designs and custom engravings on metal',
      image: metalArt,
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 
            className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-fire-gradient mb-4"
            style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t('خدماتنا', 'Our Services')}
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t(
              'نقدم مجموعة شاملة من خدمات الحدادة والأعمال المعدنية الفنية',
              'We offer a comprehensive range of blacksmithing and artistic metalwork services'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-fire-glow cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={t(service.titleAr, service.titleEn)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forge-dark to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <service.icon className="h-8 w-8 text-primary mb-2" />
                </div>
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-2 text-foreground"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t(service.titleAr, service.titleEn)}
                </h3>
                <p 
                  className="text-muted-foreground"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t(service.descAr, service.descEn)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
