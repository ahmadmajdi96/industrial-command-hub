import type { ImpactMetric } from "./ModuleData";

interface HardwareImpactCardProps {
  metrics: ImpactMetric[];
  colorVar: string;
}

const HardwareImpactCard = ({ metrics, colorVar }: HardwareImpactCardProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="data-card text-center group hover:border-primary/30 transition-all duration-300"
        >
          <div
            className="inline-flex p-2 rounded-lg mb-3 mx-auto"
            style={{ background: `hsl(var(${colorVar}) / 0.1)` }}
          >
            <m.icon className="w-5 h-5" style={{ color: `hsl(var(${colorVar}))` }} />
          </div>
          <div
            className="text-2xl font-bold font-mono mb-1"
            style={{ color: `hsl(var(${colorVar}))` }}
          >
            {m.metric}
          </div>
          <div className="text-sm font-semibold text-foreground mb-2">{m.label}</div>
          <p className="text-xs text-muted-foreground leading-relaxed">{m.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HardwareImpactCard;
