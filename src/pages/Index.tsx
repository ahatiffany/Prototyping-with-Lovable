import HeroSection from "@/components/HeroSection";
import NearbyLocations from "@/components/NearbyLocations";
import QuickBooking from "@/components/QuickBooking";
import ChildcareSection from "@/components/ChildcareSection";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <HeroSection />
      <NearbyLocations />
      <QuickBooking />
      <ChildcareSection />
      <BottomNav />
    </div>
  );
};

export default Index;
