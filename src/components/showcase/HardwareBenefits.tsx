import {
  TrendingUp, Clock, ShieldCheck, Eye, Layers, Wifi,
  BarChart3, Lock, Zap, Globe,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increase Equipment OEE by 25%",
    description: "Real-time monitoring of all hardware systems enables targeted improvement across every machine on the floor.",
  },
  {
    icon: Clock,
    title: "Reduce Setup Time by 50%",
    description: "Digital configuration management, saved presets, and automated parameter loading slash changeover times.",
  },
  {
    icon: ShieldCheck,
    title: "Emergency Stop on Every Module",
    description: "One-click emergency stop across all hardware systems with instant machine halt and safety interlock verification.",
  },
  {
    icon: Eye,
    title: "Real-Time Visualization",
    description: "2D toolpath rendering, 3D model preview, live conveyor animation, and camera feeds — all in one platform.",
  },
  {
    icon: Layers,
    title: "Unified Endpoint Management",
    description: "Every hardware module connects through a common endpoint system for configuration, data, and control commands.",
  },
  {
    icon: Wifi,
    title: "Multi-Machine Fleet Control",
    description: "Manage entire fleets of CNC machines, printers, lasers, and robots from a single dashboard with status monitoring.",
  },
  {
    icon: BarChart3,
    title: "Parameter Optimization",
    description: "Material-specific presets, speed optimization, and automated parameter validation prevent errors and waste.",
  },
  {
    icon: Lock,
    title: "Safety-First Architecture",
    description: "Every module includes thermal protection, overload detection, interlock monitoring, and automated safety responses.",
  },
  {
    icon: Zap,
    title: "G-Code & Model Compatible",
    description: "Upload G-code for CNC and laser, STL/OBJ for 3D printers — standard industrial file format support throughout.",
  },
  {
    icon: Globe,
    title: "Multi-Site Deployment",
    description: "Deploy across multiple factory sites with centralized monitoring and site-specific hardware configuration.",
  },
];

const HardwareBenefits = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Why <span className="gradient-text">CORTA-IHP</span>?
          </h2>
          <p className="section-subtitle mx-auto">
            Complete industrial hardware control from a single unified platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="benefit-card group hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-4">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-sm">{benefit.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareBenefits;
