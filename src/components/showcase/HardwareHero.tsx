import heroFactory from "@/assets/hero-factory.jpg";
import logo from "@/assets/logo.png";

const HardwareHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroFactory}
          alt="Modern industrial manufacturing facility"
          className="w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-0">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6 sm:mb-8">
          <span className="pulse-dot bg-accent" />
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">Industrial Hardware Control Platform</span>
        </div>

        <div className="flex justify-center mb-4 sm:mb-6">
          <img src={logo} alt="CORTA-IHP Logo" className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
          <span className="gradient-text">CORTA-IHP</span>
          <br />
          <span className="text-foreground">Hardware Portal</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
          A unified control ecosystem for CNC machines, laser systems, 3D printers, 
          robotic arms, vision systems, and conveyor belts — from the control room to the factory floor.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
          {[
            { value: "6", label: "Hardware Modules" },
            { value: "48+", label: "Control Screens" },
            { value: "Real-Time", label: "Monitoring" },
            { value: "G-Code", label: "Compatible" },
          ].map((stat) => (
            <div key={stat.label} className="data-card text-center backdrop-blur-sm bg-card/60 p-4 sm:p-6">
              <div className="metric-value text-primary text-xl sm:text-3xl">{stat.value}</div>
              <div className="metric-label mt-1 text-[10px] sm:text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HardwareHero;
