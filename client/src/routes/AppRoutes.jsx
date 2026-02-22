import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CropDetails from "../pages/crop/CropDetails";
// import NotFound from "../pages/NotFound";
import Crops from "../pages/crop/Crop";
import Seeds from "../pages/products/Seeds";
import SeedDetails from "../pages/products/SeedDetails";

import Fertilizer from "../pages/products/Fertilizer";
import FertilizerDetails from "../pages/products/FertilizerDetails";

import Pesticide from "../pages/products/Pesticide";
import PesticideDetails from "../pages/products/PesticideDetails";


import Cart from "../pages/Cart";
import Categories from "../components/home/Categories";


const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/crops/:cropName" element={<CropDetails />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/crops" element={<Crops />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/seeds" element={<Seeds />} />
      <Route path="/seeds/:id" element={<SeedDetails />} />
      <Route path="/fertilizer" element={<Fertilizer />} />
      <Route path="/fertilizer/:id" element={<FertilizerDetails />} />
      <Route path="/pesticide" element={<Pesticide />} />
      <Route path="/pesticide/:id" element={<PesticideDetails />} />

    </Routes>
  );
};

export default AppRoutes;
