import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star, MapPin, Calendar, Ruler, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    id: number;
    images: string[];
    category: string;
    titleAr: string;
    titleEn: string;
    descriptionAr: string;
    descriptionEn: string;
    year: string;
    location: string;
    rating: number;
    specifications: {
      ar: string[];
      en: string[];
    };
    pricePerMeter: string;
  };
}

export const ProjectModal = ({ open, onOpenChange, project }: ProjectModalProps) => {
  const { language, t } = useLanguage();

  const categoryMap: Record<string, { ar: string; en: string }> = {
    arabic: { ar: 'عربي تقليدي', en: 'Traditional Arabic' },
    modern: { ar: 'حديث', en: 'Modern' },
    laser: { ar: 'قطع ليزر', en: 'Laser Cutting' },
    art: { ar: 'فني', en: 'Artistic' },
    furniture: { ar: 'أثاث', en: 'Furniture' },
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating
            ? 'fill-primary text-primary'
            : 'fill-muted text-muted'
        }`}
      />
    ));
  };

  const handleWhatsAppContact = () => {
    const message = `${t('مرحباً، أنا مهتم بمشروع', 'Hello, I am interested in the project')}: ${t(project.titleAr, project.titleEn)}`;
    const whatsappUrl = `https://wa.me/962797714706?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle
            className="text-3xl font-bold text-foreground"
            style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t(project.titleAr, project.titleEn)}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Carousel */}
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${t(project.titleAr, project.titleEn)} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {project.images.length > 1 && (
              <>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </>
            )}
          </Carousel>

          {/* Rating & Category */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(project.rating)}</div>
              <span className="text-sm text-muted-foreground font-medium">
                ({project.rating}/5)
              </span>
            </div>
            <Badge className="bg-fire-gradient text-forge-dark font-bold text-base px-4 py-1">
              {t(categoryMap[project.category]?.ar || '', categoryMap[project.category]?.en || '')}
            </Badge>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h3
              className="text-xl font-bold text-foreground mb-3"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t('الوصف', 'Description')}
            </h3>
            <p
              className="text-muted-foreground leading-relaxed"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t(project.descriptionAr, project.descriptionEn)}
            </p>
          </div>

          <Separator />

          {/* Specifications */}
          <div>
            <h3
              className="text-xl font-bold text-foreground mb-3"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t('المواصفات', 'Specifications')}
            </h3>
            <ul className="space-y-2">
              {(language === 'ar' ? project.specifications.ar : project.specifications.en).map((spec, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted-foreground"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-4">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground mb-1">{t('الموقع', 'Location')}</p>
                <p
                  className="font-medium text-foreground"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {project.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-4">
              <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground mb-1">{t('السنة', 'Year')}</p>
                <p
                  className="font-medium text-foreground"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {project.year}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-4">
              <Ruler className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground mb-1">{t('سعر المتر', 'Price/Meter')}</p>
                <p
                  className="font-medium text-foreground"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {project.pricePerMeter} {t('دينار', 'JOD')}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <Button
            onClick={handleWhatsAppContact}
            className="w-full bg-fire-gradient hover:opacity-90 text-forge-dark font-bold py-6 text-lg shadow-fire-glow-sm hover:shadow-fire-glow transition-all duration-300"
            size="lg"
          >
            <DollarSign className={`h-5 w-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
            {t('استفسر عن السعر', 'Inquire About Price')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
