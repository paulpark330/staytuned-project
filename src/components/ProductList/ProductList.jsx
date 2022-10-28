import ProductItem from "../ProductItem/ProductItem";

import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <ul className={styles.container}>
      {products.map((product) => (
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
