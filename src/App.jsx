import { Route, Routes, Navigate } from "react-router-dom";
import styles from "./App.module.css";

import Header from "./components/Header/Header";

import AllProducts from "./pages/AllProducts/AllProducts";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/products" />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;