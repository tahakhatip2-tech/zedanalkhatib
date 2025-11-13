import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { language, t } = useLanguage();
  const { id } = useParams();

  // Mock blog post data - في التطبيق الحقيقي، سيتم جلب هذه البيانات من API
  const post = {
    id: id,
    titleAr: 'فن الحدادة العربية التقليدية',
    titleEn: 'The Art of Traditional Arabic Blacksmithing',
    date: '2024-01-15',
    author: 'فريق الخطيب',
    authorEn: 'Al-Khatib Team',
    image: '/placeholder.svg',
    category: 'تراث',
    categoryEn: 'Heritage',
    contentAr: `
      <p>الحدادة العربية التقليدية هي فن عريق يمتد لقرون طويلة، حيث كان الحدادون العرب يتقنون صناعة الأبواب الفخمة والأسوار المزخرفة والأدوات المعدنية المختلفة.</p>
      
      <h2>تاريخ الحدادة العربية</h2>
      <p>بدأت الحدادة العربية في العصور القديمة وتطورت عبر العصور الإسلامية، حيث ازدهرت في الأندلس وبلاد الشام ومصر. كان الحدادون يستخدمون تقنيات متقدمة لإنشاء قطع فنية رائعة.</p>
      
      <h2>التقنيات التقليدية</h2>
      <p>تعتمد الحدادة العربية التقليدية على عدة تقنيات أساسية:</p>
      <ul>
        <li>الطرق والتشكيل على السندان</li>
        <li>اللحام التقليدي بالنار</li>
        <li>النقش والزخرفة اليدوية</li>
        <li>المعالجة الحرارية للمعادن</li>
      </ul>
      
      <h2>الحفاظ على التراث</h2>
      <p>في ورشة الخطيب، نحرص على الحفاظ على هذه التقنيات التقليدية مع دمجها بالتكنولوجيا الحديثة، لنقدم لعملائنا أعمالاً تجمع بين الأصالة والجودة العالية.</p>
    `,
    contentEn: `
      <p>Traditional Arabic blacksmithing is an ancient art that spans centuries, where Arab blacksmiths mastered the creation of luxurious gates, ornate fences, and various metal tools.</p>
      
      <h2>History of Arabic Blacksmithing</h2>
      <p>Arabic blacksmithing began in ancient times and evolved through Islamic eras, flourishing in Al-Andalus, the Levant, and Egypt. Blacksmiths used advanced techniques to create magnificent artistic pieces.</p>
      
      <h2>Traditional Techniques</h2>
      <p>Traditional Arabic blacksmithing relies on several fundamental techniques:</p>
      <ul>
        <li>Forging and shaping on the anvil</li>
        <li>Traditional fire welding</li>
        <li>Hand engraving and decoration</li>
        <li>Heat treatment of metals</li>
      </ul>
      
      <h2>Preserving Heritage</h2>
      <p>At Al-Khatib Workshop, we are committed to preserving these traditional techniques while integrating them with modern technology, to provide our customers with works that combine authenticity and high quality.</p>
    `
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Featured Image */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={t(post.titleAr, post.titleEn)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forge-dark via-forge-dark/70 to-forge-dark/30" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-end pb-12">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 text-sm font-bold bg-fire-gradient text-forge-dark rounded-full mb-4">
              {t(post.category, post.categoryEn)}
            </span>
            <h1 
              className="text-4xl md:text-6xl font-black text-white mb-4"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t(post.titleAr, post.titleEn)}
            </h1>
            <div className="flex items-center gap-6 text-gray-200">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {t(post.author, post.authorEn)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog">
              <Button 
                variant="outline" 
                className="mb-8 border-2 hover:bg-fire-gradient hover:text-forge-dark hover:border-transparent font-bold"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              >
                <ArrowLeft className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                {t('العودة للمدونة', 'Back to Blog')}
              </Button>
            </Link>

            <article 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              dangerouslySetInnerHTML={{ __html: t(post.contentAr, post.contentEn) }}
            />

            {/* Call to Action */}
            <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-2 border-border text-center">
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              >
                {t('هل لديك مشروع في ذهنك؟', 'Have a project in mind?')}
              </h3>
              <p 
                className="text-muted-foreground mb-6"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              >
                {t('تواصل معنا اليوم وحول أفكارك إلى واقع', 'Contact us today and turn your ideas into reality')}
              </p>
              <Link to="/#contact">
                <Button 
                  size="lg"
                  className="bg-fire-gradient text-forge-dark hover:opacity-90 font-bold text-lg px-8"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('تواصل معنا', 'Contact Us')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
