import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../lib/api";
import useHttp from "../../hooks/use-http";
import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import styles from "./ProductDetail.module.css";
import EmailForm from "../../components/EmailForm/EmailForm";
import EditForm from "../../components/EditForm/EditForm";

const ProductDetail = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const params = useParams();

  const { productId } = params;

  const {
    sendRequest,
    status,
    data: product,
  } = useHttp(getSingleProduct, true);

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (admin) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [isAdmin]);

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
        <img src={product.img} alt="" />
      </div>
      <div className={styles.product_detail}>
        <h3 className={styles.product_name}>{product.name}</h3>
        <p className={styles.product_price}>{product.price} USD</p>
        {isAdmin ? (
          <EditForm
            currentPrice={product.price}
            product_id={product.product_id}
            product_img={product.img}
          />
        ) : (
          <EmailForm product_id={product.product_id} />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
