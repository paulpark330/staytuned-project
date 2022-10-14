import { useEffect, useState } from "react";
import Product from "../Product/Product";
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://staytuned-project-default-rtdb.firebaseio.com/productList.json"
      );
      const data = await response.json();
      console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const renderProducts = products.map((product) => {
    return (
      <Product
        key={product.id}
        name={product.name}
        price={product.price}
        img={product.img}
        id={product.id}
      />
    );
  });

  return (
    <div className={styles.container}>
      {loading ? <p>Loading...</p> : renderProducts}
    </div>
  );
};

export default Products;
