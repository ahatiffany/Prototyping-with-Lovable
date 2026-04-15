import { MapPin, Star, Clock, Baby } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface LocationCardProps {
  name: string;
  address: string;
  distance: string;
  rating: number;
  availableSlots: number;
  image: string;
  amenities: string[];
}

const LocationCard = ({
  name,
  address,
  distance,
  rating,
  availableSlots,
  image,
  amenities,
}: LocationCardProps) => {
  return (
    <div className="group flex gap-4 rounded-2xl bg-card p-3 shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.98]">
      <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-xl">
        <img src={image} alt={name} className="h-full w-full object-cover" />
        <div className="absolute bottom-1 left-1 flex items-center gap-0.5 rounded-full bg-foreground/70 px-1.5 py-0.5 text-[10px] font-medium text-primary-foreground backdrop-blur-sm">
          <Star className="h-2.5 w-2.5 fill-warm text-warm" />
          {rating}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between py-1">
        <div>
          <h3 className="font-display text-base font-semibold text-foreground">{name}</h3>
          <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {distance} · {address}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {amenities.slice(0, 2).map((a) => (
            <Badge key={a} variant="secondary" className="rounded-full px-2 py-0 text-[10px] font-medium">
              {a}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-trust">
            <Baby className="h-3 w-3" />
            Childcare included
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span className="font-medium text-primary">{availableSlots} slots</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
