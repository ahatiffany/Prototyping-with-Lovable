import { Home, Search, CalendarDays, User } from "lucide-react";
import { useState } from "react";

const tabs = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Explore" },
  { icon: CalendarDays, label: "Bookings" },
  { icon: User, label: "Profile" },
];

const BottomNav = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 pb-safe backdrop-blur-lg">
      <div className="mx-auto flex max-w-md items-center justify-around px-2 py-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActive(tab.label)}
            className={`flex flex-col items-center gap-0.5 rounded-xl px-4 py-1.5 transition-colors ${
              active === tab.label
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            <tab.icon className={`h-5 w-5 ${active === tab.label ? "stroke-[2.5]" : ""}`} />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
