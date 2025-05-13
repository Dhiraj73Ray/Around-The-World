import React, { useState, useEffect } from 'react';
import categoriesData from '../data/categories.json';
import PlaceCard from './Common/PlaceCard';
import '../assets/css/gallery.css';

function Gallery() {
  const [allPlaces, setAllPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const mergedPlaces = categoriesData.flatMap(cat =>
      cat.places.map(place => ({
        ...place,
        category: cat.id,
        categoryTitle: cat.title,
      }))
    );
    setAllPlaces(mergedPlaces);
    setFilteredPlaces(mergedPlaces);
  }, []);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);

    if (value === 'all') {
      setFilteredPlaces(allPlaces);
    } else if (value === 'random') {
      const randomIndex = Math.floor(Math.random() * allPlaces.length);
      setFilteredPlaces([allPlaces[randomIndex]]);
    } else {
      const filtered = allPlaces.filter(place => place.category === value);
      setFilteredPlaces(filtered);
    }
  };

  return (
    <div className="gallery-page">
      <div className="gallery-filter">
        <select value={selectedCategory} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="random">Random Place</option>
          {categoriesData.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.title}</option>
          ))}
        </select>
      </div>

      <div className="gallery-grid">
        {filteredPlaces.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
