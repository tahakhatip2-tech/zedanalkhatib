import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '962797714706'; // Jordan country code + number
    const message = encodeURIComponent('مرحباً، أود الاستفسار عن خدماتكم');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-50 rounded-full w-16 h-16 shadow-fire-glow bg-fire-gradient hover:bg-fire-gradient hover:scale-110 transition-transform duration-300 animate-glow-pulse"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-forge-dark" />
    </Button>
  );
};
