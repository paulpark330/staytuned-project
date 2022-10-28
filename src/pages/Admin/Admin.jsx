import styles from "./Admin.module.css";
import { useState } from "react";

const Admin = ({ isAdmin, setIsAdmin }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!", password);
    if (password === "admin") {
      setIsAdmin(true);
      localStorage.setItem("admin", true);
    } else {
      setError("Incorrect password");
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("admin");
  };

  return (
    <div className={styles.container}>
      {!isAdmin && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="password"
            onChange={handlePasswordChange}
          />
          <button className={styles.submit} type="submit">
            submit
          </button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      )}
      {isAdmin && (
        <div className={styles.container}>
          <button className={styles.submit} onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Admin;
