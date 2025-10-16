import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SupermarketCard from "@/components/SupermarketCard";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const supermarkets = [
    {
      name: "Continente Bom Dia",
      distance: "850m",
      openUntil: "22h",
      productsCount: 45,
      discount: "20%",
      address: "Avenida de Francelos, 1022 - Vila Nova de Gaia",
      featured: true,
    },
    {
      name: "Continente",
      distance: "1.2km",
      openUntil: "20h",
      productsCount: 32,
      discount: "20%",
      address: "Av. dos Descobrimentos - Vila Nova de Gaia",
    },
    {
      name: "Continente Modelo",
      distance: "2.1km",
      openUntil: "21h",
      productsCount: 28,
      discount: "20%",
      address: "R. Alto das Torres, 891 - Vila Nova de Gaia",
    },
  ];

  const products = [
    {
      name: "Alface Americana Orgânica",
      category: "Hortifruti",
      originalPrice: 8.99,
      discountedPrice: 3.59,
      expiryDate: "Amanhã",
      store: "Gota Salgada Centro",
      discount: 20,
    },
    {
      name: "Iogurte Natural 500g",
      category: "Laticínios",
      originalPrice: 12.9,
      discountedPrice: 6.45,
      expiryDate: "2 dias",
      store: "MacroPreço",
      discount: 20,
    },
    {
      name: "Pão Integral Multigrãos",
      category: "Padaria",
      originalPrice: 9.5,
      discountedPrice: 4.75,
      expiryDate: "Hoje",
      store: "MercaOwner",
      discount: 20,
    },
    {
      name: "Tomate Cereja Bandeja 250g",
      category: "Hortifruti",
      originalPrice: 7.99,
      discountedPrice: 3.19,
      expiryDate: "Amanhã",
      store: "Gota Salgada Centro",
      discount: 20,
    },
    {
      name: "Queijo Minas Frescal 500g",
      category: "Laticínios",
      originalPrice: 18.9,
      discountedPrice: 9.45,
      expiryDate: "3 dias",
      store: "MacroPreço",
      discount: 20,
    },
    {
      name: "Banana Prata Kg",
      category: "Hortifruti",
      originalPrice: 5.99,
      discountedPrice: 2.99,
      expiryDate: "2 dias",
      store: "MercaOwner",
      discount: 20,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      <main className="container py-12 space-y-12">
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Supermercados Participantes
            </h2>
            <p className="text-muted-foreground">
              Mercados próximos com ofertas disponíveis agora
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supermarkets.map((market, index) => (
              <SupermarketCard key={index} {...market} />
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Ofertas em Destaque
            </h2>
            <p className="text-muted-foreground">
              Produtos com validade próxima e preços imperdíveis
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="today">Hoje</TabsTrigger>
              <TabsTrigger value="tomorrow">Amanhã</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="today" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                  .filter((p) => p.expiryDate === "Hoje")
                  .map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="tomorrow" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                  .filter((p) => p.expiryDate === "Amanhã")
                  .map((product, index) => (
                    <ProductCard key={index} {...product} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container py-8 text-center text-muted-foreground">
          <p className="mb-2">
            <span className="font-semibold text-primary">GREEN LOOP</span> -
            Economia sustentável para todos
          </p>
          <p className="text-sm">Juntos contra o desperdício alimentar 🌱</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
