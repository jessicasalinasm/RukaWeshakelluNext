import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img className={styles.imageUrl} src={imageUrl} alt="Card Image" />
      <h2 className={styles.h2}>{title}</h2>
      <p className={styles.p}>{description}</p>
    </div>
  );
};

export default Card;
