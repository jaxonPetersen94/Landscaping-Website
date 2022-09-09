import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div id={styles.container}>Contact</div>
      <Footer />
    </>
  );
}
