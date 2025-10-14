import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MapPin, Clock, Tag, ArrowRight } from "lucide-react";

interface SupermarketCardProps {
  name: string;
  distance: string;
  openUntil: string;
  productsCount: number;
  discount: string;
  address: string;
  featured?: boolean;
}

const SupermarketCard = ({
  name,
  distance,
  openUntil,
  productsCount,
  discount,
  address,
  featured = false,
}: SupermarketCardProps) => {
  const openGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <Card className={`transition-all hover:shadow-lg ${featured ? 'border-primary shadow-md' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-xl mb-1">{name}</CardTitle>
            <CardDescription 
              className="flex items-center gap-1 text-sm cursor-pointer hover:text-primary transition-colors"
              onClick={openGoogleMaps}
            >
              <MapPin className="w-3 h-3" />
              {address}
            </CardDescription>
          </div>
          {featured && (
            <Badge className="bg-accent text-accent-foreground">Destaque</Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-medium">{distance}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-primary" />
            <span>Até {openUntil}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary">
          <Tag className="w-5 h-5 text-primary" />
          <div className="flex-1">
            <div className="text-sm text-muted-foreground">Até {discount} OFF</div>
            <div className="font-semibold text-primary">{productsCount} produtos disponíveis</div>
          </div>
        </div>
        
        <Button className="w-full gap-2 bg-primary hover:bg-primary-light transition-colors">
          Ver ofertas
          <ArrowRight className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default SupermarketCard;
