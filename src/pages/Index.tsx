import HardwareNavigation from "@/components/showcase/HardwareNavigation";
import HardwareHero from "@/components/showcase/HardwareHero";
import HardwareArchitecture from "@/components/showcase/HardwareArchitecture";
import HardwareModuleShowcase from "@/components/showcase/HardwareModuleShowcase";
import HardwareBenefits from "@/components/showcase/HardwareBenefits";
import HardwareStandards from "@/components/showcase/HardwareStandards";
import HardwareFooter from "@/components/showcase/HardwareFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground scrollbar-thin">
      <HardwareNavigation />
      <HardwareHero />
      <HardwareArchitecture />
      <HardwareModuleShowcase />
      <HardwareBenefits />
      <HardwareStandards />
      <HardwareFooter />
    </div>
  );
};

export default Index;
