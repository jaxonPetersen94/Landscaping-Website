import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import ServiceCard from "../../../components/service-card/ServiceCard";
import { serviceCards_Residential } from "../../../dummyData/DummyServiceData";
import styles from "../services.module.css";

export default function Residential() {
  return (
    <>
      <Navbar />
      <div id={styles.container}>
        {serviceCards_Residential.map((card, index) => {
          return (
            <div className={styles.gridItem} key={index}>
              <ServiceCard serviceCard={serviceCards_Residential[index]} />
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
