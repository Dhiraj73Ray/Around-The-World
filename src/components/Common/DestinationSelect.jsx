import React from 'react';
import Select from 'react-select';
import placesData from '../../data/categories.json';
import '../../assets/css/contact.css';


const DestinationSelect = ({ value, onChange }) => {
  const options = [];

  placesData.forEach(category => {
  category.places.forEach(place => {
    if (place.id) {
      options.push({
        value: place.id || place.name.toLowerCase().replace(/\s+/g, '-'),
        label: place.name
      });
    }
  });
});

  return (
    <Select className='destination-select'
      options={options}
      placeholder="Select Destination"
      onChange={onChange}
      value={options.find(opt => opt.label === value)}
      isClearable
    />
  );
};

export default DestinationSelect;
