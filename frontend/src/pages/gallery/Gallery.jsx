import React from "react";
import Navbar from "../../components/navbar/Navbar";
import GalleryGrid from "../../components/gallery-grid/GalleryGrid";
import Footer from "../../components/footer/Footer";
import styles from "./gallery.module.css";

export default function Gallery() {
  // for all Gallery Items -- add ability to Click and set classname to the following:
  // item.classList.toggle("full");  //full

  return (
    <>
      <Navbar />
      <GalleryGrid />
      <Footer />
    </>
  );
}
