import { useState } from "react";
import { postSubscription } from "../../lib/api";

import styles from "./EmailForm.module.css";

const EmailForm = ({ product_id }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted!", email, product_id);
    try {
      const data = await postSubscription(email, product_id);
      console.log("data", data);
      setEmail("");
      setSuccess("Success! You are now subscribed.");
      setError(null);
    } catch (error) {
      setError("Subscription already exists");
      setSuccess(null);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <form className={styles.email_form} onSubmit={handleFormSubmit}>
        <input
          className={styles.email_input}
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit" className={styles.submit_button}>
          subscribe
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
    </>
  );
};

export default EmailForm;
