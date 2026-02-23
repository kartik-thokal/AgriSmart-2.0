// Add these imports if you want to use the images directly in the data
import SoyabeanImg from '../assets/images/soyabean.jpg';
import CottonImg from '../assets/images/cotton.jpg';
import WheatImg from '../assets/images/wheat.jpg';
import SugarcaneImg from '../assets/images/sugarcane.jpg';

export const crops = {
  soybean: {
    name: "Soybean",
    image: SoyabeanImg,
    // QUICK STATS: For the Sidebar Badges
    stats: {
      waterNeed: "Moderate",
      duration: "100-120 Days",
      tempRange: "20°C - 30°C",
      yieldPotential: "20-28 q/ha",
      category: "Oilseed",
      season: "Kharif"
    },
    // TIMELINE SECTIONS: For the Growth Lifecycle
    sections: {
      generalInfo: "Soybean is an important oilseed crop grown widely in India, providing a rich source of protein and oil.",
      climate: "Requires a warm climate. Germination is best at 25°C, while growth thrives between 20°C–30°C.",
      soil: "Well-drained loamy soil with pH 6–7.5. It is sensitive to waterlogging, so drainage is key.",
      varieties: "JS 335 (Most popular), MAUS 71, and JS 93-05 for early maturity.",
      landPreparation: "Field should be deep ploughed once, followed by 2-3 harrowings to reach a fine tilth.",
      sowing: "Sowing time: June–July. Use a spacing of 45 x 5 cm for optimum plant population.",
      seed: "Seed rate: 70-80 kg/ha. Treat seeds with Rhizobium culture for better nitrogen fixation.",
      fertilizer: "Apply 20:60:40 NPK kg/ha. Zinc application is recommended in deficient soils.",
      weedControl: "Critical period for weed-crop competition is the first 45 days. Use Pendimethalin 30% EC.",
      irrigation: "Usually grown as a rainfed crop, but irrigation during pod filling stage can increase yield by 20%.",
      plantProtection: "Monitor for Stem Fly and Girdle Beetle. Use Chlorantraniliprole for effective control.",
      harvesting: "Harvesting should begin when 90% of pods have turned brown or greyish."
    }
  },

  cotton: {
    name: "Cotton",
    image: CottonImg,
    stats: {
      waterNeed: "High",
      duration: "160-180 Days",
      tempRange: "21°C - 30°C",
      yieldPotential: "25-30 q/ha",
      category: "Fiber",
      season: "Kharif"
    },
    sections: {
      generalInfo: "Known as 'White Gold', cotton is the backbone of the Indian textile industry.",
      climate: "Requires at least 180-200 frost-free days and plenty of sunshine during boll formation.",
      soil: "Deep black clayey soils (Regur) are best due to high water-retention capacity.",
      varieties: "Bt Cotton hybrids (RCH 2, Bunny) are widely used for bollworm resistance.",
      landPreparation: "Deep ploughing every 3 years to break hard pan; annual harrowing for seedbed.",
      sowing: "Sowing: April–May (North India) or June–July (Central/South). Spacing: 90 x 60 cm.",
      seed: "Seed rate: 1.5–2 kg/acre for hybrids. Delinting seeds helps in uniform germination.",
      fertilizer: "High demand crop: 120:60:60 NPK kg/ha. Apply Nitrogen in 3 split doses.",
      weedControl: "Integrated approach: Inter-culture operations at 30, 60, and 90 days after sowing.",
      irrigation: "Critical stages: Square formation, flowering, and boll development.",
      plantProtection: "Focus on Integrated Pest Management (IPM) for Sucking Pests and Pink Bollworm.",
      harvesting: "Pick cotton in intervals as bolls burst. Avoid picking wet or stained cotton."
    }
  },

  wheat: {
    name: "Wheat",
    image: WheatImg,
    stats: {
      waterNeed: "Moderate",
      duration: "120-140 Days",
      tempRange: "10°C - 25°C",
      yieldPotential: "45-55 q/ha",
      category: "Cereal",
      season: "Rabi"
    },
    sections: {
      generalInfo: "Wheat is the second most important food grain in India, primarily consumed as flour.",
      climate: "Requires a cool, moist growing season followed by a warm, dry ripening period.",
      soil: "Clayey loams are ideal. Soil should be friable for proper root development.",
      varieties: "HD 2967, HD 3086 (Unnat Pusa Baker), and DBW 187 (Karan Vandana).",
      landPreparation: "Requires a well-pulverized but compact seedbed for uniform depth of sowing.",
      sowing: "Ideal window: Nov 1st–15th. Late sowing reduces yield by 1% per day.",
      seed: "Seed rate: 100 kg/ha for timely sowing; 125 kg/ha for late/broadcast sowing.",
      fertilizer: "General recommendation: 120:60:40 NPK kg/ha. Apply P&K at sowing.",
      weedControl: "Phalaris minor (Gulli Danda) is a major weed. Use Clodinafop or Sulfosulfuron.",
      irrigation: "CRI (Crown Root Initiation) at 21 days is the most critical irrigation stage.",
      plantProtection: "Yellow Rust and Karnal Bunt are major threats. Use Propiconazole sprays.",
      harvesting: "Combine harvest when grain moisture drops below 14%."
    }
  },

  sugarcane: {
    name: "Sugarcane",
    image: SugarcaneImg,
    stats: {
      waterNeed: "Very High",
      duration: "10-12 Months",
      tempRange: "21°C - 35°C",
      yieldPotential: "70-90 t/ha",
      category: "Cash Crop",
      season: "Annual"
    },
    sections: {
      generalInfo: "Sugarcane is a long-duration tropical crop used for sugar, jaggery, and ethanol.",
      climate: "Thrives in tropical areas but grows well in subtropics. Humidity is essential for elongation.",
      soil: "Deep, fertile, well-drained soils. Avoid saline or alkaline patches.",
      varieties: "Co 0238 (Wonder variety of North India), Co 86032 (Popular in South).",
      landPreparation: "Disc ploughing followed by cross-harrowing. Furrows should be 90-120cm apart.",
      sowing: "Spring planting (Feb-Mar) is common. Autumn planting (Oct) yields 20% more.",
      seed: "Use top 1/3rd portion of cane for setts as it has higher bud germination.",
      fertilizer: "Heavy feeder: 150:60:60 NPK kg/ha. Green manuring (Dhaincha) is highly beneficial.",
      weedControl: "Mulching with trash (dried leaves) helps suppress weeds and conserve moisture.",
      irrigation: "Requires 20-25 irrigations per cycle. Drip irrigation is highly recommended.",
      plantProtection: "Red Rot is a 'cancer' for sugarcane. Use resistant varieties and treated setts.",
      harvesting: "Harvest based on Brix reading (>18%). Cut at ground level for better ratoon yield."
    }
  }
};