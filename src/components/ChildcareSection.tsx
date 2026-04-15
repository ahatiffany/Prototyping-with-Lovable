import { Shield, Award, Heart, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Background-checked",
    description: "Every caregiver passes rigorous multi-step vetting",
  },
  {
    icon: Award,
    title: "CPR certified",
    description: "First-aid & CPR trained for your peace of mind",
  },
  {
    icon: Heart,
    title: "Structured activities",
    description: "Age-appropriate crafts, games & learning sessions",
  },
  {
    icon: Users,
    title: "Small groups",
    description: "Max 4:1 child-to-caregiver ratio guaranteed",
  },
];

const ChildcareSection = () => {
  return (
    <section className="px-5 py-6">
      <div className="rounded-2xl bg-trust/5 p-5">
        <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-trust/15 px-2.5 py-1 text-xs font-semibold text-trust">
          <Shield className="h-3 w-3" />
          Included with every booking
        </div>
        <h2 className="font-display mt-2 text-xl font-semibold text-foreground">
          Safe, engaging childcare
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Professional childcare so you can focus — guilt-free.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {features.map((feat) => (
            <div key={feat.title} className="rounded-xl bg-card p-3 shadow-sm">
              <feat.icon className="mb-2 h-5 w-5 text-trust" />
              <p className="text-sm font-semibold text-foreground">{feat.title}</p>
              <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChildcareSection;
