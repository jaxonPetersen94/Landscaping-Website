import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./requestQuote.module.css";

export default function RequestQuote() {
  return (
    <>
      <Navbar />
      <div id={styles.container}>Request a Quote</div>
      <Footer />
    </>
  );
}
