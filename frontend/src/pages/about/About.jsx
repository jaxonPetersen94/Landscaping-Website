import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Star } from "@mui/icons-material";
import styles from "./about.module.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div id={styles.topBlock}>
        <span id={styles.title}>ABOUT US</span>
      </div>
      <div id={styles.card}>
        <div id={styles.cardTextContainer}>
          <div id={styles.cardTextFirst}>
            Blake Price founded Price Landscaping Co. in 2020 with a $25 lawnmower he bought at a
            garage sale and the goal of making enough money to pay for college. He put himself
            through the University of Dayton while running the company from his dorm room, and in
            the process discovered his life’s work and passion. Today, Price Landscaping Co. is a
            respected leader in the green industry. With a dedicated team of professionals and an
            unwavering commitment to quality and customer service, we have won more than 50 local
            and national awards and are a two-time recipient of the Better Business Bureau’s Eclipse
            Integrity Award.
          </div>
          <br />
          <ul>
            <li className={styles.cardText}>
              <span className={styles.cardBulletPointTitle}>Our Commitment:</span>
              To create a beautiful, sustainable outdoor space you can enjoy year-round. We design
              and install landscaping and hardscaping, with a wide array of features; from patios
              and pergolas, to pools, spas, outdoor kitchens, and more. We also provide expert
              landscape maintenance through our innovative LandKeepingTM services. We believe the
              best companies are aligned around a shared vision, mission, and core values, and we
              strive every day to live ours.
            </li>
            <li className={styles.cardText}>
              <span className={styles.cardBulletPointTitle}>Our Vision:</span> To be recognized as
              leaders and as a growing company that provides opportunities for our team.
            </li>
            <li className={styles.cardText}>
              <span className={styles.cardBulletPointTitle}>Our Mission:</span> Create opportunities
              for our team to grow and succeed by enhancing the beauty and value of every client’s
              property while exceeding their expectations every step of the way.
            </li>
          </ul>
          <div id={styles.cardTextAwardTitle}>
            <Star /> Awards The Price Landscaping Co. team has been recognized with: <br />
          </div>
          <div id={styles.cardAwardGrid}>
            <span className={styles.cardAward}>
              28 Ohio Nursery and Landscape Association Awards
            </span>
            <span className={styles.cardAward}>
              11 National Association of Landscape Professional Awards
            </span>
            <span className={styles.cardAward}>
              10 National Association of Landscape Professionals Safety Recognition Awards
            </span>
            <span className={styles.cardAward}>
              2 Better Business Bureau Eclipse Integrity Awards Professional Affiliations
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
