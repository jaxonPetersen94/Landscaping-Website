import React from "react";
import styles from "./serviceCard.module.scss";

export default function ServiceCard(props) {
  return (
    <div id={styles.card}>
      <img id={styles.img} src={props.serviceCard.img} alt="service card" />
      <div id={styles.serviceType}>{props.serviceCard.serviceType}</div>
      <div id={styles.serviceName}>{props.serviceCard.serviceName}</div>
      <ul id={styles.serviceDescriptionList}>
        {props.serviceCard.descriptionBulletPoints.map((point, index) => {
          return (
            <li className={styles.description} key={index}>
              {props.serviceCard.descriptionBulletPoints[index]}
            </li>
          );
        })}
      </ul>

      <div className={styles.cardStats}>
        <div className={styles.statSection}>
          <div>
            <div className={styles.statValue}>1</div>
            <div className={styles.stat}>Acre</div>
          </div>
        </div>

        <div className={styles.statSection}>
          <div className={styles.statValue}>${props.serviceCard.price}</div>
          <div className={styles.stat}>Dollars</div>
        </div>

        <div className={styles.statSection}>
          <div className={styles.statValue}>~30</div>
          <div className={styles.stat}>Minutes</div>
        </div>
      </div>
    </div>
  );
}
