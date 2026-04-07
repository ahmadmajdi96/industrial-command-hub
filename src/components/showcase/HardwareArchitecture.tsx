import { Settings, Zap, Printer, Move, Eye, ArrowUpDown, ArrowRight } from "lucide-react";

const systems = [
  { name: "CNC Control", desc: "Multi-axis machining & G-code management", icon: Settings, color: "cnc" },
  { name: "Laser Marking", desc: "Precision laser systems & beam control", icon: Zap, color: "laser" },
  { name: "3D Printing", desc: "Additive manufacturing & model management", icon: Printer, color: "printer3d" },
  { name: "Robotic Arms", desc: "Industrial robotics & motion control", icon: Move, color: "robotic" },
  { name: "Vision Systems", desc: "Image processing & quality inspection", icon: Eye, color: "vision" },
  { name: "Conveyor Belts", desc: "Material handling & flow control", icon: ArrowUpDown, color: "conveyor" },
];

const HardwareArchitecture = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Hardware Control Architecture</h2>
          <p className="section-subtitle mx-auto">
            Six specialized control modules — each with dedicated visualization, parameter management, 
            and real-time monitoring — unified under a single hardware control platform.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((sys) => (
            <div
              key={sys.name}
              className="data-card flex items-start gap-4 group"
            >
              <div
                className="p-3 rounded-lg shrink-0"
                style={{
                  background: `hsl(var(--${sys.color}-color) / 0.1)`,
                  border: `1px solid hsl(var(--${sys.color}-color) / 0.2)`,
                }}
              >
                <sys.icon className="w-6 h-6" style={{ color: `hsl(var(--${sys.color}-color))` }} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{sys.name}</h3>
                <p className="text-sm text-muted-foreground">{sys.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-3 text-muted-foreground/40">
            <div className="h-px w-16 bg-border" />
            <span className="text-xs uppercase tracking-wider">Unified Endpoint Management</span>
            <div className="h-px w-16 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareArchitecture;
