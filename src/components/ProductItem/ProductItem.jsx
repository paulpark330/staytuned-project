import { NavLink } from "react-router-dom";
import styles from "./ProductItem.module.css";

const ProductItem = ({ id, name, price, img }) => {
  return (
    <div className={styles.product}>
      <NavLink to={`/products/${id}`}>
        <div className={styles.product_img}>
          <img src={img} alt="" />
        </div>
      </NavLink>
      <div className={styles.product_info}>
        <h3 className={styles.product_name}>{name}</h3>
        <p className={styles.product_price}>{price} USD</p>
      </div>
    </div>
  );
};

export default ProductItem;
