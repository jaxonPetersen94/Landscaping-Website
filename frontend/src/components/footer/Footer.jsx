import React from "react";
import { Link } from "react-router-dom";
import { Copyright, LocationOn } from "@mui/icons-material";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div id={styles.container}>
      <div id={styles.top}>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>COMPANY</span>
          <div className={styles.links}>
            <Link to="/about" className={styles.navLink}>
              ABOUT
            </Link>
            <Link to="/gallery" className={styles.navLink}>
              GALLERY
            </Link>
            <Link to="/contact" className={styles.navLink}>
              CONTACT
            </Link>
          </div>
        </div>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>SERVICES</span>
          <div className={styles.links}>
            <Link to="/commercial" className={styles.navLink}>
              COMMERCIAL
            </Link>
            <Link to="/residential" className={styles.navLink}>
              RESIDENTIAL
            </Link>
          </div>
        </div>
        <div className={styles.section}>
          <span className={styles.sectionTitle}>ADDRESS</span>
          <div>
            <LocationOn />
            <span>6846 Dryden Rd, Almont, Michigan</span>
          </div>
        </div>
      </div>
      <div id={styles.bottom}>
        <span>
          Copyright <Copyright id={styles.copyrightIcon} /> 2022 Price Landscaping
        </span>
      </div>
    </div>
  );
}
