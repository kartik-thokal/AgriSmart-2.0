import DripIrrigation from '../assets/irrigation/DripIrrigation.jpg'
import DripPipe from '../assets/irrigation/DripPipe.jpg'
import HDPEPipe from '../assets/irrigation/HDPEPipe.jpg'
import MicroSprinkler from '../assets/irrigation/MicroSprinkler.jpg'
import SubmersiblePump from '../assets/irrigation/SubmersiblePump.jpg'
import TimerController from '../assets/irrigation/TimerController.jpg'
import WaterFilter from '../assets/irrigation/WaterFilter.jpg'
import WaterTank from '../assets/irrigation/WaterTank.jpg'

const irrigationData = [
  {
    id: 1,
    name: "Drip Irrigation Kit",
    price: 12500,
    image: DripIrrigation,
    description: "Complete precision watering system designed to deliver water directly to the root zone. Reduces evaporation and water runoff by up to 60%. Ideal for row crops and orchards.",
    sizes: [
      { label: "0.5 Acre", price: 12500, originalPrice: 15000, discount: 16, bestSeller: false },
      { label: "1.0 Acre", price: 22000, originalPrice: 28000, discount: 21, bestSeller: true },
      { label: "2.0 Acre", price: 42000, originalPrice: 55000, discount: 23, bestSeller: false },
    ]
  },
  {
    id: 2,
    name: "Premium Drip Pipe",
    price: 1800,
    image: DripPipe,
    description: "High-quality lateral piping with pre-installed emitters. UV-resistant material ensures a long life-span even under harsh sunlight and high-pressure conditions.",
    sizes: [
      { label: "100 Meters", price: 1800, originalPrice: 2100, discount: 14, bestSeller: false },
      { label: "300 Meters", price: 5000, originalPrice: 6500, discount: 23, bestSeller: true },
      { label: "500 Meters", price: 8000, originalPrice: 11000, discount: 27, bestSeller: false },
    ]
  },
  {
    id: 3,
    name: "HDPE Mainline Pipes",
    price: 4500,
    image: HDPEPipe,
    description: "Durable HDPE pipes for main water distribution. High impact strength and flexible design make it perfect for rugged agricultural terrains and high-flow requirements.",
    sizes: [
      { label: "20ft x 5 Rolls", price: 4500, originalPrice: 5200, discount: 13, bestSeller: true },
      { label: "20ft x 10 Rolls", price: 8500, originalPrice: 10500, discount: 19, bestSeller: false },
    ]
  },
  {
    id: 4,
    name: "Micro Sprinkler Set",
    price: 1200,
    image: MicroSprinkler,
    description: "Low-volume misting heads designed for nurseries and leafy greens. Provides gentle coverage to prevent soil erosion and delicate seedling damage.",
    sizes: [
      { label: "Pack of 10", price: 1200, originalPrice: 1400, discount: 14, bestSeller: false },
      { label: "Pack of 50", price: 5500, originalPrice: 7000, discount: 21, bestSeller: true },
    ]
  },
  {
    id: 5,
    name: "Submersible Pump",
    price: 18500,
    image: SubmersiblePump,
    description: "Powerful multi-stage pump for deep borewells. Corrosion-resistant stainless steel body with high-efficiency motor for continuous agricultural water supply.",
    sizes: [
      { label: "1.0 HP", price: 18500, originalPrice: 21000, discount: 11, bestSeller: false },
      { label: "3.0 HP", price: 32000, originalPrice: 38000, discount: 15, bestSeller: true },
      { label: "5.0 HP", price: 48000, originalPrice: 58000, discount: 17, bestSeller: false },
    ]
  },
  {
    id: 6,
    name: "Smart Timer Controller",
    price: 3500,
    image: TimerController,
    description: "Automate your irrigation cycles. Features weather-sensing technology and multiple zone controls to ensure your crops get water only when they need it.",
    sizes: [
      { label: "Single Zone", price: 3500, originalPrice: 4500, discount: 22, bestSeller: true },
      { label: "4-Zone Pro", price: 8500, originalPrice: 12000, discount: 29, bestSeller: false },
    ]
  },
  {
    id: 7,
    name: "Disc Water Filter",
    price: 2800,
    image: WaterFilter,
    description: "Essential protection for drip systems. Effectively removes sand, silt, and organic matter to prevent emitter clogging and ensure system longevity.",
    sizes: [
      { label: "25 m³/h Flow", price: 2800, originalPrice: 3500, discount: 20, bestSeller: true },
      { label: "50 m³/h Flow", price: 5200, originalPrice: 6800, discount: 23, bestSeller: false },
    ]
  },
  {
    id: 8,
    name: "Agricultural Water Tank",
    price: 15000,
    image: WaterTank,
    description: "Multi-layered UV-stabilized storage tank. Designed to keep water cool and prevent algae growth. Reinforced ribs for extra structural strength.",
    sizes: [
      { label: "1000 Liters", price: 15000, originalPrice: 18000, discount: 16, bestSeller: true },
      { label: "5000 Liters", price: 65000, originalPrice: 85000, discount: 23, bestSeller: false },
    ]
  },
];

export default irrigationData;