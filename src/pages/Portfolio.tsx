import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProjectModal } from '@/components/ProjectModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, Search, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import heroPortfolio from '@/assets/hero-portfolio.jpg';
import arabicGate from '@/assets/arabic-gate.jpg';
import modernMetal from '@/assets/modern-metal.jpg';
import laserWork from '@/assets/laser-work.jpg';
import metalArt from '@/assets/metal-art.jpg';
import metalFurniture from '@/assets/metal-furniture.jpg';

export default function Portfolio() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    { 
      id: 1, 
      images: [arabicGate, metalArt, modernMetal], 
      category: 'arabic', 
      titleAr: 'بوابة عربية فاخرة', 
      titleEn: 'Luxury Arabic Gate',
      descriptionAr: 'بوابة معدنية عربية فاخرة بتصميم تقليدي مع نقوش إسلامية معقدة. تم تنفيذها بأعلى معايير الجودة باستخدام أجود أنواع الحديد مع تطبيق طبقة حماية ضد الصدأ',
      descriptionEn: 'Luxury Arabic metal gate with traditional design and intricate Islamic patterns. Executed to the highest quality standards using the finest types of iron with anti-rust protection',
      year: '2024',
      location: 'عمان',
      rating: 5,
      specifications: {
        ar: ['حديد مجلفن عالي الجودة', 'نقوش إسلامية يدوية', 'طلاء مقاوم للصدأ', 'أبعاد: 4م × 2.5م', 'ضمان 10 سنوات'],
        en: ['High-quality galvanized iron', 'Handmade Islamic engravings', 'Rust-resistant coating', 'Dimensions: 4m × 2.5m', '10-year warranty']
      },
      pricePerMeter: '120-180'
    },
    { 
      id: 2, 
      images: [modernMetal, laserWork, arabicGate], 
      category: 'modern', 
      titleAr: 'درابزين حديث', 
      titleEn: 'Modern Railing',
      descriptionAr: 'درابزين من الفولاذ المقاوم للصدأ بتصميم عصري وأنيق. يتميز بالمتانة العالية والمظهر الجمالي الراقي',
      descriptionEn: 'Modern stainless steel railing with contemporary elegant design. Features high durability and sophisticated aesthetic appearance',
      year: '2024',
      location: 'أبو علندا',
      rating: 5,
      specifications: {
        ar: ['فولاذ مقاوم للصدأ 316', 'تصميم بسيط وعصري', 'لحام غير مرئي', 'طول: 15 متر', 'صيانة منخفضة'],
        en: ['Stainless steel 316', 'Simple modern design', 'Invisible welding', 'Length: 15 meters', 'Low maintenance']
      },
      pricePerMeter: '90-140'
    },
    { 
      id: 3, 
      images: [laserWork, metalArt, modernMetal], 
      category: 'laser', 
      titleAr: 'نقش بالليزر', 
      titleEn: 'Laser Engraving',
      descriptionAr: 'نقش دقيق بالليزر على المعدن بتصاميم هندسية معاصرة. تقنية متقدمة تضمن دقة عالية في التفاصيل',
      descriptionEn: 'Precision laser engraving on metal with contemporary geometric designs. Advanced technology ensures high accuracy in details',
      year: '2024',
      location: 'عمان',
      rating: 4,
      specifications: {
        ar: ['قطع ليزر بدقة 0.1 ملم', 'تصاميم مخصصة', 'معالجة CNC', 'سماكة المعدن: 3-12 ملم', 'تشطيب ناعم'],
        en: ['Laser cutting accuracy 0.1mm', 'Custom designs', 'CNC processing', 'Metal thickness: 3-12mm', 'Smooth finishing']
      },
      pricePerMeter: '150-250'
    },
    { 
      id: 4, 
      images: [metalArt, arabicGate, laserWork], 
      category: 'art', 
      titleAr: 'منحوتة معدنية', 
      titleEn: 'Metal Sculpture',
      descriptionAr: 'عمل فني معدني مستوحى من التراث العربي بلمسة حديثة. قطعة فنية فريدة تجمع بين الأصالة والمعاصرة',
      descriptionEn: 'Artistic metal sculpture inspired by Arabic heritage with modern touch. A unique piece combining authenticity and contemporary style',
      year: '2023',
      location: 'عمان',
      rating: 5,
      specifications: {
        ar: ['عمل يدوي 100%', 'تصميم فريد', 'معالجة حرارية خاصة', 'ارتفاع: 2 متر', 'قطعة واحدة غير متكررة'],
        en: ['100% handmade', 'Unique design', 'Special heat treatment', 'Height: 2 meters', 'One-of-a-kind piece']
      },
      pricePerMeter: 'حسب التصميم'
    },
    { 
      id: 5, 
      images: [metalFurniture, modernMetal, arabicGate], 
      category: 'furniture', 
      titleAr: 'أثاث معدني فاخر', 
      titleEn: 'Luxury Metal Furniture',
      descriptionAr: 'أثاث معدني عربي وأفرنجي بتصميم راقي وتنفيذ متقن. مثالي للمنازل والفلل الفاخرة',
      descriptionEn: 'Arabic and European metal furniture with elegant design and precise execution. Perfect for luxury homes and villas',
      year: '2024',
      location: 'عمان',
      rating: 5,
      specifications: {
        ar: ['حديد مشغول يدوياً', 'تصميمات حسب الطلب', 'طلاء إلكتروستاتيك', 'خيارات ألوان متعددة', 'ضمان 5 سنوات'],
        en: ['Handcrafted iron', 'Custom designs', 'Electrostatic coating', 'Multiple color options', '5-year warranty']
      },
      pricePerMeter: '100-160'
    },
    { 
      id: 6, 
      images: [arabicGate, metalFurniture, laserWork], 
      category: 'arabic', 
      titleAr: 'سور حديدي زخرفي', 
      titleEn: 'Decorative Iron Fence',
      descriptionAr: 'سور حديدي بزخارف عربية تقليدية وتفاصيل دقيقة. يوفر الأمان والجمال في آن واحد',
      descriptionEn: 'Iron fence with traditional Arabic decorations and fine details. Provides both security and beauty',
      year: '2023',
      location: 'أبو علندا',
      rating: 4,
      specifications: {
        ar: ['حديد قوي 16 ملم', 'زخارف عربية أصيلة', 'تركيب متين', 'طول: 50 متر', 'ارتفاع: 2 متر'],
        en: ['Heavy-duty 16mm iron', 'Authentic Arabic decorations', 'Solid installation', 'Length: 50 meters', 'Height: 2 meters']
      },
      pricePerMeter: '80-120'
    },
  ];

  const categories = [
    { id: 'all', ar: 'الكل', en: 'All' },
    { id: 'arabic', ar: 'عربي تقليدي', en: 'Traditional Arabic' },
    { id: 'modern', ar: 'حديث', en: 'Modern' },
    { id: 'laser', ar: 'قطع ليزر', en: 'Laser Cutting' },
    { id: 'art', ar: 'فني', en: 'Artistic' },
    { id: 'furniture', ar: 'أثاث', en: 'Furniture' },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = searchQuery === '' || 
      (language === 'ar' ? project.titleAr : project.titleEn).toLowerCase().includes(searchQuery.toLowerCase()) ||
      (language === 'ar' ? project.descriptionAr : project.descriptionEn).toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToContent = () => {
    document.getElementById('portfolio-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroPortfolio} 
            alt={t('معرض الأعمال', 'Portfolio')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forge-dark/80 via-forge-dark/60 to-background"></div>
        </div>
        
        <div className="absolute top-24 left-0 right-0 px-6 md:px-12 z-20">
          <Breadcrumbs className="bg-background/80 backdrop-blur-sm p-3 rounded-lg w-fit" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-slide-up">
          <h1 
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-fire-gradient mb-6 animate-glow-pulse"
            style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t('معرض الأعمال', 'Our Portfolio')}
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t('استكشف مجموعة من أفضل أعمالنا في الحدادة والأعمال المعدنية', 'Explore our finest collection of blacksmithing and metalwork projects')}
          </p>
          
          <Button
            onClick={scrollToContent}
            size="lg"
            className="bg-fire-gradient hover:opacity-90 text-forge-dark font-bold shadow-fire-glow animate-glow-pulse group"
          >
            {t('تصفح الأعمال', 'Browse Projects')}
            <ChevronDown className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Portfolio Content */}
      <section id="portfolio-content" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Search & Filter */}
          <div className="mb-12 space-y-6 animate-slide-up">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t('ابحث في المشاريع...', 'Search projects...')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 h-12 text-lg border-2 focus:border-primary"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={filter === cat.id ? 'default' : 'outline'}
                  onClick={() => setFilter(cat.id)}
                  className={`transition-all duration-300 ${
                    filter === cat.id 
                      ? 'bg-fire-gradient text-forge-dark font-bold shadow-fire-glow-sm scale-105' 
                      : 'hover:border-primary'
                  }`}
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t(cat.ar, cat.en)}
                </Button>
              ))}
            </div>

            {/* Results Count */}
            <p 
              className="text-center text-muted-foreground"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t(`عرض ${filteredProjects.length} من ${projects.length} مشروع`, `Showing ${filteredProjects.length} of ${projects.length} projects`)}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
                className="group overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-fire-glow cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={project.images[0]} 
                    alt={t(project.titleAr, project.titleEn)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-fire-gradient text-forge-dark px-3 py-1 rounded-full font-bold text-sm">
                    {project.year}
                  </div>
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < project.rating ? 'fill-primary text-primary' : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-3">
                  <h3 
                    className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors"
                    style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    {t(project.titleAr, project.titleEn)}
                  </h3>
                  
                  <p 
                    className="text-muted-foreground line-clamp-2"
                    style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    {t(project.descriptionAr, project.descriptionEn)}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span 
                      className="text-sm text-muted-foreground"
                      style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                    >
                      📍 {project.location}
                    </span>
                    <span 
                      className="text-xs px-3 py-1 rounded-full bg-muted text-foreground font-medium"
                      style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                    >
                      {t(categories.find(c => c.id === project.category)?.ar || '', categories.find(c => c.id === project.category)?.en || '')}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p 
                className="text-2xl text-muted-foreground mb-4"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              >
                {t('لم يتم العثور على مشاريع مطابقة', 'No matching projects found')}
              </p>
              <Button 
                onClick={() => { setFilter('all'); setSearchQuery(''); }}
                variant="outline"
              >
                {t('إعادة تعيين البحث', 'Reset Search')}
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          project={selectedProject}
          allProjects={projects}
          onProjectSelect={(project) => setSelectedProject(project)}
        />
      )}
    </div>
  );
}
