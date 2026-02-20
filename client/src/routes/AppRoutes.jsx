import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CropDetails from "../pages/CropDetails";
// import NotFound from "../pages/NotFound";
import Crops from "../pages/Crop";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crops/:cropName" element={<CropDetails />} />
      {/* <Route path="*" element={<NotFound />} /> */}
       <Route path="/crops" element={<Crops />} />
    </Routes>
  );
};

export default AppRoutes;
