
// useEffect(() => {
//   axios.get('http://localhost:8000/api/categories/')
//     .then(res => {
//       const fetched = res.data;
//       const extended = [
//         ...fetched,
//         { id: 'other', title: 'Other' },
//         { id: 'new', title: 'New Category' }
//       ];
//       setCategories(extended);
//     })
//     .catch(err => console.error('Error fetching categories:', err));
// }, []);

import React, { useState, useEffect } from 'react';
import '../../assets/css/addPlaceForm.css';
import BackButton from '../Common/BackButton';

const AddPlaceForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    newCategoryName: '',
    name: '',
    images: [],
    description: '',
    budget: '',
    routes: '',
    hotels: '',
    notes: '',
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const staticCategories = [
      { value: 'beaches', label: 'Beaches' },
      { value: 'mountains', label: 'Mountains' },
      { value: 'histories', label: 'Historic' },
      { value: 'underwater', label: 'Underwater' },
      { value: 'adventure', label: 'Sky Adventures' },
      { value: 'modern', label: 'Modern' },
      { value: 'other', label: 'Other' },
      { value: 'new', label: 'New Category' },
    ];
    setCategories(staticCategories);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      setFormData({ ...formData, images: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, like storing data locally or displaying success message
    alert('Form submitted successfully!');
  };

  return (
    <div className="add-place-form">
      <BackButton />
      <h2>Add New Place</h2>
      <form onSubmit={handleSubmit}>
        <p>Category Name<span style={{ color: "red" }}>*</span></p>
        <select name="category" onChange={handleChange} required>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>

        {/* Editable input when "New Category" is selected */}
        {formData.category === 'new' && (
          <input
            type="text"
            name="newCategoryName"
            placeholder="Enter new category name"
            value={formData.newCategoryName}
            onChange={handleChange}
            required
          />
        )}

        <p>Place Name<span style={{ color: "red" }}>*</span></p>
        <input
          type="text"
          name="name"
          placeholder="Place Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <p>Add Images<span style={{ color: "red" }}>*</span></p>
        <input
          type="file"
          name="images"
          accept="image/*"
          multiple
          onChange={handleChange}
          required
        />

        <p>Add Description<span style={{ color: "red" }}>*</span></p>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <p>Total Estimated Budget (Optional)</p>
        <input
          type="number"
          name="budget"
          placeholder="Budget"
          value={formData.budget}
          onChange={handleChange}
        />

        <p>Destination Via<span style={{ color: "red" }}>*</span></p>
        <textarea
          name="routes"
          placeholder="How to Reach"
          value={formData.routes}
          onChange={handleChange}
          required
        />

        <p>Nearby Hotels Names</p>
        <input
          type="text"
          name="hotels"
          placeholder="Hotels (comma separated)"
          value={formData.hotels}
          onChange={handleChange}
        />

        <p>Comments<span style={{ color: "red" }}>*</span></p>
        <textarea
          name="notes"
          placeholder="Any Advice, Rules, Regulations, Notes, Experience"
          value={formData.notes}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPlaceForm;
