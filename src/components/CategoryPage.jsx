import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import categoriesData from '../data/categories.json';
import PlaceCard from './Common/PlaceCard';
import CategorySlicer from './Common/CategorySlicer';
import '../assets/css/categorypage.css';

function CategoryPage() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const selected = categoriesData.find(cat => cat.id === categoryId);
    setCategory(selected);
  }, [categoryId]);

  if (!category) {
    return <div className="not-found">Category not found.</div>;
  }

  return (
    <div className="category-page">
      <CategorySlicer current={categoryId} />
      <div className="category-banner" style={{ backgroundImage: `url(${category.image})` }}>
        <h1>{category.title}</h1>
        <p>{category.description}</p>
      </div>

      <Link to="/add-place">
        <button className="addbtn">+ Add Place</button>
      </Link>

      <div className="places-grid">
        {category.places.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
