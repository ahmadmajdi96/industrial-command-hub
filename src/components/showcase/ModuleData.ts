import {
  Settings, Zap, Target, Crosshair, Ruler, BarChart3,
  Wrench, Shield, Eye, Camera, Package, Truck,
  Gauge, Thermometer, Activity, Layers, Timer,
  ArrowUpDown, Move, RotateCcw, Cpu, Wifi,
  TrendingDown, DollarSign, Clock,
  Box, Printer, Scan, Focus, MonitorCheck,
} from "lucide-react";
import type { ElementType } from "react";

import cncDashboard from "@/assets/cnc-dashboard.jpg";
import laserDashboard from "@/assets/laser-dashboard.jpg";
import printer3dDashboard from "@/assets/printer3d-dashboard.jpg";
import roboticArmsDashboard from "@/assets/robotic-arms-dashboard.jpg";
import visionDashboard from "@/assets/vision-dashboard.jpg";
import conveyorDashboard from "@/assets/conveyor-dashboard.jpg";

export interface ModuleFeature {
  icon: ElementType;
  title: string;
  desc: string;
}

export interface ImpactMetric {
  icon: ElementType;
  metric: string;
  label: string;
  description: string;
}

export interface ModuleData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  colorVar: string;
  features: ModuleFeature[];
  screens: string[];
  impact: ImpactMetric[];
}

export const modules: ModuleData[] = [
  {
    id: "cnc",
    title: "CNC Control System",
    subtitle: "Computer Numerical Control",
    description:
      "Real-time CNC machine monitoring, G-code visualization, toolpath optimization, and multi-axis control. Manage feed rates, spindle speeds, material settings, and cutting parameters from a unified 2D visualization interface with heat effect mapping.",
    image: cncDashboard,
    colorVar: "--cnc-color",
    impact: [
      { icon: TrendingDown, metric: "↓ 40%", label: "Machining Errors", description: "Real-time path visualization and parameter validation catch toolpath issues before they damage workpieces." },
      { icon: DollarSign, metric: "↓ 25%", label: "Material Waste", description: "Optimized cutting parameters and path planning reduce scrap and maximize material utilization." },
      { icon: Target, metric: "↑ 35%", label: "Throughput", description: "Automated feed rate optimization and multi-machine management increase overall machining throughput." },
      { icon: Clock, metric: "↑ 50%", label: "Setup Speed", description: "Digital configuration management and G-code upload eliminate manual setup and reduce changeover times." },
    ],
    features: [
      { icon: Crosshair, title: "2D Path Visualization", desc: "Real-time toolpath rendering on a coordinate grid with point numbering, progress tracking, and interactive zoom/pan controls." },
      { icon: Settings, title: "Cutting Parameters", desc: "Full control over feed rate, spindle speed, plunge depth with real-time adjustment sliders and safety limits." },
      { icon: Ruler, title: "Material Management", desc: "Configure material type, dimensions (width × height), and surface properties. Supports aluminum, steel, wood, and composites." },
      { icon: Zap, title: "G-Code Management", desc: "Upload, download, and send G-code files directly to machines. Built-in toolpath name saving and configuration management." },
      { icon: Thermometer, title: "Heat Effect Mapping", desc: "Toggle thermal impact zone visualization around laser marks to predict and prevent material stress." },
      { icon: Shield, title: "Emergency Controls", desc: "One-click emergency stop with instant machine halt, status monitoring, and safety interlock verification." },
    ],
    screens: [
      "Machine Dashboard", "2D Visualization", "Control Panel", "Material Settings",
      "Cutting Parameters", "G-Code Manager", "Machine Status", "Endpoint Configuration",
    ],
  },
  {
    id: "laser",
    title: "Laser Marking Control",
    subtitle: "Precision Laser Systems",
    description:
      "Monitor and control laser marking operations with precise beam parameter management, pulse control, and multi-pass configurations. Supports CO2, fiber, and UV laser types with real-time power monitoring and material-specific presets.",
    image: laserDashboard,
    colorVar: "--laser-color",
    impact: [
      { icon: TrendingDown, metric: "↓ 60%", label: "Marking Defects", description: "Real-time power monitoring and pulse duration control ensure consistent marking quality across all materials." },
      { icon: DollarSign, metric: "↓ 30%", label: "Operating Costs", description: "Optimized laser parameters reduce energy consumption and extend tube/source lifespan significantly." },
      { icon: Target, metric: "↑ 45%", label: "Marking Speed", description: "Automated parameter presets and multi-pass optimization increase marking throughput without quality loss." },
      { icon: Clock, metric: "↓ 70%", label: "Setup Time", description: "Material-specific presets and saved configurations eliminate manual parameter entry for recurring jobs." },
    ],
    features: [
      { icon: Zap, title: "Laser Power Control", desc: "Precise power percentage adjustment with real-time monitoring. Supports continuous and pulsed modes with frequency tuning." },
      { icon: Focus, title: "Beam Parameters", desc: "Configure beam diameter, Z-offset, pulse duration, and frequency. Spec-validated settings prevent out-of-range operation." },
      { icon: Activity, title: "Temperature Monitoring", desc: "Real-time laser source temperature tracking with automated shutdown on thermal threshold breaches." },
      { icon: Layers, title: "Multi-Pass Control", desc: "Configure number of passes, laser mode (continuous/pulsed), and per-pass parameter adjustments for deep engraving." },
      { icon: Target, title: "Marking Speed Control", desc: "Independent marking speed adjustment from 0 to 5000 mm/min with material-optimized presets." },
      { icon: Shield, title: "Safety Systems", desc: "Emergency stop, laser test at low power, interlock monitoring, and automated safety checks before operation." },
    ],
    screens: [
      "Laser Dashboard", "Marking Visualization", "Control Panel", "Material Settings",
      "Laser Parameters", "Temperature Monitor", "Safety Controls", "Endpoint Configuration",
    ],
  },
  {
    id: "printer3d",
    title: "3D Printer Control",
    subtitle: "Additive Manufacturing",
    description:
      "Complete 3D printing management with STL/OBJ model loading, real-time 3D preview, print parameter optimization, and multi-printer fleet management. Control layer height, temperature, infill density, and print speed from a unified interface.",
    image: printer3dDashboard,
    colorVar: "--printer3d-color",
    impact: [
      { icon: TrendingDown, metric: "↓ 50%", label: "Print Failures", description: "Real-time temperature monitoring and parameter validation prevent mid-print failures and wasted filament." },
      { icon: DollarSign, metric: "↓ 35%", label: "Material Costs", description: "Optimized infill patterns and support generation reduce filament usage while maintaining structural integrity." },
      { icon: Target, metric: "↑ 40%", label: "Print Quality", description: "Automated layer height optimization and temperature profiling produce consistently high-quality parts." },
      { icon: Clock, metric: "↑ 60%", label: "Fleet Efficiency", description: "Multi-printer queue management and automated job scheduling maximize utilization across the printer fleet." },
    ],
    features: [
      { icon: Box, title: "3D Model Viewer", desc: "Interactive 3D preview with rotation, zoom, and pan. Supports GLTF, GLB, FBX, OBJ, and STL formats with position/rotation controls." },
      { icon: Printer, title: "Print Parameters", desc: "Configure filament type (PLA, ABS, PETG, TPU), layer height, print speed, infill density, and temperature settings." },
      { icon: Thermometer, title: "Temperature Control", desc: "Independent nozzle and bed temperature monitoring with real-time graphs and automated PID tuning." },
      { icon: Gauge, title: "Print Progress", desc: "Real-time print progress tracking with estimated completion time, layer count, and filament consumption monitoring." },
      { icon: Package, title: "Model Management", desc: "Upload, position, rotate, and scale models on the build plate. Multi-model printing with collision detection." },
      { icon: Shield, title: "Emergency Controls", desc: "Emergency stop with thermal runaway protection, filament runout detection, and automated pause on anomalies." },
    ],
    screens: [
      "Printer Dashboard", "3D Model Viewer", "Print Parameters", "Temperature Control",
      "Print Queue", "Model Manager", "Machine Status", "Endpoint Configuration",
    ],
  },
  {
    id: "robotic-arms",
    title: "Robotic Arms Control",
    subtitle: "Industrial Robotics",
    description:
      "Control and program industrial robotic arms with real-time 3D visualization, joint-by-joint movement control, sequence programming, and saved configuration management. Supports 4-axis to 7-axis robots from major manufacturers.",
    image: roboticArmsDashboard,
    colorVar: "--robotic-color",
    impact: [
      { icon: TrendingDown, metric: "↓ 55%", label: "Programming Time", description: "Visual sequence builder and saved configurations eliminate manual teach pendant programming." },
      { icon: DollarSign, metric: "↓ 40%", label: "Downtime", description: "Predictive joint monitoring and automated home positioning reduce maintenance-related stoppages." },
      { icon: Target, metric: "↑ 30%", label: "Precision", description: "Real-time joint angle feedback and servo tuning improve repeatability and positioning accuracy." },
      { icon: Clock, metric: "↑ 45%", label: "Cycle Speed", description: "Optimized motion planning and acceleration profiles reduce cycle times without sacrificing accuracy." },
    ],
    features: [
      { icon: Move, title: "3D Arm Visualization", desc: "Real-time 3D rendering of robot arm with joint positions, workspace envelope, and collision boundary visualization." },
      { icon: RotateCcw, title: "Joint Control", desc: "Individual joint angle control with horizontal and vertical sliders. Supports 4 to 7 axis configurations." },
      { icon: Timer, title: "Sequence Programming", desc: "Record, play, and edit motion sequences with position mode and trajectory planning. Clear and replay capabilities." },
      { icon: Gauge, title: "Movement Parameters", desc: "Configure speed percentage and acceleration profiles for precise motion control across all joints." },
      { icon: Settings, title: "Configuration Management", desc: "Save and load robot configurations with named presets. Quick-access to home position and calibration routines." },
      { icon: Shield, title: "Safety Systems", desc: "Emergency stop, workspace boundary limits, collision detection, and automated safe positioning." },
    ],
    screens: [
      "Robot Dashboard", "3D Visualization", "Joint Controls", "Sequence Editor",
      "Movement Parameters", "Configuration Manager", "Machine Status", "Endpoint Configuration",
    ],
  },
  {
    id: "vision",
    title: "Vision System Control",
    subtitle: "Industrial Image Processing",
    description:
      "Industrial image processing and vision analysis with multi-camera management, real-time image filtering, edge detection, inspection tools, and endpoint-based capture/streaming. Support for CCD and CMOS industrial cameras.",
    image: visionDashboard,
    colorVar: "--vision-color",
    impact: [
      { icon: TrendingDown, metric: "↓ 70%", label: "Inspection Time", description: "Automated image processing with edge detection and filters replaces manual visual inspection." },
      { icon: DollarSign, metric: "↓ 45%", label: "Quality Costs", description: "Early defect detection through vision analysis prevents defective parts from reaching downstream processes." },
      { icon: Target, metric: "↑ 95%", label: "Detection Rate", description: "Advanced filtering and thresholding achieve near-perfect defect detection across varying conditions." },
      { icon: Clock, metric: "↓ 80%", label: "Setup Time", description: "Pre-configured camera profiles and saved filter presets eliminate repetitive calibration work." },
    ],
    features: [
      { icon: Camera, title: "Multi-Camera Management", desc: "Add and manage multiple vision systems with individual resolution, type (CCD/CMOS), and IP address configuration." },
      { icon: Eye, title: "Image Processing", desc: "Real-time image filters including brightness, contrast, noise reduction, and edge threshold with live preview." },
      { icon: Scan, title: "Edge Detection", desc: "Configurable edge detection with threshold control for automated defect identification and feature extraction." },
      { icon: MonitorCheck, title: "Inspection Tools", desc: "Split view comparison between original and processed images with measurement overlays and annotation tools." },
      { icon: Layers, title: "Image Gallery", desc: "Capture, save, and organize inspection images with metadata tagging and batch processing capabilities." },
      { icon: Wifi, title: "Endpoint Streaming", desc: "Configure capture and stream endpoints for real-time video feeds and automated image acquisition." },
    ],
    screens: [
      "Vision Dashboard", "Image Viewer", "Filter Controls", "Camera Management",
      "Inspection Tools", "Image Gallery", "Endpoint Configuration", "System Settings",
    ],
  },
  {
    id: "conveyor",
    title: "Conveyor Belt Control",
    subtitle: "Material Handling Systems",
    description:
      "Monitor and control conveyor belt operations with real-time visualization, speed control, direction management, motor status monitoring, and load tracking. Supports flat, modular, and incline conveyor types with multi-zone management.",
    image: conveyorDashboard,
    colorVar: "--conveyor-color",
    impact: [
      { icon: TrendingDown, metric: "↓ 35%", label: "Downtime", description: "Predictive motor monitoring and load sensing prevent conveyor jams and belt failures before they occur." },
      { icon: DollarSign, metric: "↓ 20%", label: "Energy Costs", description: "Speed optimization based on load sensing and demand reduces energy consumption during low-throughput periods." },
      { icon: Target, metric: "↑ 25%", label: "Throughput", description: "Automated speed adjustment and multi-zone coordination maximize material flow efficiency." },
      { icon: Clock, metric: "↑ 50%", label: "Response Time", description: "Real-time status monitoring and automated alerts enable rapid response to conveyor issues." },
    ],
    features: [
      { icon: ArrowUpDown, title: "Live Visualization", desc: "Real-time conveyor belt animation with speed, load, temperature, and power consumption overlay indicators." },
      { icon: Gauge, title: "Speed Control", desc: "Target speed adjustment from 0 to max with current speed monitoring. Support for variable frequency drives." },
      { icon: RotateCcw, title: "Direction Control", desc: "Forward, reverse, and stop controls with smooth acceleration/deceleration profiles and direction change interlocks." },
      { icon: Cpu, title: "Motor Status", desc: "Real-time motor power, current, voltage, and temperature monitoring with automated thermal protection." },
      { icon: Package, title: "Load Management", desc: "Current load vs. capacity tracking with overload alerts and automated speed reduction on high load conditions." },
      { icon: Shield, title: "Safety Systems", desc: "Emergency stop, belt slip detection, guard monitoring, and automated shutdown on safety threshold breaches." },
    ],
    screens: [
      "Conveyor Dashboard", "Live View", "Speed Control", "Motor Status",
      "Load Monitoring", "Zone Management", "Safety Systems", "Endpoint Configuration",
    ],
  },
];
