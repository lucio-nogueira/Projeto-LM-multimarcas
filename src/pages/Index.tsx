import { useState } from "react";
import { CatalogHeader } from "@/components/CatalogHeader";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetail } from "@/components/ProductDetail";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ResponsiveMenu } from "@/components/ResponsiveMenu";
import { FloatingCartButton } from "@/components/FloatingCartButton";
import { products, Product } from "@/data/products";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const [productList, setProductList] = useState(products);

  const categories = [...new Set(products.map(p => p.category))];
  
  const filteredProducts = selectedCategory === "TODOS" 
    ? productList 
    : productList.filter(p => p.category === selectedCategory);

  const handleViewDetails = (productId: string) => {
    const product = productList.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
    }
  };

  // Catálogo fixo: edição desativada

  const handleBack = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return (
      <>
        <ProductDetail
          product={selectedProduct}
          onBack={handleBack}
        />
        <FloatingCartButton />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <CatalogHeader />
      
      <div className="container mx-auto px-4 py-16">
        <ResponsiveMenu
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <div className={`grid gap-8 ${
          filteredProducts.length < 4 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center max-w-6xl mx-auto' 
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              oldPrice={product.oldPrice}
              category={product.category}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
      
      <FloatingCartButton />
    </div>
  );
};

export default Index;
