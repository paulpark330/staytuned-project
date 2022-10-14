import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const params = useParams();

  const { productId } = params;

  const {
    sendRequest,
    status,
    data: loadedProduct,
  } = useHttp(getSingleProduct, true);

  useEffect(() => {
    sendRequest(productId);
  }, [sendRequest, productId]);

  if (status === "pending") {
    return (
      <div className={styles.container}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.product_img}>
        <img src={loadedProduct.img} alt="" />
      </div>
      <div className={styles.product_detail}>
        <h3 className={styles.product_name}>{loadedProduct.name}</h3>
        <p className={styles.product_price}>{loadedProduct.price} USD</p>
      </div>
    </div>
  );
};

export default ProductDetail;
