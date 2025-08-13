import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  category: string;
  onViewDetails: (id: string) => void;
}

export const ProductCard = ({ id, name, image, price, oldPrice, category, onViewDetails }: ProductCardProps) => {
  const parseBRL = (s: string) => {
    const normalized = s.replace(/[^\d,.-]/g, "").replace(/\./g, "").replace(",", ".");
    const val = parseFloat(normalized);
    return isNaN(val) ? null : val;
  };
  const old = oldPrice ? parseBRL(oldPrice) : null;
  const current = parseBRL(price);
  const discountPct = old && current && old > 0 ? Math.round(((old - current) / old) * 100) : null;
  return (
    <Card className="group overflow-hidden border-border hover:shadow-3d-hover transition-all duration-300 bg-card shadow-3d">
      <div 
        className="relative aspect-square overflow-hidden bg-muted cursor-pointer"
        onClick={() => onViewDetails(id)}
      >
        {discountPct !== null && (
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-2 left-2 z-10">
                  <span className="rounded-full bg-destructive text-destructive-foreground text-xs font-semibold px-2 py-1 shadow-3d-inset">
                    -{discountPct}%
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Desconto de {discountPct}%</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm text-muted-foreground uppercase tracking-wide">{category}</p>
          <h3 className="text-lg font-semibold text-card-foreground mt-1">{name}</h3>
        </div>
        <div className="flex items-center justify-between">
          <div className="price-container">
            {oldPrice && <span className="price-old">{oldPrice}</span>}
            <span className="price-new">{price}</span>
          </div>
            {/* <Button 
            variant="outline" 
            size="sm"
            onClick={() => onViewDetails(id)}
            className="hover:bg-luxury hover:text-luxury-foreground transition-colors shadow-3d-inset text-xs px-2 py-1 h-7 hidden sm:inline-flex"
          >
            <Eye className="w-3 h-3 mr-1" />
            Ver Detalhes
          </Button>  */}
        </div>
      </div>
    </Card>
  );
};