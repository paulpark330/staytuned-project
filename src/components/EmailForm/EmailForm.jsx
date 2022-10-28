import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { getSubscriptions, postSubscription } from "../../lib/api";

import styles from "./EmailForm.module.css";

const EmailForm = ({ product_id }) => {
  const [email, setEmail] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted!", email, product_id);
    const data = await postSubscription(email, product_id);
    console.log(data);
    setEmail("");
  };

  const {
    sendRequest,
    status,
    data: subscriptions,
    error,
  } = useHttp(getSubscriptions);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
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
  );
};

export default EmailForm;
