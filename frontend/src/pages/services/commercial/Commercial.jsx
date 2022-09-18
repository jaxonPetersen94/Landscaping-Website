import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import ServiceCard from "../../../components/service-card/ServiceCard";
import { serviceCards_Commercial } from "../../../dummyData/DummyServiceData";
import styles from "../services.module.css";

export default function Commercial() {
  return (
    <>
      <Navbar />
      <div id={styles.container}>
        {serviceCards_Commercial.map((card, index) => {
          return (
            <div className={styles.gridItem} key={index}>
              <ServiceCard serviceCard={serviceCards_Commercial[index]} />
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
