import { Button } from "./ui/button";
import { ArrowRight, Leaf, TrendingDown, Users } from "lucide-react";
import heroImage from "@/assets/hero-supermarket.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-accent">
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroImage}
          alt="Produtos frescos em supermercado"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium text-green-600">
              Combatendo o desperdício alimentar
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-green-800">
            Economize e Ajude o Planeta
          </h1>

          <p className="text-lg md:text-xl text-green-700 mb-8 max-w-2xl mx-auto">
            Encontre produtos perto do vencimento com até{" "}
            <span className="font-bold text-accent-foreground text-green-800">
              70% de desconto
            </span>{" "}
            em supermercados próximos. Economize dinheiro e reduza o
            desperdício!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 gap-2 text-lg px-8 text-green-700"
            >
              Ver ofertas próximas
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white hover:bg-white/10 text-lg px-8 text-green-700"
            >
              Como funciona
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <TrendingDown className="w-8 h-8 text-green-700" />
              <div className="text-2xl font-bold text-green-700">70%</div>
              <div className="text-sm text-green-700">Desconto médio</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <Leaf className="w-8 h-8 text-green-700" />
              <div className="text-2xl font-bold text-green-700">50t</div>
              <div className="text-sm text-green-700">Comida salva/mês</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <Users className="w-8 h-8 text-green-700" />
              <div className="text-2xl font-bold text-green-700">15k+</div>
              <div className="text-sm text-green-700">Usuários ativos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
