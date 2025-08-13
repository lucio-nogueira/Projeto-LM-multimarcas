export const CatalogHeader = () => {
  return (
    <div className="bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <div className="inline-block">
            <div className="text-6xl font-bold text-luxury tracking-tight drop-shadow-lg">
              LM - MULTIMARCAS
            </div>
            <div className="h-1 bg-luxury w-full mt-2 shadow-3d"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-foreground">
            Descubra a Elegância dos Relógios Premium
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore nossa coleção exclusiva de relógios premium. 
            Cada peça representa a perfeita união entre design sofisticado e tecnologia avançada.
          </p>
        </div>
      </div>
    </div>
  );
};