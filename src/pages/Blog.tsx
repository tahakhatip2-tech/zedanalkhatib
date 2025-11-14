import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import traditionalBlacksmith from '@/assets/blog-traditional-blacksmith.jpg';
import laserCutting from '@/assets/blog-laser-cutting.jpg';
import metalMaintenance from '@/assets/blog-metal-maintenance.jpg';
import fusionDesign from '@/assets/blog-fusion-design.jpg';

const Blog = () => {
  const { language, t } = useLanguage();

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
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-forge-dark to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 
            className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-fire-gradient mb-6 animate-fade-in"
            style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t('المدونة', 'Blog')}
          </h1>
          <p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t('اكتشف أحدث الأخبار والنصائح والقصص من عالم الحدادة والأعمال المعدنية', 
               'Discover the latest news, tips, and stories from the world of blacksmithing and metalwork')}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-fire-glow animate-slide-up"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={t(post.titleAr, post.titleEn)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {t(post.author, post.authorEn)}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-bold bg-fire-gradient text-forge-dark rounded-full">
                      {t(post.category, post.categoryEn)}
                    </span>
                  </div>
                  <CardTitle 
                    className="text-2xl font-bold group-hover:text-primary transition-colors"
                    style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    {t(post.titleAr, post.titleEn)}
                  </CardTitle>
                  <CardDescription 
                    className="text-base"
                    style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                  >
                    {t(post.excerptAr, post.excerptEn)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={`/blog/${post.id}`}>
                    <Button 
                      variant="outline" 
                      className="group/btn w-full border-2 hover:bg-fire-gradient hover:text-forge-dark hover:border-transparent font-bold"
                      style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                    >
                      {t('اقرأ المزيد', 'Read More')}
                      <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''} group-hover/btn:translate-x-1 transition-transform`} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
