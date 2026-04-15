import { Button } from "@/components/ui/button";
import { MapPin, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-cowork.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern hotel co-working space with warm lighting"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
      </div>

      {/* Logo */}
      <div className="absolute right-5 top-6 z-10 text-right">
        <h2 className="font-display text-2xl font-bold text-primary-foreground">MeTime</h2>
        <p className="text-[10px] font-medium tracking-wide text-primary-foreground/70">They play while you work.</p>
      </div>

      {/* Content */}
      <div className="relative px-5 pb-12 pt-20">
        <div className="animate-fade-up space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-trust/20 px-3 py-1 text-sm font-medium text-trust-foreground backdrop-blur-sm">
            <Shield className="h-3.5 w-3.5" />
            Vetted childcare included
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight text-primary-foreground">
            Work in peace.
            <br />
            <span className="text-warm">Kids play safe.</span>
          </h1>
          <p className="max-w-sm text-base leading-relaxed text-primary-foreground/80">
            Book 2–3 hours of hotel co-working space with complimentary childcare by vetted professionals.
          </p>
          <div className="flex gap-3 pt-2">
            <Button variant="hero" size="xl">
              Book a Session
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/50 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 backdrop-blur-sm">
              How It Works
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-3 gap-3">
          {[
            { icon: MapPin, label: "12 locations", sub: "in your area" },
            { icon: Shield, label: "100% vetted", sub: "caregivers" },
            { icon: Clock, label: "2–3 hours", sub: "per session" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-card/80 p-3 text-center backdrop-blur-sm"
            >
              <stat.icon className="mx-auto mb-1 h-5 w-5 text-primary" />
              <p className="text-xs font-semibold text-foreground">{stat.label}</p>
              <p className="text-[10px] text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
