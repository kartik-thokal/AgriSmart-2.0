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
    name: "Drip Irrigation System",
    price: 25000,
    image: DripIrrigation,
    description:
      "Advanced drip irrigation system designed to deliver water directly to the root zone of plants with maximum efficiency. It minimizes water wastage, reduces weed growth, and ensures optimal moisture levels for healthy crop development. Ideal for orchards, vegetable farms, and commercial agriculture where water conservation and uniform distribution are essential.",
      
      sizes: [
  {
    label: "1 Kg",
    price: 1200,
    originalPrice: 1400,
    discount: 10,
    bestSeller: false,
  },
   {
    label: "3 Kg",
    price: 3500,
    originalPrice: 5000,
    discount: 15,
    bestSeller: false,
  },
  {
    label: "5 Kg",
    price: 5500,
    originalPrice: 7000,
    discount: 20,
    bestSeller: true,
  },
] 
  },
  {
    id: 2,
    name: "Drip Pipe",
    price: 18000,
    image: DripPipe,
    description:
      "Efficient sprinkler irrigation system that distributes water evenly across the field, simulating natural rainfall. It supports uniform crop growth, reduces soil erosion, and is suitable for a wide range of crops including cereals, vegetables, and lawns. Designed for durability and consistent performance in various soil conditions.",

      sizes: [
  {
    label: "1 Kg",
    price: 1200,
    originalPrice: 1400,
    discount: 10,
    bestSeller: false,
  },
   {
    label: "3 Kg",
    price: 3500,
    originalPrice: 5000,
    discount: 15,
    bestSeller: false,
  },
  {
    label: "5 Kg",
    price: 5500,
    originalPrice: 7000,
    discount: 20,
    bestSeller: true,
  },
] 
  },
 
  {
    id: 3,
    name: "HDPE Irrigation Pipes",
    price: 12000,
    image: HDPEPipe,
    description:
      "High-quality HDPE irrigation pipes engineered for strong water flow and long-term durability. Resistant to corrosion, chemicals, and weather conditions, these pipes ensure efficient water transportation with minimal leakage. Suitable for drip and sprinkler irrigation systems in small and large-scale farming operations.",

      sizes: [
  {
    label: "1 Kg",
    price: 1200,
    originalPrice: 1400,
    discount: 10,
    bestSeller: false,
  },
   {
    label: "3 Kg",
    price: 3500,
    originalPrice: 5000,
    discount: 15,
    bestSeller: false,
  },
  {
    label: "5 Kg",
    price: 5500,
    originalPrice: 7000,
    discount: 20,
    bestSeller: true,
  },
] 
  },
  {
    id: 4,
    name: "Micro Sprinkler",
    price: 3500,
    image: MicroSprinkler,
    description:
      "Compact and water-efficient micro sprinkler system ideal for nurseries, gardens, and closely spaced crops. It provides gentle and uniform water distribution, preventing soil compaction and plant damage. Designed to support precise irrigation and improve overall crop health.",

      sizes: [
  {
    label: "1 Kg",
    price: 1200,
    originalPrice: 1400,
    discount: 10,
    bestSeller: false,
  },
   {
    label: "3 Kg",
    price: 3500,
    originalPrice: 5000,
    discount: 15,
    bestSeller: false,
  },
  {
    label: "5 Kg",
    price: 5500,
    originalPrice: 7000,
    discount: 20,
    bestSeller: true,
  },
] 
  },
  {
    id: 5,
    name: "Submersible Pump",
    price: 22000,
    image: SubmersiblePump,
    description:
      "High-performance submersible pump designed for deep well and borewell irrigation needs. It ensures consistent water supply, energy-efficient operation, and reliable performance under demanding agricultural conditions. Suitable for large farms requiring continuous and powerful water flow.",
  },
  {
    id: 6,
    name: "Irrigation Timer Controller",
    price: 8000,
    image: TimerController,
    description:
      "Smart irrigation timer controller that automates watering schedules for improved efficiency and reduced manual effort. It allows precise control over irrigation timing and duration, helping conserve water while maintaining optimal soil moisture levels for better crop productivity.",

      sizes: [
  {
    label: "1 Kg",
    price: 1200,
    originalPrice: 1400,
    discount: 10,
    bestSeller: false,
  },
   {
    label: "3 Kg",
    price: 3500,
    originalPrice: 5000,
    discount: 15,
    bestSeller: false,
  },
  {
    label: "5 Kg",
    price: 5500,
    originalPrice: 7000,
    discount: 20,
    bestSeller: true,
  },
] 
  },
  {
    id: 7,
    name: "Drip Water Filter",
    price: 5000,
    image: WaterFilter,
    description:
      "Flexible rain hose pipe designed to provide uniform water distribution through fine spray holes along its length. Ideal for closely spaced crops and vegetable farming, it ensures even irrigation coverage while reducing water consumption and operational costs.",

      sizes: [
  {
    label: "1 Kg",
    price: 1200,
    originalPrice: 1400,
    discount: 10,
    bestSeller: false,
  },
   {
    label: "3 Kg",
    price: 3500,
    originalPrice: 5000,
    discount: 15,
    bestSeller: false,
  },
  {
    label: "5 Kg",
    price: 5500,
    originalPrice: 7000,
    discount: 20,
    bestSeller: true,
  },
] 
  },
  {
    id: 8,
    name: "Water Storage Tank",
    price: 15000,
    image: WaterTank,
    description:
      "Durable and high-capacity water storage tank designed for agricultural irrigation and water management. Made from strong, weather-resistant materials, it ensures safe water storage and reliable supply for drip and sprinkler systems, supporting efficient farm operations.",

      sizes: [
  {
    label: "1 Kg",
    price: 1200,
    originalPrice: 1400,
    discount: 10,
    bestSeller: false,
  },
   {
    label: "3 Kg",
    price: 3500,
    originalPrice: 5000,
    discount: 15,
    bestSeller: false,
  },
  {
    label: "5 Kg",
    price: 5500,
    originalPrice: 7000,
    discount: 20,
    bestSeller: true,
  },
] 
  },
];

export default irrigationData;