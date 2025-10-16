import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Store } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  originalPrice: number;
  discountedPrice: number;
  productsCount: number;
  expiryDate: string;
  store: string;
  discount: number;
}

const ProductCard = ({
  name,
  category,
  originalPrice,
  discountedPrice,
  productsCount,
  expiryDate,
  store,
  discount,
}: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-32 bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative">
        <div className="text-4xl opacity-20">🥬</div>
        <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground font-bold">
          -{discount}%
        </Badge>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <Badge variant="outline" className="mb-2 text-xs">{category}</Badge>
          <h3 className="font-semibold text-foreground line-clamp-2">{name}</h3>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Store className="w-3 h-3" />
          <span className="truncate">{store}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Store className="w-3 h-3" />
          <span className="truncate">Estoque: {productsCount}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-3 h-3 text-destructive" />
          <span className="text-muted-foreground">Validade: {expiryDate}</span>
        </div>
        
        <div className="flex items-baseline gap-2 pt-2 border-t border-border">
          <span className="text-2xl font-bold text-primary">
            €{discountedPrice.toFixed(2)}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            €{originalPrice.toFixed(2)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
