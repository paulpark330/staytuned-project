import ProductItem from "../ProductItem/ProductItem";

import { useState, useEffect } from "react";

import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
    setProductList(sortedProducts);
  }, [products]);

  return (
    <ul className={styles.container}>
      {productList.map((product) => (
        <ProductItem
          key={product.product_id}
          id={product.product_id}
          name={product.name}
          price={product.price}
          img={product.img}
        />
      ))}
    </ul>
  );
};

export default ProductList;
