import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CropDetails from "../pages/crop/CropDetails";
// import NotFound from "../pages/NotFound";
import Crops from "../pages/crop/Crop";
import Seeds from "../pages/products/Seeds";
import SeedDetails from "../pages/products/SeedDetails";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crops/:cropName" element={<CropDetails />} />
      {/* <Route path="*" element={<NotFound />} /> */}
       <Route path="/crops" element={<Crops />} />
       <Route path="/seeds" element={<Seeds />} />
      <Route path="/seeds/:id" element={<SeedDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
