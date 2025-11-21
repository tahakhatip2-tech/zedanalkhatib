import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarIcon, Clock, Phone, Mail, User, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';
import { toast } from 'sonner';
import heroBooking from '@/assets/hero-contact.jpg';

const Booking = () => {
  const { language, t } = useLanguage();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    time: '',
    message: '',
  });

  const services = [
    { ar: 'حدادة عربية تقليدية', en: 'Traditional Arabic Blacksmithing' },
    { ar: 'أعمال معدنية أوروبية', en: 'European Metalwork' },
    { ar: 'زخرفة ونقش معدني', en: 'Metal Decoration & Engraving' },
    { ar: 'رسم وقطع بالليزر', en: 'Laser Cutting & Drawing' },
    { ar: 'أثاث معدني', en: 'Metal Furniture' },
  ];

  const timeSlots = [
    '7:00 AM - 9:00 AM',
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service || !date || !formData.time) {
      toast.error(t('الرجاء ملء جميع الحقول المطلوبة', 'Please fill in all required fields'));
      return;
    }

    const whatsappMessage = `${t('طلب حجز جديد', 'New Booking Request')}:\n\n` +
      `${t('الاسم', 'Name')}: ${formData.name}\n` +
      `${t('الهاتف', 'Phone')}: ${formData.phone}\n` +
      `${formData.email ? `${t('البريد الإلكتروني', 'Email')}: ${formData.email}\n` : ''}` +
      `${t('الخدمة المطلوبة', 'Service')}: ${formData.service}\n` +
      `${t('التاريخ', 'Date')}: ${format(date, 'PPP', { locale: language === 'ar' ? ar : undefined })}\n` +
      `${t('الوقت', 'Time')}: ${formData.time}\n` +
      `${formData.message ? `${t('ملاحظات', 'Notes')}: ${formData.message}` : ''}`;

    const whatsappUrl = `https://wa.me/962797714706?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success(t('سيتم توجيهك إلى واتساب لإكمال الحجز', 'You will be redirected to WhatsApp to complete the booking'));
  };

  return (
    <div className="min-h-screen bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBooking})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-forge-dark/80 via-forge-dark/70 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Breadcrumbs />
          <h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in"
            style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
          >
            {t('احجز موعد', 'Book an Appointment')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
            {t('احجز موعدك الآن لمناقشة مشروعك', 'Book your appointment now to discuss your project')}
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-2xl shadow-fire-glow-sm border border-border p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                style={{ fontFamily: language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif' }}
              >
                {t('معلومات الحجز', 'Booking Information')}
              </h2>
              <p className="text-muted-foreground">
                {t('املأ النموذج أدناه وسنتواصل معك لتأكيد الموعد', 'Fill out the form below and we will contact you to confirm the appointment')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {t('الاسم الكامل', 'Full Name')} <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t('أدخل اسمك الكامل', 'Enter your full name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {t('رقم الهاتف', 'Phone Number')} <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="07XXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {t('البريد الإلكتروني', 'Email')} {t('(اختياري)', '(Optional)')}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('example@email.com', 'example@email.com')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  {t('الخدمة المطلوبة', 'Required Service')} <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder={t('اختر الخدمة', 'Select Service')} />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service, index) => (
                      <SelectItem key={index} value={t(service.ar, service.en)}>
                        {t(service.ar, service.en)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    {t('التاريخ', 'Date')} <span className="text-destructive">*</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-right font-normal bg-background"
                      >
                        <CalendarIcon className={`${language === 'ar' ? 'ml-2' : 'mr-2'} h-4 w-4`} />
                        {date ? format(date, 'PPP', { locale: language === 'ar' ? ar : undefined }) : <span>{t('اختر التاريخ', 'Pick a date')}</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        locale={language === 'ar' ? ar : undefined}
                        disabled={(date) => date < new Date() || date.getDay() === 5}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {t('الوقت المفضل', 'Preferred Time')} <span className="text-destructive">*</span>
                  </Label>
                  <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder={t('اختر الوقت', 'Select Time')} />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot, index) => (
                        <SelectItem key={index} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  {t('ملاحظات إضافية', 'Additional Notes')} {t('(اختياري)', '(Optional)')}
                </Label>
                <Textarea
                  id="message"
                  placeholder={t('أخبرنا المزيد عن مشروعك...', 'Tell us more about your project...')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              {/* Working Hours Info */}
              <div className="bg-muted/50 border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground text-center">
                  {t('ساعات العمل: يومياً من 7:00 صباحاً - 6:00 مساءً (مغلق يوم الجمعة)', 'Working Hours: Daily 7:00 AM - 6:00 PM (Closed on Friday)')}
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-fire-gradient hover:opacity-90 text-forge-dark font-bold py-6 text-lg shadow-fire-glow-sm hover:shadow-fire-glow transition-all duration-300"
              >
                {t('تأكيد الحجز عبر واتساب', 'Confirm Booking via WhatsApp')}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Booking;
