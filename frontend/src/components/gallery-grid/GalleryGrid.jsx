import React, { useEffect, useRef } from "react";
import "./galleryGrid.css";

export default function GalleryGrid() {
  const gallery = useRef(null);
  const getVal = (elem, style) => {
    return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
  };
  const getHeight = (item) => {
    return item.querySelector(".content").getBoundingClientRect().height;
  };
  const resizeAll = () => {
    const autoRowSize = getVal(gallery.current, "grid-auto-rows");
    const rowGap = getVal(gallery.current, "grid-row-gap");
    gallery.current.querySelectorAll(".gallery-item").forEach(function (item) {
      const el = item;
      el.style.gridRowEnd =
        "span " + Math.ceil((getHeight(item) + rowGap) / (autoRowSize + rowGap));
    });
  };
  const setInitialImageGridValues = () => {
    gallery.current.querySelectorAll("img").forEach(function (item) {
      const autoRowSize = getVal(gallery.current, "grid-auto-rows");
      const rowGap = getVal(gallery.current, "grid-row-gap");
      const galleryItem = item.parentElement.parentElement;
      galleryItem.style.gridRowEnd =
        "span " + Math.ceil((getHeight(galleryItem) + rowGap) / (autoRowSize + rowGap));
    });
    resizeAll();
  };
  const handleImageLoaded = () => {
    setInitialImageGridValues();
  };

  useEffect(() => {
    window.addEventListener("resize", resizeAll);
    return () => {
      window.removeEventListener("resize", resizeAll);
    };
  });

  const galleryImages = [];
  for (var i = 0; i < 12; i++) {
    galleryImages.push(`/assets/imgs/gallery/gallery-${i + 1}.jpg`);
  }

  return (
    <div id="grid-gallery-container">
      <div className="gallery" ref={gallery}>
        {galleryImages.map((img, index) => {
          return (
            <div className="gallery-item" key={index}>
              <div className="content">
                <img src={img} alt="" onLoad={handleImageLoaded} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
