import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./user.module.css";

export default function User() {
  return (
    <>
      <Navbar />
      <div id={styles.container}>User/Profile Page</div>
      <Footer />
    </>
  );
}
