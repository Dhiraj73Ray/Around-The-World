import React from 'react';
import '../../assets/css/placecard.css';
import { Link } from 'react-router-dom';

function PlaceCard({ place }) {
  return (
    <Link
      to={`/place/${place.id}`}
      state={{ categoryId: place.categoryId }}
      className="place-card"
    >
      <img src={place.image} alt={place.name} />
      <h3>{place.name}</h3>
    </Link>
  );
}

export default PlaceCard;
