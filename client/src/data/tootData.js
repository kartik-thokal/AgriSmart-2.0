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
    price: 550000,
    image: Tractor,
    description:
      "Powerful and fuel-efficient agricultural tractor designed for heavy-duty farming operations. Suitable for ploughing, tilling, hauling, and various field applications, it delivers strong engine performance, durability, and reliable operation across different soil conditions. Built for long working hours with enhanced safety and comfort features.",

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
    name: "Plough",
    price: 25000,
    image: Plough,
    description:
      "High-quality plough designed for effective soil turning and preparation before sowing. It improves soil aeration, enhances nutrient mixing, and helps control weeds. Made from durable materials to withstand tough field conditions and ensure long-term performance.",

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
    name: "Seed Drill",
    price: 45000,
    image: SeedDrill,
    description:
      "Precision seed drill machine engineered for uniform seed placement and proper depth control. It ensures even spacing, reduces seed wastage, and improves germination rates. Ideal for increasing planting efficiency and maximizing crop yield potential.",

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
    name: "Sprayer",
    price: 5000,
    image: Sprayer,
    description:
      "Multipurpose agricultural sprayer suitable for applying pesticides, herbicides, and liquid fertilizers efficiently. Designed for uniform spray distribution, it helps reduce chemical wastage and ensures better crop protection. Lightweight, durable, and easy to operate in various field conditions.",

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
    name: "Harvester",
    price: 750000,
    image: Harvester,
    description:
      "Advanced harvesting machine built for efficient and timely crop harvesting. It reduces labor requirements, minimizes grain loss, and ensures faster field operations. Designed for high performance and durability, making it ideal for large-scale farming operations.",

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
    id: 6,
    name: "Rotavator",
    price: 60000,
    image: Rotavator,
    description:
      "Heavy-duty rotavator used for fine soil preparation and seedbed formation. It breaks clods, mixes crop residues, and improves soil structure for better seed germination. Suitable for different soil types and compatible with various tractor models.",

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
    name: "Water Pump",
    price: 15000,
    image: WaterPump,
    description:
      "High-performance agricultural water pump designed for efficient irrigation and water management. It ensures consistent water flow, supports drip and sprinkler systems, and enhances crop growth by maintaining proper soil moisture levels.",

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
    name: "Cultivator",
    price: 30000,
    image: Cultivator,
    description:
      "Durable cultivator designed for loosening soil, removing weeds, and improving aeration between crop rows. It enhances root development and supports better nutrient absorption. Built for long-lasting use in different agricultural environments.",

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

export default toolData;