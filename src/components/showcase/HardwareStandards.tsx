const standards = [
  { name: "G-Code", desc: "CNC & Laser Control Language" },
  { name: "RS-274", desc: "Numerical Control Standard" },
  { name: "ISO 6983", desc: "NC Programming Standard" },
  { name: "STEP-NC", desc: "Smart CNC Programming" },
  { name: "OPC UA", desc: "Industrial Communication" },
  { name: "MQTT", desc: "IoT Messaging Protocol" },
  { name: "STL/OBJ", desc: "3D Model Formats" },
  { name: "UR Script", desc: "Robot Programming" },
  { name: "GigE Vision", desc: "Camera Interface Standard" },
  { name: "Modbus", desc: "Industrial Communication" },
];

const HardwareStandards = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Industrial Standards & Protocols</h2>
          <p className="section-subtitle mx-auto">
            Built on industry-standard protocols and file formats for seamless integration with existing manufacturing infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {standards.map((std) => (
            <div key={std.name} className="data-card text-center">
              <div className="font-mono font-bold text-primary text-lg mb-1">{std.name}</div>
              <div className="text-xs text-muted-foreground">{std.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HardwareStandards;
