import LocationCard from "./LocationCard";
import { ChevronRight } from "lucide-react";

const locations = [
  {
    name: "Holiday Inn Midtown",
    address: "350 W 39th St",
    distance: "0.3 mi",
    rating: 4.8,
    availableSlots: 5,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=300&fit=crop",
    amenities: ["Wi-Fi", "Coffee Bar"],
  },
  {
    name: "Holiday Inn SoHo",
    address: "138 Lafayette St",
    distance: "0.7 mi",
    rating: 4.6,
    availableSlots: 3,
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=300&h=300&fit=crop",
    amenities: ["Wi-Fi", "Quiet Zone"],
  },
  {
    name: "Holiday Inn FiDi",
    address: "99 Washington St",
    distance: "1.2 mi",
    rating: 4.9,
    availableSlots: 7,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop",
    amenities: ["Wi-Fi", "Lounge"],
  },
];

const NearbyLocations = () => {
  return (
    <section className="px-5 py-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-xl font-semibold text-foreground">Nearby Spaces</h2>
        <button className="flex items-center gap-0.5 text-sm font-medium text-primary">
          See all <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-3">
        {locations.map((loc) => (
          <LocationCard key={loc.name} {...loc} />
        ))}
      </div>
    </section>
  );
};

export default NearbyLocations;
