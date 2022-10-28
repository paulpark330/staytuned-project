import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editProduct } from "../../lib/api";

import styles from "./EditForm.module.css";

const EditForm = ({ currentPrice, product_id, product_img }) => {
  const [newPrice, setEdit] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await editProduct(product_id, newPrice, currentPrice, product_img);
      console.log(response);
      setEdit("");
      setSuccess("Price updated successfully");
      setError(null);
      navigate("/products");
    } catch (error) {
      console.log(error);
      setError("Failed to update price");
      setSuccess(null);
    }
  };

  const handleEditChange = (event) => {
    setEdit(event.target.value);
  };

  return (
    <>
      <form className={styles.new_price_form} onSubmit={handleFormSubmit}>
        <input
          className={styles.new_price_input}
          type="number"
          placeholder={currentPrice}
          value={newPrice}
          onChange={handleEditChange}
          required
        />
        <button type="submit" className={styles.submit_button}>
          submit
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
    </>
  );
};

export default EditForm;
