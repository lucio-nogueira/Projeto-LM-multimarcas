import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="hidden md:flex flex-wrap gap-2 justify-center mb-12">
      <Button
        variant={selectedCategory === "TODOS" ? "default" : "outline"}
        onClick={() => onCategoryChange("TODOS")}
        className={selectedCategory === "TODOS" ? "bg-luxury hover:bg-luxury/90 text-luxury-foreground" : "hover:bg-luxury hover:text-luxury-foreground"}
      >
        Todos os Produtos
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={selectedCategory === category ? "bg-luxury hover:bg-luxury/90 text-luxury-foreground" : "hover:bg-luxury hover:text-luxury-foreground"}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};