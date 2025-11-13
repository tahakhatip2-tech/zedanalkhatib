import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import arabicGate from '@/assets/arabic-gate.jpg';
import modernMetal from '@/assets/modern-metal.jpg';
import laserWork from '@/assets/laser-work.jpg';
import metalArt from '@/assets/metal-art.jpg';

export const ProjectsSection = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, image: arabicGate, category: 'arabic', titleAr: 'بوابة عربية فاخرة', titleEn: 'Luxury Arabic Gate' },
    { id: 2, image: modernMetal, category: 'modern', titleAr: 'درابزين حديث', titleEn: 'Modern Railing' },
    { id: 3, image: laserWork, category: 'laser', titleAr: 'نقش بالليزر', titleEn: 'Laser Engraving' },
    { id: 4, image: metalArt, category: 'art', titleAr: 'منحوتة معدنية', titleEn: 'Metal Sculpture' },
  ];

  const categories = [
    { id: 'all', ar: 'الكل', en: 'All' },
    { id: 'arabic', ar: 'عربي', en: 'Arabic' },
    { id: 'modern', ar: 'حديث', en: 'Modern' },
    { id: 'laser', ar: 'ليزر', en: 'Laser' },
    { id: 'art', ar: 'فني', en: 'Art' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-fire-gradient mb-4"
            style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t('مشاريعنا', 'Our Projects')}
          </h2>
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t('تصفح مجموعة من أعمالنا الفنية', 'Browse our collection of artistic works')}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? 'default' : 'outline'}
                onClick={() => setFilter(cat.id)}
                className={filter === cat.id ? 'bg-fire-gradient text-forge-dark font-bold' : ''}
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              >
                {t(cat.ar, cat.en)}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-fire-glow cursor-pointer animate-slide-up"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={project.image} 
                  alt={t(project.titleAr, project.titleEn)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-forge-dark via-forge-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    {t(project.titleAr, project.titleEn)}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
