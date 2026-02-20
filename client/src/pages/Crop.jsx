import { Link } from "react-router-dom";
// img
import Soyabean from '../assets/images/soyabean.jpg'
import Cotton from '../assets/images/cotton.jpg'
import Wheat from '../assets/images/wheat.jpg'
import Sugarcane from '../assets/images/sugarcane.jpg'


const Crops = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-green-600">
        Select a Crop
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      <Link to="/crops/soybean" className="flex flex-col items-center p-6 
    bg-green-50 dark:bg-gray-800 
    text-gray-900 dark:text-gray-200 
    rounded-xl text-center 
    hover:shadow-2xl 
    hover:scale-105 
    hover:bg-green-200 dark:hover:bg-gray-700
    hover:text-green-800 dark:hover:text-green-400
    transition-all duration-300 ease-in-out"
>
  <img 
    src= {Soyabean}
    alt="Soybean" 
    className="w-full h-32 mb-4 object-cover rounded-lg"
  />
  <span className="font-semibold text-lg">Soybean</span>
</Link>

        <Link to="/crops/cotton" className="p-6 
            bg-green-50 dark:bg-gray-800 
            text-gray-900 dark:text-gray-200 
            rounded-xl text-center 
            hover:shadow-2xl 
            hover:scale-105 
            hover:bg-green-200 dark:hover:bg-gray-700
            hover:text-green-800 dark:hover:text-green-400
            transition-all duration-300 ease-in-out"
        >
          <img 
    src= {Cotton}
    alt="Soybean" 
    className="w-full h-32 mb-4 object-cover rounded-lg"
  />
  <span className="font-semibold text-lg">Cotton</span>
        </Link>

        <Link to="/crops/wheat" className="p-6 
            bg-green-50 dark:bg-gray-800 
            text-gray-900 dark:text-gray-200 
            rounded-xl text-center 
            hover:shadow-2xl 
            hover:scale-105 
            hover:bg-green-200 dark:hover:bg-gray-700
            hover:text-green-800 dark:hover:text-green-400
            transition-all duration-300 ease-in-out"
        >
         <img 
    src= {Wheat}
    alt="Soybean" 
    className="w-full h-32 mb-4 object-cover rounded-lg"
  />
  <span className="font-semibold text-lg">Wheat</span>
        </Link>

        <Link to="/crops/sugarcane"className="p-6 
            bg-green-50 dark:bg-gray-800 
            text-gray-900 dark:text-gray-200 
            rounded-xl text-center 
            hover:shadow-2xl 
            hover:scale-105 
            hover:bg-green-200 dark:hover:bg-gray-700
            hover:text-green-800 dark:hover:text-green-400
            transition-all duration-300 ease-in-out"
        >
         <img 
    src= {Sugarcane}
    alt="Soybean" 
    className="w-full h-32 mb-4 object-cover rounded-lg"
  />
  <span className="font-semibold text-lg">Sugarcane</span>
        </Link>

      </div>
    </div>
  );
};

export default Crops;
