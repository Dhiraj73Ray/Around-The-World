import React from 'react';
import { useNavigate } from 'react-router-dom';
import categories from '../../data/categories.json';
import '../../assets/css/categoryslicer.css';


function CategorySlicer({ current }) {
  const navigate = useNavigate();

  return (
    <div className="category-slicer">
      {categories.map(cat => (
        <div
          key={cat.id}
          className={`slicer-item ${cat.id === current ? 'active' : ''}`}
          onClick={() => navigate(`/catg/${cat.id}`)}
        >
          <span>{cat.title}</span>   {/* Title moved above */}
          <img src={cat.image} alt={cat.title} />
        </div>
      ))}
    </div>
  );
}

export default CategorySlicer;
