import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FloatingCartButton } from "@/components/FloatingCartButton";
import { ArrowLeft, ShoppingCart } from "lucide-react";

interface ProductSpec {
  label: string;
  value: string;
}

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  description: string;
  category: string;
  specs: ProductSpec[];
}

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetail = ({ product, onBack }: ProductDetailProps) => {
  const parseBRL = (value: string) => {
    const n = Number(value.replace(/[^0-9,.-]/g, "").replace(/\./g, "").replace(",", "."));
    return isNaN(n) ? 0 : n;
  };

  const getDiscountPercent = (oldP?: string, newP?: string) => {
    const oldVal = oldP ? parseBRL(oldP) : 0;
    const newVal = newP ? parseBRL(newP) : 0;
    if (!oldVal || !newVal) return 0;
    return Math.round((1 - newVal / oldVal) * 100);
  };

  const handleWhatsAppPurchase = () => {
    const percent = getDiscountPercent(product.oldPrice, product.price);
    const specsText = product.specs.map(s => `${s.label}: ${s.value}`).join("\n");
    const message =
      `Olá! Quero comprar este relógio:\n` +
      `• Produto: ${product.name}\n` +
      `• Categoria: ${product.category}\n` +
      `${product.oldPrice ? `• Preço original: ${product.oldPrice}\n` : ""}` +
      `• Preço com desconto: ${product.price}${percent ? ` (${percent}% OFF)` : ""}\n` +
      `• Descrição: ${product.description}\n` +
      `• Especificações:\n${specsText}`;
    const waLink = "https://wa.me/message/OV3CQU72XEO5J1?text=" + encodeURIComponent(message);
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 hover:bg-muted"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Catálogo
          </Button>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wide">
                {product.category}
              </p>
              <h1 className="text-4xl font-bold text-foreground">{product.name}</h1>
            </div>
            <div className="hidden" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden shadow-3d">
              <div className="aspect-square bg-muted p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg shadow-3d-inset"
                />
              </div>
            </Card>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            {/* Price */}
            <Card className="p-6 shadow-3d">
              <h3 className="text-lg font-semibold mb-4">Preço</h3>
              <div className="price-container mb-4">
                {product.oldPrice && <span className="price-old">{product.oldPrice}</span>}
                <span className="price-new">{product.price}</span>
              </div>
              <Button onClick={handleWhatsAppPurchase} className="bg-luxury text-luxury-foreground hover:bg-luxury/90">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Comprar no WhatsApp
              </Button>
            </Card>

            {/* Description */}
            <Card className="p-6 shadow-3d">
              <h3 className="text-lg font-semibold mb-4">Descrição</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </Card>

            {/* Technical Specifications */}
            <Card className="p-6 shadow-3d">
              <h3 className="text-lg font-semibold mb-4">Informações Técnicas</h3>
              <div className="space-y-3">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-border last:border-b-0">
                    <span className="font-medium text-foreground">{spec.label}</span>
                    <span className="text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <FloatingCartButton />
    </div>
  );
};