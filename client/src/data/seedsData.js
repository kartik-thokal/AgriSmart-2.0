import Wheat from '../assets/seeds/wheat.png'
import Rice from '../assets/seeds/rice.png'
import Corn from '../assets/seeds/corn.png'
import Soyabean from '../assets/seeds/soyabean.png'
import Cotton from '../assets/seeds/cotton.png'
import Sunflower from '../assets/seeds/sunflower.png'
import Barley from '../assets/seeds/barley.jpg'
import Millet from '../assets/seeds/millet.jpg'
import Jawar from '../assets/seeds/jawar.jpg'
import Mustard from '../assets/seeds/mustard.png'
import MuskMelon from '../assets/seeds/muskmelon.jpg'

const seedsData = [
  {
    id: 1,
    name: "Hybrid Wheat Seeds",
    price: 450,
    image: Wheat,
    brand: "Kartik",
    description: "Climate-resilient hybrid wheat with high gluten strength. Optimized for high-density planting and resistant to yellow rust and powdery mildew.",
    sizes: [
      { label: "5 Kg", price: 450, originalPrice: 500, discount: 10, bestSeller: false },
      { label: "10 Kg", price: 850, originalPrice: 1000, discount: 15, bestSeller: true },
      { label: "40 Kg Bag", price: 3200, originalPrice: 4000, discount: 20, bestSeller: false },
    ]
  },
  {
    id: 2,
    name: "Premium Basmati Rice Seeds",
    price: 950,
    image: Rice,
    description: "Long-grain aromatic paddy seeds. Features excellent tillering ability and high recovery percentage during milling. Suitable for traditional irrigated cycles.",
    sizes: [
      { label: "5 Kg", price: 950, originalPrice: 1100, discount: 13, bestSeller: false },
      { label: "25 Kg Bag", price: 4200, originalPrice: 5000, discount: 16, bestSeller: true },
    ]
  },
  {
    id: 3,
    name: "Sweet Corn Hybrid Seeds",
    price: 650,
    image: Corn,
    description: "Super-sweet variety with uniform golden kernels. High resistance to stem borer and excellent vigor in both Kharif and Rabi seasons.",
    sizes: [
      { label: "1 Kg", price: 650, originalPrice: 750, discount: 13, bestSeller: true },
      { label: "5 Kg", price: 2800, originalPrice: 3500, discount: 20, bestSeller: false },
    ]
  },
  {
    id: 4,
    name: "High-Protein Soybean Seeds",
    price: 800,
    image: Soyabean,
    description: "Black-eyed soybean variety rich in oil and protein. Short-duration crop (90-100 days) with high resistance to pod shattering.",
    sizes: [
      { label: "10 Kg", price: 800, originalPrice: 950, discount: 15, bestSeller: true },
      { label: "30 Kg Bag", price: 2200, originalPrice: 2800, discount: 21, bestSeller: false },
    ]
  },
  {
    id: 5,
    name: "Bt-Cotton Hybrid Seeds",
    price: 1200,
    image: Cotton,
    description: "Advanced bollworm-resistant cotton seeds. Produces high-quality long-staple fiber with high boll retention even under water stress.",
    sizes: [
      { label: "450g Packet", price: 1200, originalPrice: 1400, discount: 14, bestSeller: true },
      { label: "2.25 Kg (5 Packs)", price: 5500, originalPrice: 7000, discount: 21, bestSeller: false },
    ]
  },
  {
    id: 6,
    name: "High-Oil Sunflower Seeds",
    price: 550,
    image: Sunflower,
    description: "Drought-hardy sunflower with large heads and high seed-setting percentage. Provides excellent oil recovery and uniform flowering.",
    sizes: [
      { label: "1 Kg", price: 550, originalPrice: 650, discount: 15, bestSeller: true },
      { label: "5 Kg", price: 2400, originalPrice: 3000, discount: 20, bestSeller: false },
    ]
  },
  {
    id: 7,
    name: "Six-Row Barley Seeds",
    price: 350,
    image: Barley,
    description: "Ideal for malting and livestock feed. Highly adaptable to saline soils and requires less water than traditional wheat varieties.",
    sizes: [
      { label: "5 Kg", price: 350, originalPrice: 400, discount: 12, bestSeller: false },
      { label: "20 Kg Bag", price: 1200, originalPrice: 1600, discount: 25, bestSeller: true },
    ]
  },
  {
    id: 8,
    name: "Pearl Millet (Bajra) Seeds",
    price: 280,
    image: Millet,
    description: "High-iron millet variety. Best for dryland farming, offering high fodder quality and grain yield in low-rainfall regions.",
    sizes: [
      { label: "1.5 Kg", price: 280, originalPrice: 350, discount: 20, bestSeller: true },
      { label: "5 Kg", price: 850, originalPrice: 1100, discount: 22, bestSeller: false },
    ]
  },
  {
    id: 9,
    name: "Drought-Resistant Jawar",
    price: 400,
    image: Jawar,
    description: "Multi-cut fodder and grain sorghum. High sugar content in stalks makes it excellent for livestock feed and silage.",
    sizes: [
      { label: "3 Kg", price: 400, originalPrice: 500, discount: 20, bestSeller: true },
      { label: "10 Kg", price: 1200, originalPrice: 1600, discount: 25, bestSeller: false },
    ]
  },
  {
    id: 11,
    name: "Bold Black Mustard Seeds",
    price: 220,
    image: Mustard,
    description: "Early-maturing mustard with high pungency and oil content. Resistant to aphids and white rust diseases.",
    sizes: [
      { label: "1 Kg", price: 220, originalPrice: 280, discount: 21, bestSeller: true },
      { label: "5 Kg", price: 1000, originalPrice: 1300, discount: 23, bestSeller: false },
    ]
  },
  {
    id: 12,
    name: "Hybrid Musk Melon Seeds",
    price: 750,
    image: MuskMelon,
    description: "F1 Hybrid with high sugar (TSS) content and firm salmon-colored flesh. Excellent shipping quality for long-distance markets.",
    sizes: [
      { label: "50g Packet", price: 750, originalPrice: 900, discount: 16, bestSeller: true },
      { label: "200g Pack", price: 2800, originalPrice: 3500, discount: 20, bestSeller: false },
    ]
  },
];

export default seedsData;