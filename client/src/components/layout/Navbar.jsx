import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import LiveMandiBadge from "../ai/LiveMandiBadge";
import { 
  Search, 
  ShoppingCart, 
  Moon, 
  Sun, 
  User, 
  Menu, 
  X, 
  ChevronDown,
  LogOut,
  Package
} from "lucide-react";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [openProfile, setOpenProfile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileRef = useRef();
  const location = useLocation();

  const isLoggedIn = 1; 

  const navCategories = [
    { name: "Fertilizers", path: "/fertilizer" },
    { name: "Pesticides", path: "/pesticide" },
    { name: "Tools", path: "/tools" },
    { name: "Irrigation", path: "/irrigation" },
    { name: "Seeds", path: "/seeds" },
    { name: "Weather", path: "/weather" },
    { name: "Crops", path: "/crops" },
  ];

  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-[100] w-full">
      {/* Upper Glass Navbar */}
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 transition-all">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Logo Section - INCREASED SIZE */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <img 
              src={Logo} 
              alt="AgriSmart" 
              className="h-14 w-auto drop-shadow-sm transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="hidden lg:flex flex-col leading-none">
              <span className="font-black text-2xl tracking-tighter text-gray-900 dark:text-white">
                AGRI<span className="text-green-600">SMART</span>
              </span>
              <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">E-Farming Solution</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl hidden md:relative md:flex items-center">
            <Search className="absolute left-4 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products or crop info..." 
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-950 border border-transparent focus:border-green-500/50 outline-none transition-all text-sm"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden xl:block">
              <LiveMandiBadge crop="Basmati" price="4,200" trend="+4.2" />
            </div>

            <button onClick={() => setDarkMode(!darkMode)} className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>

            <Link to="/cart" className="relative p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white dark:border-gray-900">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Profile Dropdown */}
            {isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setOpenProfile(!openProfile)}
                  className="flex items-center gap-1 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                    <User size={20} />
                  </div>
                  <ChevronDown size={14} className={`text-gray-400 transition-transform ${openProfile ? 'rotate-180' : ''}`} />
                </button>

                {openProfile && (
                  <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl py-2 overflow-hidden">
                    <Link to="/profile" className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <User size={16} /> My Profile
                    </Link>
                    <Link to="/orders" className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <Package size={16} /> My Orders
                    </Link>
                    <hr className="my-1 border-gray-100 dark:border-gray-700" />
                    <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors font-medium">
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className="hidden md:block px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition-all active:scale-95">
                Login
              </button>
            )}

            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* LOWER NAV - REDUCED PADDING & REFINED LINK STYLE */}
      <nav className="hidden md:block bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-8 flex justify-center gap-1">
          {navCategories.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 my-1 text-[13px] font-bold transition-all rounded-lg
                ${location.pathname === item.path 
                  ? "text-green-600 bg-green-50 dark:bg-green-900/20" 
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-white dark:bg-gray-900 animate-in fade-in zoom-in duration-200">
           <div className="p-6">
              <div className="flex justify-between items-center mb-10">
                <img src={Logo} alt="Logo" className="h-12" />
                <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
              </div>
              <div className="space-y-4">
                {navCategories.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-3xl font-black text-gray-900 dark:text-white hover:text-green-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
           </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;