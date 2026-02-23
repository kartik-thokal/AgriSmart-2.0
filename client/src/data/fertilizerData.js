import Urea from "../assets/fertilizer/urea.jpg"
import DAP from "../assets/fertilizer/dap.jpg"
import NPK from "../assets/fertilizer/npk.jpg"
import Potash from "../assets/fertilizer/potas.jpg"
import Compost from "../assets/fertilizer/compost.jpg"
import Vermicompost from "../assets/fertilizer/organic.jpg"
import Zinc from "../assets/fertilizer/zinc.jpg"
import BioFertilizer from "../assets/fertilizer/bio.jpg"

const fertilizerData = [
  {
    id: 1,
    name: "Urea Fertilizer",
    price: 290,
    image: Urea,
    description: "High-nitrogen granules for vigorous leaf growth and rapid vegetative development. Essential for early-stage crop boosting.",
    sizes: [
      { label: "1 Kg", price: 290, originalPrice: 320, discount: 9, bestSeller: false },
      { label: "5 Kg", price: 1350, originalPrice: 1550, discount: 13, bestSeller: true },
      { label: "25 Kg", price: 6200, originalPrice: 7500, discount: 17, bestSeller: false },
    ]
  },
  {
    id: 2,
    name: "DAP Fertilizer",
    price: 1450,
    image: DAP,
    description: "Premium phosphate-rich fertilizer for superior root system establishment and strong stem formation.",
    sizes: [
      { label: "5 Kg", price: 1450, originalPrice: 1600, discount: 9, bestSeller: false },
      { label: "10 Kg", price: 2800, originalPrice: 3200, discount: 12, bestSeller: true },
      { label: "50 Kg", price: 13500, originalPrice: 16000, discount: 15, bestSeller: false },
    ]
  },
  {
    id: 3,
    name: "NPK 19:19:19",
    price: 320,
    image: NPK,
    description: "A balanced NPK formula providing equal parts Nitrogen, Phosphorus, and Potassium for uniform plant health.",
    sizes: [
      { label: "1 Kg", price: 320, originalPrice: 350, discount: 8, bestSeller: true },
      { label: "5 Kg", price: 1500, originalPrice: 1750, discount: 14, bestSeller: false },
    ]
  },
  {
    id: 4,
    name: "Potash Fertilizer",
    price: 450,
    image: Potash,
    description: "Improves fruit quality, sugar content, and crop resistance against drought and fungal diseases.",
    sizes: [
      { label: "1 Kg", price: 450, originalPrice: 500, discount: 10, bestSeller: false },
      { label: "5 Kg", price: 2100, originalPrice: 2500, discount: 16, bestSeller: true },
    ]
  },
  {
    id: 5,
    name: "Organic Compost",
    price: 180,
    image: Compost,
    description: "Fully decomposed organic matter that improves soil aeration, water retention, and microbial activity.",
    sizes: [
      { label: "5 Kg", price: 180, originalPrice: 220, discount: 18, bestSeller: false },
      { label: "20 Kg", price: 650, originalPrice: 850, discount: 23, bestSeller: true },
    ]
  },
  {
    id: 6,
    name: "Vermicompost",
    price: 250,
    image: Vermicompost,
    description: "A super-food for soil, rich in earthworm castings, plant growth hormones, and essential humic acids.",
    sizes: [
      { label: "5 Kg", price: 250, originalPrice: 300, discount: 16, bestSeller: true },
      { label: "20 Kg", price: 900, originalPrice: 1200, discount: 25, bestSeller: false },
    ]
  },
  {
    id: 7,
    name: "Zinc Sulphate",
    price: 380,
    image: Zinc,
    description: "Crucial micro-nutrient to prevent leaf yellowing and support enzyme systems for better photosynthesis.",
    sizes: [
      { label: "1 Kg", price: 380, originalPrice: 420, discount: 9, bestSeller: false },
      { label: "5 Kg", price: 1800, originalPrice: 2100, discount: 14, bestSeller: true },
    ]
  },
  {
    id: 8,
    name: "Liquid Bio-Fertilizer",
    price: 550,
    image: BioFertilizer,
    description: "Contains live beneficial bacteria that convert atmospheric nitrogen into a form easily absorbed by plants.",
    sizes: [
      { label: "500 ml", price: 550, originalPrice: 600, discount: 8, bestSeller: false },
      { label: "1 Liter", price: 950, originalPrice: 1100, discount: 13, bestSeller: true },
    ]
  },
];

export default fertilizerData;