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
    price: 266,
    image: Urea,
    description:
      "High-quality nitrogen-rich urea fertilizer designed to promote rapid plant growth and improved leaf development. It enhances chlorophyll formation, boosts crop vigor, and increases overall yield potential. Suitable for a wide range of crops and soil types, ensuring balanced nutrient absorption and sustainable productivity.",
  
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
    name: "DAP Fertilizer",
    price: 1350,
    image: DAP,
    description:
      "Di-Ammonium Phosphate (DAP) fertilizer provides essential nitrogen and phosphorus for strong root development and early plant establishment. It improves flowering, fruiting, and overall crop strength. Ideal for cereals, pulses, and vegetable crops, supporting higher productivity and improved soil fertility.",

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
    name: "NPK Fertilizer",
    price: 1200,
    image: NPK,
    description:
      "Balanced NPK fertilizer enriched with Nitrogen (N), Phosphorus (P), and Potassium (K) to ensure complete plant nutrition. It supports root growth, flowering, fruit setting, and resistance against environmental stress. Suitable for all stages of crop growth for maximum yield and quality produce.",

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
    name: "Potash Fertilizer",
    price: 950,
    image: Potash,
    description:
      "Premium potash fertilizer formulated to improve crop resistance to drought, disease, and environmental stress. It enhances water retention, strengthens plant stems, and improves grain and fruit quality. Essential for crops requiring high potassium levels for better productivity.",

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
    name: "Organic Compost",
    price: 600,
    image: Compost,
    description:
      "Eco-friendly organic compost made from natural biodegradable materials to enrich soil fertility and improve soil structure. It enhances microbial activity, increases water-holding capacity, and provides slow-release nutrients for sustainable farming practices and long-term soil health.",

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
    name: "Vermicompost",
    price: 750,
    image: Vermicompost,
    description:
      "Nutrient-rich vermicompost produced through natural earthworm processing, offering balanced macro and micronutrients. It improves soil aeration, root growth, and nutrient uptake while enhancing crop quality and yield. Ideal for organic farming and vegetable cultivation.",

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
    name: "Zinc Sulphate",
    price: 500,
    image: Zinc,
    description:
      "High-purity zinc sulphate fertilizer formulated to correct zinc deficiency in crops. It supports enzyme activity, improves leaf growth, and enhances overall plant metabolism. Suitable for application in various crops to ensure better grain formation and productivity.",

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
    name: "Bio Fertilizer",
    price: 850,
    image: BioFertilizer,
    description:
      "Biological fertilizer enriched with beneficial microorganisms that enhance soil fertility and nutrient availability. It promotes natural nitrogen fixation, improves root development, and supports sustainable agricultural practices for long-term crop productivity.",

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

export default fertilizerData;