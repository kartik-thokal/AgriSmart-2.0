import Tractor from '../assets/tools/Tractor.jpg'
import Plough from '../assets/tools/Plough.jpg'
import SeedDrill from '../assets/tools/SeedDrill.jpg'
import Sprayer from '../assets/tools/Sprayer.jpg'
import Harvester from '../assets/tools/Harvester.jpg'
import Rotavator from '../assets/tools/Rotavator.jpg'
import WaterPump from '../assets/tools/WaterPump.jpg'
import Cultivator from '../assets/tools/Cultivator.jpg'

const toolData = [
  {
    id: 1,
    name: "Tractor",
    image: Tractor,
    description: "High-torque, fuel-efficient tractors optimized for Punjab's soil conditions. Features advanced telematics for GPS tracking and fuel monitoring.",
    sizes: [
      { label: "45 HP", price: 550000, originalPrice: 600000, discount: 8, bestSeller: false },
      { label: "55 HP", price: 720000, originalPrice: 800000, discount: 10, bestSeller: true },
      { label: "75 HP", price: 1250000, originalPrice: 1400000, discount: 11, bestSeller: false },
    ]
  },
  {
    id: 2,
    name: "Plough",
    image: Plough,
    description: "Heavy-duty carbon steel M.B. ploughs for deep primary tillage and soil inversion.",
    sizes: [
      { label: "2 Bottom", price: 25000, originalPrice: 28000, discount: 10, bestSeller: false },
      { label: "3 Bottom", price: 45000, originalPrice: 50000, discount: 10, bestSeller: true },
    ]
  },
  {
    id: 3,
    name: "Seed Drill",
    image: SeedDrill,
    description: "Automatic seed-cum-fertilizer drill for precision sowing and uniform depth control.",
    sizes: [
      { label: "9 Row", price: 45000, originalPrice: 50000, discount: 10, bestSeller: false },
      { label: "11 Row", price: 55000, originalPrice: 65000, discount: 15, bestSeller: true },
    ]
  },
  {
    id: 4,
    name: "Sprayer",
    image: Sprayer,
    description: "Ergonomic battery-operated and petrol sprayers for efficient crop protection and chemical application.",
    sizes: [
      { label: "16 Liters", price: 2500, originalPrice: 3500, discount: 28, bestSeller: true },
      { label: "20 Liters", price: 4500, originalPrice: 6000, discount: 25, bestSeller: false },
    ]
  },
  {
    id: 5,
    name: "Harvester",
    image: Harvester,
    description: "Multi-crop combine harvesters with advanced grain cleaning systems and low wastage rates.",
    sizes: [
      { label: "Self-Propelled", price: 1850000, originalPrice: 2000000, discount: 7, bestSeller: true },
      { label: "Tractor Mounted", price: 750000, originalPrice: 850000, discount: 11, bestSeller: false },
    ]
  },
  {
    id: 6,
    name: "Rotavator",
    image: Rotavator,
    description: "Rotary tillers with multi-speed gearboxes for perfect seedbed preparation in a single pass.",
    sizes: [
      { label: "5 Feet", price: 60000, originalPrice: 70000, discount: 14, bestSeller: false },
      { label: "7 Feet", price: 95000, originalPrice: 110000, discount: 13, bestSeller: true },
    ]
  },
  {
    id: 7,
    name: "Water Pump",
    image: WaterPump,
    description: "High-suction centrifugal pumps for consistent irrigation. Compatible with solar and diesel power.",
    sizes: [
      { label: "3 HP", price: 15000, originalPrice: 18000, discount: 16, bestSeller: false },
      { label: "5 HP", price: 25000, originalPrice: 30000, discount: 16, bestSeller: true },
      { label: "10 HP", price: 45000, originalPrice: 55000, discount: 18, bestSeller: false },
    ]
  },
  {
    id: 8,
    name: "Cultivator",
    image: Cultivator,
    description: "Spring-loaded tynes for effective secondary tillage and weed control without damaging roots.",
    sizes: [
      { label: "9 Tyne", price: 22000, originalPrice: 25000, discount: 12, bestSeller: true },
      { label: "11 Tyne", price: 30000, originalPrice: 35000, discount: 14, bestSeller: false },
    ]
  }
];

export default toolData;