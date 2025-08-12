import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingCartButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/message/OV3CQU72XEO5J1", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-luxury hover:bg-luxury/90 text-luxury-foreground shadow-3d hover:shadow-3d-hover transition-all duration-300 hover:scale-110 animate-pulse"
      size="icon"
      aria-label="Comprar no WhatsApp"
    >
      <ShoppingCart className="w-6 h-6 animate-bounce" />
    </Button>
  );
};