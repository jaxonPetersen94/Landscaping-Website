import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import styles from "./residential.module.css";

export default function Residential() {
  return (
    <>
      <Navbar />
      <div id={styles.container}>Services: Residential</div>
      <Footer />
    </>
  );
}
