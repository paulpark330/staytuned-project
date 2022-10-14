import { useEffect } from "react";
import { getProducts } from "../../lib/api";
import useHttp from "../../hooks/use-http";

import styles from "./AllProducts.module.css";
import ProductList from "../../components/ProductList/ProductList";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const AllProducts = () => {
  const {
    sendRequest,
    status,
    data: loadedProducts,
    error,
  } = useHttp(getProducts, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className={styles.centered}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  return <ProductList products={loadedProducts} />;
};

export default AllProducts;
