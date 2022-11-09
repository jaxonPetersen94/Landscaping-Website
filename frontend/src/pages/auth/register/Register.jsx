import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import styles from "./register.module.css";
import { RegisterUser } from "../../../api/auth/api.js";

export default function Register() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    RegisterUser(user);
  };

  return (
    <>
      <Navbar />
      <div id={styles.container}>
        <form id={styles.registerBox} onSubmit={handleClick}>
          <h2 style={{ margin: 0 }}>Registration</h2>
          <input className={styles.input} placeholder="Name" required ref={name} />
          <input className={styles.input} placeholder="Email" required ref={email} type="email" />
          <input
            className={styles.input}
            placeholder="Password"
            required
            ref={password}
            type="password"
            minLength="6"
          />
          <input
            className={styles.input}
            placeholder="Confirm Password"
            required
            ref={passwordAgain}
            type="password"
          />
          <button id={styles.registerBtn} type="submit">
            Register
          </button>
          <Link to="/signin">Already have an account?</Link>
        </form>
      </div>
      <Footer />
    </>
  );
}
