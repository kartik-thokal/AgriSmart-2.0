import Basf from '../../assets/icons/basf.png';
import Bayer from '../../assets/icons/bayer.png';
import Cargil from '../../assets/icons/cargil.png';
import Crystal from '../../assets/icons/crystal.png';
import FMC from '../../assets/icons/fmc.png';
import JohnDeer from '../../assets/icons/johndeere.png';
import Sygenta from '../../assets/icons/syngenta.png';
import Tata from '../../assets/icons/tata.png';
import Upl from '../../assets/icons/upl.png';

const brands = [
  { id: 1, name: "BASF", img: Basf },
  { id: 2, name: "Bayer", img: Bayer },
  { id: 3, name: "Cargil", img: Cargil },
  { id: 4, name: "Crystal", img: Crystal },
  { id: 5, name: "FMC", img: FMC },
  { id: 6, name: "John Deere", img: JohnDeer },
  { id: 7, name: "Syngenta", img: Sygenta },
  { id: 8, name: "Tata", img: Tata },
  { id: 9, name: "UPL", img: Upl },
];

const Brands = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Minimalist Subheader */}
        <div className="flex flex-col items-center mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-600 mb-2">
            Our Ecosystem
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white text-center">
            Powering Growth with Global Leaders
          </h2>
          <div className="w-12 h-1 bg-green-600 mt-4 rounded-full" />
        </div>

        {/* Next Level Marquee Container */}
        <div className="relative group">
          {/* Edge Fading Gradients (Gives the "Infinity" look) */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10" />

          {/* Scrolling Wrapper */}
          <div className="flex overflow-hidden group-hover:[&>div]:pause-marquee">
            <div className="flex animate-marquee whitespace-nowrap gap-12 items-center py-4">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group/brand transition-all duration-500"
                >
                  <div className="relative w-32 h-20 flex items-center justify-center filter grayscale opacity-50 dark:opacity-40 group-hover/brand:grayscale-0 group-hover/brand:opacity-100 transition-all duration-500 transform group-hover/brand:scale-110">
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  {/* Subtle Text Reveal */}
                  <span className="mt-2 text-[10px] font-bold text-gray-400 dark:text-gray-600 opacity-0 group-hover/brand:opacity-100 transition-opacity uppercase tracking-widest">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;