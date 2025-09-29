import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999"; // Substituir pelo número real
  const message = "Olá! Gostaria de saber mais sobre as soluções da TECTG.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110 animate-float"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="text-primary" size={28} />
    </a>
  );
};

export default WhatsAppButton;
