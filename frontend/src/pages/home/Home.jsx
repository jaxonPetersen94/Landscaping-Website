import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id={styles.container}>
        <div id={styles.fluid}>
          <img src="/assets/imgs/landscaping_1.jpg" id={styles.img} alt="" />
          <div id={styles.infoContainer}>
            <h3 id={styles.smallHeader}>QUALITY THAT IS GUARANTEED</h3>
            <h1 id={styles.largeHeader}>
              Your lawn and landscape <br /> cared for the way they should be
            </h1>
            <div id={styles.btnContainer}>
              <Link to="/about" id={styles.moreAboutUsBtn} className={styles.btn}>
                MORE ABOUT US
              </Link>
              <Link to="/contact" id={styles.getInTouchBtn} className={styles.btn}>
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
