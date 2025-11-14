import { useLanguage } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import traditionalBlacksmith from '@/assets/blog-traditional-blacksmith.jpg';
import laserCutting from '@/assets/blog-laser-cutting.jpg';
import metalMaintenance from '@/assets/blog-metal-maintenance.jpg';
import fusionDesign from '@/assets/blog-fusion-design.jpg';

const BlogPost = () => {
  const { language, t } = useLanguage();
  const { id } = useParams();

  // Mock blog post data - في التطبيق الحقيقي، سيتم جلب هذه البيانات من API
  const blogPosts: Record<string, any> = {
    '1': {
      id: '1',
      titleAr: 'فن الحدادة العربية التقليدية',
      titleEn: 'The Art of Traditional Arabic Blacksmithing',
      date: '2024-01-15',
      author: 'فريق الخطيب',
      authorEn: 'Al-Khatib Team',
      image: traditionalBlacksmith,
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
    },
    '2': {
      id: '2',
      titleAr: 'تقنيات القطع بالليزر الحديثة',
      titleEn: 'Modern Laser Cutting Techniques',
      date: '2024-01-10',
      author: 'م. أحمد الخطيب',
      authorEn: 'Eng. Ahmad Al-Khatib',
      image: laserCutting,
      category: 'تقنية',
      categoryEn: 'Technology',
      contentAr: `
      <p>تقنية القطع بالليزر أحدثت ثورة في صناعة الأعمال المعدنية، حيث توفر دقة ومرونة لا مثيل لها في التصميم والتنفيذ.</p>
      
      <h2>ما هو القطع بالليزر؟</h2>
      <p>القطع بالليزر هو تقنية حديثة تستخدم شعاع ليزر عالي الطاقة لقطع المواد المعدنية بدقة متناهية، مما يسمح بإنشاء تصاميم معقدة ومفصلة.</p>
      
      <h2>مميزات القطع بالليزر</h2>
      <ul>
        <li>دقة عالية في التفاصيل الدقيقة</li>
        <li>قطع نظيف بدون حواف خشنة</li>
        <li>إمكانية تنفيذ تصاميم معقدة</li>
        <li>سرعة في الإنتاج</li>
      </ul>
      
      <h2>استخداماتنا للقطع بالليزر</h2>
      <p>في ورشة الخطيب، نستخدم أحدث أجهزة القطع بالليزر لإنشاء زخارف عربية تقليدية وتصاميم حديثة على حد سواء، مما يتيح لنا تقديم قطع فنية فريدة لعملائنا.</p>
    `,
      contentEn: `
      <p>Laser cutting technology has revolutionized the metalwork industry, providing unparalleled precision and flexibility in design and execution.</p>
      
      <h2>What is Laser Cutting?</h2>
      <p>Laser cutting is a modern technique that uses a high-energy laser beam to cut metal materials with extreme precision, allowing for the creation of complex and detailed designs.</p>
      
      <h2>Advantages of Laser Cutting</h2>
      <ul>
        <li>High precision in fine details</li>
        <li>Clean cuts without rough edges</li>
        <li>Ability to execute complex designs</li>
        <li>Speed in production</li>
      </ul>
      
      <h2>Our Use of Laser Cutting</h2>
      <p>At Al-Khatib Workshop, we use the latest laser cutting equipment to create both traditional Arabic ornaments and modern designs, enabling us to deliver unique artistic pieces to our customers.</p>
    `
    },
    '3': {
      id: '3',
      titleAr: 'نصائح للعناية بالأبواب المعدنية',
      titleEn: 'Tips for Maintaining Metal Gates',
      date: '2024-01-05',
      author: 'فريق الخطيب',
      authorEn: 'Al-Khatib Team',
      image: metalMaintenance,
      category: 'نصائح',
      categoryEn: 'Tips',
      contentAr: `
      <p>الأبواب والأسوار المعدنية استثمار طويل الأمد، ومع العناية المناسبة، يمكن أن تحتفظ بجمالها ووظيفتها لعقود.</p>
      
      <h2>التنظيف المنتظم</h2>
      <p>نظف الأبواب والأسوار بانتظام باستخدام الماء والصابون اللطيف، وتجنب استخدام المواد الكيميائية القاسية التي قد تضر بالطلاء.</p>
      
      <h2>الحماية من الصدأ</h2>
      <ul>
        <li>فحص دوري للكشف عن علامات الصدأ المبكرة</li>
        <li>إعادة الطلاء عند الحاجة</li>
        <li>استخدام مواد مقاومة للصدأ</li>
      </ul>
      
      <h2>الصيانة الدورية</h2>
      <p>قم بفحص المفصلات والأقفال بشكل دوري، وتأكد من تشحيمها للحفاظ على سلاسة الحركة ومنع الصدأ.</p>
    `,
      contentEn: `
      <p>Metal gates and fences are a long-term investment, and with proper care, they can retain their beauty and functionality for decades.</p>
      
      <h2>Regular Cleaning</h2>
      <p>Clean gates and fences regularly using water and mild soap, and avoid harsh chemicals that may damage the paint.</p>
      
      <h2>Rust Protection</h2>
      <ul>
        <li>Regular inspection to detect early signs of rust</li>
        <li>Repainting when necessary</li>
        <li>Using rust-resistant materials</li>
      </ul>
      
      <h2>Periodic Maintenance</h2>
      <p>Regularly inspect hinges and locks, and make sure to lubricate them to maintain smooth movement and prevent rust.</p>
    `
    },
    '4': {
      id: '4',
      titleAr: 'الدمج بين الأصالة والحداثة',
      titleEn: 'Blending Authenticity with Modernity',
      date: '2024-01-01',
      author: 'م. أحمد الخطيب',
      authorEn: 'Eng. Ahmad Al-Khatib',
      image: fusionDesign,
      category: 'تصميم',
      categoryEn: 'Design',
      contentAr: `
      <p>في ورشة الخطيب، نؤمن بأن التراث والحداثة ليسا متناقضين، بل يمكن أن يتكاملا لإنتاج أعمال فنية استثنائية.</p>
      
      <h2>فلسفتنا في التصميم</h2>
      <p>نجمع بين جمال الزخارف العربية التقليدية وبساطة التصميم الحديث، مما ينتج عنه قطع فريدة تناسب المنازل والمباني العصرية مع الحفاظ على الطابع الأصيل.</p>
      
      <h2>التقنيات المستخدمة</h2>
      <ul>
        <li>الجمع بين الحدادة اليدوية والقطع بالليزر</li>
        <li>استخدام مواد عصرية مع تقنيات تقليدية</li>
        <li>تطوير تصاميم مبتكرة مستوحاة من التراث</li>
      </ul>
      
      <h2>أمثلة من أعمالنا</h2>
      <p>من الأبواب الفخمة التي تجمع بين النقوش العربية والخطوط المعاصرة، إلى الأسوار التي تدمج الأنماط الهندسية الإسلامية مع التصميم المينيمالي، نقدم حلولاً فريدة لكل عميل.</p>
    `,
      contentEn: `
      <p>At Al-Khatib Workshop, we believe that heritage and modernity are not contradictory, but can complement each other to produce exceptional artistic works.</p>
      
      <h2>Our Design Philosophy</h2>
      <p>We combine the beauty of traditional Arabic ornaments with the simplicity of modern design, resulting in unique pieces that suit contemporary homes and buildings while maintaining their authentic character.</p>
      
      <h2>Techniques Used</h2>
      <ul>
        <li>Combining manual blacksmithing with laser cutting</li>
        <li>Using modern materials with traditional techniques</li>
        <li>Developing innovative designs inspired by heritage</li>
      </ul>
      
      <h2>Examples from Our Work</h2>
      <p>From luxurious doors that combine Arabic engravings with contemporary lines, to fences that merge Islamic geometric patterns with minimalist design, we offer unique solutions for each client.</p>
    `
    }
  };

  const post = blogPosts[id || '1'];

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
