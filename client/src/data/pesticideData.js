import Insecticide from '../assets/pesticide/Insecticide.jpg'
import Herbicide from '../assets/pesticide/herbicide.jpg'
import Fungicide from '../assets/pesticide/fungicide.jpg'
import Rodenticide from '../assets/pesticide/rodenticide.jpg'
import BioPesticide from '../assets/pesticide/bio.jpg'
import Miticide from '../assets/pesticide/miticide.jpg'
import Termiticide from '../assets/pesticide/termiticide.jpg'
import GrowthRegulator from '../assets/pesticide/plantgrowth.jpg'

const pesticideData = [
  {
    id: 1,
    name: "Broad-Spectrum Insecticide",
    price: 450,
    image: Insecticide,
    description: "Fast-acting formula to eliminate aphids, caterpillars, and beetles. Provides a protective shield for up to 21 days.",
    sizes: [
      { label: "250 ml", price: 450, originalPrice: 550, discount: 18, bestSeller: false },
      { label: "500 ml", price: 850, originalPrice: 1050, discount: 19, bestSeller: true },
      { label: "1 Liter", price: 1600, originalPrice: 2000, discount: 20, bestSeller: false },
    ]
  },
  {
    id: 2,
    name: "Selective Herbicide",
    price: 380,
    image: Herbicide,
    description: "Targets tough weeds while keeping your crops safe. Ideal for pre-emergence and post-emergence weed control.",
    sizes: [
      { label: "500 ml", price: 380, originalPrice: 450, discount: 15, bestSeller: true },
      { label: "1 Liter", price: 720, originalPrice: 900, discount: 20, bestSeller: false },
    ]
  },
  {
    id: 3,
    name: "Systemic Fungicide",
    price: 520,
    image: Fungicide,
    description: "Absorbed by the plant to fight diseases like blight and powdery mildew from the inside out.",
    sizes: [
      { label: "250 ml", price: 520, originalPrice: 600, discount: 13, bestSeller: false },
      { label: "1 Liter", price: 1900, originalPrice: 2400, discount: 21, bestSeller: true },
    ]
  },
  {
    id: 4,
    name: "Grain Guard Rodenticide",
    price: 150,
    image: Rodenticide,
    description: "Highly attractive bait blocks for effective rodent management in storage rooms and field perimeters.",
    sizes: [
      { label: "100g Pack", price: 150, originalPrice: 180, discount: 16, bestSeller: true },
      { label: "1 Kg Bucket", price: 1200, originalPrice: 1500, discount: 20, bestSeller: false },
    ]
  },
  {
    id: 5,
    name: "Neem-Based Bio Pesticide",
    price: 280,
    image: BioPesticide,
    description: "100% organic cold-pressed neem oil. Safe for beneficial insects like bees while repelling over 200 species of pests.",
    sizes: [
      { label: "500 ml", price: 280, originalPrice: 350, discount: 20, bestSeller: true },
      { label: "1 Liter", price: 500, originalPrice: 700, discount: 28, bestSeller: false },
    ]
  },
  {
    id: 6,
    name: "Horticultural Miticide",
    price: 650,
    image: Miticide,
    description: "Specifically engineered to eradicate spider mites and rust mites in greenhouses and fruit orchards.",
    sizes: [
      { label: "250 ml", price: 650, originalPrice: 750, discount: 13, bestSeller: false },
      { label: "500 ml", price: 1150, originalPrice: 1400, discount: 18, bestSeller: true },
    ]
  },
  {
    id: 7,
    name: "Soil Barrier Termiticide",
    price: 900,
    image: Termiticide,
    description: "Creates an undetectable lethal zone in the soil to prevent termite attacks on roots and wooden structures.",
    sizes: [
      { label: "1 Liter", price: 900, originalPrice: 1100, discount: 18, bestSeller: true },
      { label: "5 Liters", price: 4200, originalPrice: 5500, discount: 23, bestSeller: false },
    ]
  },
  {
    id: 8,
    name: "Flower Booster Regulator",
    price: 320,
    image: GrowthRegulator,
    description: "Hormonal stimulant to prevent flower drop and increase fruit size. Best used during the budding stage.",
    sizes: [
      { label: "100 ml", price: 320, originalPrice: 400, discount: 20, bestSeller: true },
      { label: "500 ml", price: 1400, originalPrice: 1800, discount: 22, bestSeller: false },
    ]
  },
];

export default pesticideData;