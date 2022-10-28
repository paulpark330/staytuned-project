import { Route, Routes, Navigate } from "react-router-dom";
import styles from "./App.module.css";

import Header from "./components/Header/Header";

import Admin from "./pages/Admin/Admin";
import AllProducts from "./pages/AllProducts/AllProducts";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

import { useEffect, useState } from "react";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (admin) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [isAdmin]);

  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/products" />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route
          path="/admin"
          element={<Admin isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
