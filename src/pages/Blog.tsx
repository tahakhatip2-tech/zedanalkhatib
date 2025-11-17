import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import traditionalBlacksmith from '@/assets/blog-traditional-blacksmith.jpg';
import laserCutting from '@/assets/blog-laser-cutting.jpg';
import metalMaintenance from '@/assets/blog-metal-maintenance.jpg';
import fusionDesign from '@/assets/blog-fusion-design.jpg';
import heroBlog from '@/assets/hero-blog.jpg';

const Blog = () => {
  const { language, t } = useLanguage();

  const scrollToContent = () => {
    document.getElementById('blog-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  const blogPosts = [
    {
      id: 1,
      titleAr: 'فن الحدادة العربية التقليدية',
      titleEn: 'The Art of Traditional Arabic Blacksmithing',
      excerptAr: 'تعرف على تاريخ وتقنيات الحدادة العربية التقليدية وكيف نحافظ على هذا الإرث العريق',
      excerptEn: 'Learn about the history and techniques of traditional Arabic blacksmithing and how we preserve this rich heritage',
      date: '2024-01-15',
      author: 'فريق الخطيب',
      authorEn: 'Al-Khatib Team',
      image: traditionalBlacksmith,
      category: 'تراث',
      categoryEn: 'Heritage'
    },
    {
      id: 2,
      titleAr: 'تقنيات القطع بالليزر الحديثة',
      titleEn: 'Modern Laser Cutting Techniques',
      excerptAr: 'استكشف كيف نستخدم أحدث تقنيات القطع بالليزر لإنشاء تصاميم دقيقة ومعقدة',
      excerptEn: 'Explore how we use the latest laser cutting technology to create precise and intricate designs',
      date: '2024-01-10',
      author: 'م. أحمد الخطيب',
      authorEn: 'Eng. Ahmad Al-Khatib',
      image: laserCutting,
      category: 'تقنية',
      categoryEn: 'Technology'
    },
    {
      id: 3,
      titleAr: 'نصائح للعناية بالأبواب المعدنية',
      titleEn: 'Tips for Maintaining Metal Gates',
      excerptAr: 'دليل شامل للحفاظ على أبوابك وأسوارك المعدنية في أفضل حالة',
      excerptEn: 'A comprehensive guide to keeping your metal gates and fences in top condition',
      date: '2024-01-05',
      author: 'فريق الخطيب',
      authorEn: 'Al-Khatib Team',
      image: metalMaintenance,
      category: 'نصائح',
      categoryEn: 'Tips'
    },
    {
      id: 4,
      titleAr: 'الدمج بين الأصالة والحداثة',
      titleEn: 'Blending Authenticity with Modernity',
      excerptAr: 'كيف نجمع بين التصاميم العربية التقليدية والتقنيات الحديثة في أعمالنا',
      excerptEn: 'How we combine traditional Arabic designs with modern techniques in our work',
      date: '2024-01-01',
      author: 'م. أحمد الخطيب',
      authorEn: 'Eng. Ahmad Al-Khatib',
      image: fusionDesign,
      category: 'تصميم',
      categoryEn: 'Design'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Image */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBlog} 
            alt="Blog Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forge-dark/80 via-forge-dark/60 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto">
            <h1 
              className="text-5xl md:text-7xl font-black text-white mb-6 animate-slide-up drop-shadow-[0_0_30px_rgba(255,165,0,0.5)]"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t('مدونة الحداد', 'Blacksmith Blog')}
            </h1>
            <p 
              className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in drop-shadow-lg"
              style={{ 
                fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif',
                animationDelay: '0.2s'
              }}
            >
              {t(
                'اكتشف أسرار الحرفة وأحدث التقنيات في عالم الحدادة والأعمال المعدنية',
                'Discover the secrets of craftsmanship and latest techniques in blacksmithing'
              )}
            </p>
            
            <Button 
              onClick={scrollToContent}
              size="lg"
              className="group bg-fire-gradient hover:shadow-fire-glow transition-all duration-300 animate-scale-in text-forge-dark font-bold"
              style={{ 
                fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif',
                animationDelay: '0.4s'
              }}
            >
              {t('تصفح المقالات', 'Browse Articles')}
              {language === 'ar' ? (
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              )}
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Blog Posts Grid */}
      <section id="blog-content" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-fire-glow animate-fade-in"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={t(post.titleAr, post.titleEn)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forge-dark/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span 
                      className="px-3 py-1 rounded-full text-sm font-bold bg-fire-gradient text-forge-dark"
                      style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                    >
                      {t(post.category, post.categoryEn)}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle 
                    className="text-2xl hover:text-primary transition-colors"
                    style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    <Link to={`/blog/${post.id}`}>
                      {t(post.titleAr, post.titleEn)}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}>
                        {t(post.author, post.authorEn)}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription 
                    className="mb-4 text-base"
                    style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    {t(post.excerptAr, post.excerptEn)}
                  </CardDescription>
                  <Link to={`/blog/${post.id}`}>
                    <Button 
                      variant="outline" 
                      className="w-full group/btn border-primary hover:bg-fire-gradient hover:text-forge-dark hover:border-transparent transition-all"
                      style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                    >
                      {t('اقرأ المزيد', 'Read More')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Blog;
