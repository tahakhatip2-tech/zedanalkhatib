import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactSection = () => {
  const { language, t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-fire-gradient mb-4"
            style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t('تواصل معنا', 'Contact Us')}
          </h2>
          <p 
            className="text-lg text-muted-foreground"
            style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t('نحن هنا لمساعدتك في تحقيق رؤيتك', "We're here to help bring your vision to life")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-fire-gradient">
                <MapPin className="h-6 w-6 text-forge-dark" />
              </div>
              <div>
                <h3 
                  className="font-bold text-lg mb-1"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('العنوان', 'Address')}
                </h3>
                <p 
                  className="text-muted-foreground"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('الأردن - عمان - أبو علندا', 'Jordan - Amman - Abu Alanda')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-fire-gradient">
                <Phone className="h-6 w-6 text-forge-dark" />
              </div>
              <div>
                <h3 
                  className="font-bold text-lg mb-1"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('الهاتف', 'Phone')}
                </h3>
                <a href="tel:0797714706" className="text-primary hover:underline" dir="ltr">
                  0797714706
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-fire-gradient">
                <Clock className="h-6 w-6 text-forge-dark" />
              </div>
              <div>
                <h3 
                  className="font-bold text-lg mb-1"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('ساعات العمل', 'Business Hours')}
                </h3>
                <p 
                  className="text-muted-foreground"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('يومياً من 7:00 صباحاً - 6:00 مساءً', 'Daily: 7:00 AM - 6:00 PM')}
                </p>
                <p 
                  className="text-muted-foreground text-sm"
                  style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
                >
                  {t('مغلق يوم الجمعة', 'Closed on Fridays')}
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border-2 border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54246.92604857944!2d35.86840899999999!3d32.036108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1c83c398f8d%3A0xc5d9b4c5c5c5c5c5!2sAbu%20Alanda%2C%20Jordan!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input 
                placeholder={t('الاسم', 'Name')}
                className="bg-background"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              />
            </div>
            <div>
              <Input 
                type="tel"
                placeholder={t('رقم الهاتف', 'Phone Number')}
                className="bg-background"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              />
            </div>
            <div>
              <Input 
                type="email"
                placeholder={t('البريد الإلكتروني', 'Email')}
                className="bg-background"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              />
            </div>
            <div>
              <Textarea 
                placeholder={t('الرسالة', 'Message')}
                rows={6}
                className="bg-background resize-none"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              />
            </div>
            <Button 
              type="submit"
              size="lg"
              className="w-full bg-fire-gradient hover:shadow-fire-glow text-forge-dark font-bold"
              style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
            >
              {t('إرسال الرسالة', 'Send Message')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
