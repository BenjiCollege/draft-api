import React from "react";
import styles from './CardItems.module.scss';

const CardItems = (props) => {
  const {beer} = props;

  return (
    <div className={styles.card}>
      <img src={beer.image_url} alt="beer" />
      <h1>{beer.name}</h1>
      <p className={styles.tagline}>{beer.tagline}</p>
      <div>
        <p>Alcohol content: {beer.abv}</p>
        <p>Ph Lvl: {beer.ph}</p>
        <p>First brewed: {beer.first_brewed}</p>
        <p>Pair it with: {beer.food_pairing}</p>
        <p>Brewer's tips: {beer.brewers_tips}</p>
      </div>

    </div>
  );
};

export default CardItems;


