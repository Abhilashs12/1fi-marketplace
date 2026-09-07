import { BrowserRouter, Route, Routes } from "react-router-dom";

import Shop from "./pages/Shop";
import TopBrands from "./pages/TopBrands";
import NearbyStores from "./pages/NearbyStores";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/top-brands" element={<TopBrands />} />
        <Route
          path="/shop/nearby-stores"
          element={<NearbyStores />}
        />
        <Route
          path="/marketplace"
          element={<Marketplace />}
        />
        <Route
          path="/products/:productId"
          element={<ProductDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;