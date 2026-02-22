  import { useContext, useState, useRef, useEffect } from "react";
  import { ThemeContext } from "../../context/ThemeContext";
  import Logo from "../../assets/icons/logo.png"
  import { Link } from "react-router-dom";
  import {useCart} from "../../context/CartContext"

  const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const [openProfile, setOpenProfile] = useState(false);
    const profileRef = useRef();

    const isLoggedIn = 1; // change to 1 to test profile

    const navCategories = [
    { name: "Seeds", path: "/seeds" },
    { name: "Fertilizers", path: "/fertilizer" },
    { name: "Pesticides", path: "/pesticide" },
    { name: "Tools", path: "/tools" },
    { name: "Irrigation", path: "/products?category=irrigation" },
    { name: "Weather", path: "/weather" },
    { name: "Crop Information", path: "/crops" },
  ];


    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
          setOpenProfile(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    // cart  
    const { cartItems } = useCart();

    const totalItems = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    return (
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">

        {/* ===== Top Navbar ===== */}
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3 gap-6">

          {/* Logo */}
          <Link to="/" className="cursor-pointer">
            <img
              src={Logo}
              alt="AgriSmart Logo"
              className="h-10 w-auto"
            />
          </Link>


          {/* Search */}
          <div className="flex-1 hidden md:flex">
            <input
              type="text"
              placeholder="Search seeds, fertilizers..."
              className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none"
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>


          {/* cart section  */}
            <Link to="/cart" className="relative px-3 py-2 inline-block">🛒
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-[2px] rounded-full shadow-md">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Conditional Rendering */}
            {isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setOpenProfile(!openProfile)}
                  className="w-9 h-9 rounded-full bg-green-500 text-black font-bold flex items-center justify-center"
                >
                  🧑‍🌾
                </button>

                {openProfile && (
                  <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2">
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      My Profile
                    </button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Orders
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className="px-4 py-2 bg-green-600 text-black rounded-lg font-medium hover:bg-green-500 transition">
                Login
              </button>
            )}
          </div>
        </div>

        {/* ===== Category Bar (Second Row Below Navbar) ===== */}
      <div className="hidden md:flex justify-center gap-8 py-3 
          bg-green-50 dark:bg-gray-800 
          font-medium border-t border-gray-200 dark:border-gray-700 
          transition-colors duration-300">

            {navCategories.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-800 dark:text-gray-200 hover:text-green-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}

        </div>


      </header>
    );
  };

  export default Navbar;
