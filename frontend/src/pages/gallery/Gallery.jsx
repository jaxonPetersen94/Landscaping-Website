import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <div id={styles.container}>Gallery</div>
      <Footer />
    </>
  );
}
