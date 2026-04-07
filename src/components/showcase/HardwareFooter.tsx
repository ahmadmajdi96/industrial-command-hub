import { Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const HardwareFooter = () => {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <img src={logo} alt="CORTA-IHP Logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-2xl tracking-tight">CORTA-IHP</span>
        </div>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Enterprise Industrial Hardware Control for the modern manufacturing facility.
          From CNC machining to robotic assembly — every machine monitored, every parameter controlled.
        </p>
        <div className="flex items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground mb-10 flex-wrap">
          <span>CNC</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Laser</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>3D Printing</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Robotics</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Vision</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Conveyor</span>
        </div>

        <a
          href="https://cortanexai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm group hover:border-primary/40 hover:bg-primary/10 transition-all duration-500 hover-scale"
        >
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">
            Powered by{" "}
            <span className="gradient-text font-semibold tracking-tight group-hover:opacity-90">CortaneX AI</span>
          </span>
        </a>

        <div className="mt-8 text-xs text-muted-foreground/50">
          © 2026 CORTA-IHP. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default HardwareFooter;
