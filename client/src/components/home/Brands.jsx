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
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Trusted Brands
        </h2>

        {/* Auto-Scrolling Marquee */}
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee gap-8">
            {/* Repeat brands twice for smooth infinite scroll */}
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl min-w-[120px] cursor-pointer"
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-20 h-20 object-contain mb-3"
                />
                <p className="text-gray-800 dark:text-gray-300 font-medium text-center">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Brands;
  