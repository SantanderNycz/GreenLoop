import Logo from "./Logo";
import { Button } from "./ui/button";
import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold text-foreground">GREEN LOOP</h1>
            <p className="text-xs text-muted-foreground">Economia sustentável</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-2">
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">Sua localização</span>
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary-light transition-colors">
            Cadastrar mercado
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
