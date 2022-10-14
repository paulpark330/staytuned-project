import ProductItem from "../ProductItem/ProductItem";

import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <ul className={styles.container}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
        />
      ))}
    </ul>
  );
};

export default ProductList;
