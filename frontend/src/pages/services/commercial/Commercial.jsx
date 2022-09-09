import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import styles from "./commercial.module.css";

export default function Commercial() {
  return (
    <>
      <Navbar />
      <div id={styles.container}>Services: Commercial</div>
      <Footer />
    </>
  );
}
