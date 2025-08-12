import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { products } from "@/data/products";

interface ResponsiveMenuProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

export const ResponsiveMenu = ({ onCategoryChange, selectedCategory }: ResponsiveMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Categorizar produtos por gênero
  const masculineCategories = products
    .filter(p => p.category === "ESPORTIVO" || p.category === "EXECUTIVO" || p.category === "CLÁSSICO")
    .map(p => p.category)
    .filter((value, index, self) => self.indexOf(value) === index);

  const feminineCategories = products
    .filter(p => p.category === "FEMININO" || p.category === "LUXURY" || p.category === "PREMIUM")
    .map(p => p.category)
    .filter((value, index, self) => self.indexOf(value) === index);

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          className="md:hidden mb-4 hover:bg-luxury hover:text-luxury-foreground"
        >
          <Menu className="w-4 h-4 mr-2" />
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <div className="py-6">
          <h2 className="text-xl font-bold mb-6">Categorias</h2>
          
          <div className="space-y-4">
            <Button
              variant={selectedCategory === "TODOS" ? "default" : "ghost"}
              onClick={() => handleCategoryClick("TODOS")}
              className={`w-full justify-start ${
                selectedCategory === "TODOS" 
                  ? "bg-luxury text-luxury-foreground" 
                  : "hover:bg-luxury hover:text-luxury-foreground"
              }`}
            >
              Todos os Produtos
            </Button>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center">
                <ChevronDown className="w-4 h-4 mr-2" />
                Masculino
              </h3>
              <div className="ml-6 space-y-1">
                {masculineCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    onClick={() => handleCategoryClick(category)}
                    className={`w-full justify-start text-sm ${
                      selectedCategory === category 
                        ? "bg-luxury text-luxury-foreground" 
                        : "hover:bg-luxury hover:text-luxury-foreground"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold flex items-center">
                <ChevronDown className="w-4 h-4 mr-2" />
                Feminino
              </h3>
              <div className="ml-6 space-y-1">
                {feminineCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    onClick={() => handleCategoryClick(category)}
                    className={`w-full justify-start text-sm ${
                      selectedCategory === category 
                        ? "bg-luxury text-luxury-foreground" 
                        : "hover:bg-luxury hover:text-luxury-foreground"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};