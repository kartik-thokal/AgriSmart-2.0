import React from "react";

const PromoBanner = () => {
  return (
    <div className="bg-green-50 dark:bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="rounded-2xl p-6 bg-gradient-to-r from-yellow-400 to-purple-500 text-black shadow-lg hover:scale-105 transition duration-300">
            <p className="text-lg font-bold">
              GET ₹50 OFF
            </p>
            <p className="text-sm mt-1">
              ON YOUR FIRST APP ORDER
            </p>
            <div className="mt-4 bg-black text-white text-sm px-3 py-1 inline-block rounded-lg">
              Coupon Code: <span className="font-bold">AgriSmart50</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl p-6 bg-gradient-to-r from-yellow-300 to-green-500 text-black shadow-lg hover:scale-105 transition duration-300 flex items-center gap-4">
            <img
              src="https://img.icons8.com/ios/50/000000/delivery.png"
              alt="Delivery"
              className="w-10 h-10"
            />
            <div>
              <p className="text-lg font-bold">
                FREE DELIVERY
              </p>
              <p className="text-sm mt-1">
                ON ORDERS ABOVE ₹499
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl p-6 bg-gradient-to-r from-red-700 to-yellow-400 text-white shadow-lg hover:scale-105 transition duration-300">
            <p className="text-lg font-bold">
              GET FLAT 1.5% OFF
            </p>
            <p className="text-sm mt-1">
              ON ORDERS ABOVE ₹1500
            </p>
            <div className="mt-4 bg-white text-black text-sm px-3 py-1 inline-block rounded-lg">
              Coupon Code: <span className="font-bold">SAVE1.5%</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PromoBanner;
