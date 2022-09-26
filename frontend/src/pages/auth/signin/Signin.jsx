import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { signIn } from "../../../redux/features/auth/authSlice";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import styles from "./signin.module.css";

export default function Signin() {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    console.log("Signin.jsx -> handleSignIn()");
    e.preventDefault();
    dispatch(signIn());
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div id={styles.container}>
        <form id={styles.signInBox} onSubmit={handleSignIn}>
          <h2 style={{ margin: 0 }}>Sign in</h2>
          <input className={styles.input} placeholder="Email" required ref={email} type="email" />
          <input
            className={styles.input}
            placeholder="Password"
            required
            ref={password}
            type="password"
            minLength="6"
          />
          <button id={styles.signInBtn} type="submit">
            Sign in
          </button>
          <Link to="/register">Don't have an account?</Link>
        </form>
      </div>
      <Footer />
    </>
  );
}
