import Insecticide from '../assets/pesticide/Insecticide.jpg'
import Herbicide from '../assets/pesticide/herbicide.jpg'
import Fungicide from '../assets/pesticide/fungicide.jpg'
import Rodenticide from '../assets/pesticide/rodenticide.jpg'
import BioPesticide from '../assets/pesticide/bio.jpg'
import Miticide from '../assets/pesticide/miticide.jpg'
import Termiticide from '../assets/pesticide/termiticide.jpg'
import GrowthRegulator from '../assets/pesticide/plantgrowth.jpg'


const perticideData = [
  {
    id: 1,
    name: "Insecticide",
    price: 850,
    image: Insecticide,
    description:
      "Effective broad-spectrum insecticide formulated to control a wide range of harmful insects and pests affecting crops. It provides quick action and long-lasting protection, ensuring healthier plant growth and reduced crop damage. Suitable for vegetables, cereals, and fruit crops with recommended dosage for safe and efficient application.",

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
    name: "Herbicide",
    price: 950,
    image: Herbicide,
    description:
      "Powerful herbicide designed to control unwanted weeds that compete with crops for nutrients, sunlight, and water. It ensures clean fields, promotes better crop establishment, and improves overall productivity. Ideal for pre-emergence and post-emergence weed management in various agricultural systems.",

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
    name: "Fungicide",
    price: 900,
    image: Fungicide,
    description:
      "High-performance fungicide formulated to prevent and control fungal diseases such as blight, rust, and mildew. It enhances plant immunity, protects leaves and stems, and ensures healthy crop development. Suitable for fruits, vegetables, and field crops under diverse climatic conditions.",

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
    name: "Rodenticide",
    price: 700,
    image: Rodenticide,
    description:
      "Effective rodent control solution designed to protect stored grains and field crops from rat and rodent damage. It ensures long-lasting control and reduces post-harvest losses. Easy to apply and highly effective when used according to recommended agricultural guidelines.",

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
    name: "Bio Pesticide",
    price: 1000,
    image: BioPesticide,
    description:
      "Eco-friendly bio pesticide formulated using natural ingredients and beneficial microorganisms to control pests without harming the environment. It supports sustainable farming practices, enhances crop safety, and reduces chemical residue in produce. Ideal for organic and integrated pest management systems.",

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
    name: "Miticide",
    price: 880,
    image: Miticide,
    description:
      "Specialized miticide developed to control mites that damage crops by feeding on plant tissues. It ensures rapid action, long-lasting protection, and improved plant health. Suitable for horticultural crops, vegetables, and fruit plantations with effective resistance management.",

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
    name: "Termiticide",
    price: 920,
    image: Termiticide,
    description:
      "Advanced termiticide solution designed to protect crops and soil from termite infestation. It creates a protective barrier in the soil, preventing damage to roots and improving overall crop stability. Recommended for use in plantations and field crops vulnerable to termite attacks.",

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
    name: "Plant Growth Regulator",
    price: 1100,
    image: GrowthRegulator,
    description:
      "High-quality plant growth regulator that enhances flowering, fruit setting, and overall crop development. It improves plant structure, reduces premature flower drop, and increases yield potential when applied at recommended growth stages.",

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

export default perticideData;

