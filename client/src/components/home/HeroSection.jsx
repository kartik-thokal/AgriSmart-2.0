import LandingImg from "../../assets/images/landing.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-green-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 px-6 pt-10 pb-20 grid md:grid-cols-2 gap-1 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Smart Farming for a
            <span className="text-green-600"> Better Tomorrow 🌾</span>
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
            Discover high-quality seeds, fertilizers, and smart agricultural
            tools designed to increase your farm productivity.
          </p>

          <div className="mt-8 flex gap-4">

            <Link to="/categories">
              <button className="px-6 py-3 bg-green-600 text-black font-semibold rounded-xl hover:bg-green-500 transition">
              Shop Now
            </button>
            </Link>
            

            <button className="px-6 py-3 border border-green-600 text-green-600 dark:text-green-500 rounded-xl hover:bg-green-100 dark:hover:bg-gray-800 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={LandingImg}
            alt="Farming"
            className="rounded-2xl shadow-xl w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
