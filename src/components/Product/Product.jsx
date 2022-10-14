import { NavLink } from "react-router-dom";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <div className={styles.product}>
      <NavLink to='/products/id'>
        <div className={styles.product_img}>
          <img
            src="https://media-live.byredo.com/__live__/media/catalog/product/cache/c5a89872cc52c0f5e6106953800b3b5c/m/o/mob_eyes-closed-eau-de-parfum-50-ml_1.jpg"
            alt=""
          />
        </div>
      </NavLink>
      <div className={styles.product_info}>
        <h3 className={styles.product_name}>eyes closed</h3>
        <p className={styles.product_price}>$200</p>
      </div>
    </div>
  );
};

export default Product;
