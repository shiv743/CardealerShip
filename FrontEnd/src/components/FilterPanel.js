import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is imported

const FilterPanel = ({ onFilterChange }) => {
  const [filterOptions, setFilterOptions] = useState({
    makes: [],
    models: [],
    years: [],
    transmissions: [],
    bodyStyles: [],
    colors: [],
    engines: [],
    fuelTypes: [],
  });

  const [selectedFilters, setSelectedFilters] = useState({
    make: '',
    model: '',
    year: '',
    minPrice: '',
    maxPrice: '',
    transmission: '',
    bodyStyle: '',
    color: '',
    engine: '',
    fuelType: '',
  });

  // Fetch filter options from the backend
  useEffect(() => {
    axios
      .get('http://localhost:8081/api/vehicles/filters')
      .then((response) => {
        setFilterOptions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching filter options:', error);
      });
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    const filters = {
      make: selectedFilters.make || null,
      model: selectedFilters.model || null,
      year: selectedFilters.year || null,
      minPrice: selectedFilters.minPrice || null,
      maxPrice: selectedFilters.maxPrice || null,
      transmission: selectedFilters.transmission || null,
      bodyStyle: selectedFilters.bodyStyle || null,
      color: selectedFilters.color || null,
      engine: selectedFilters.engine || null,
      fuelType: selectedFilters.fuelType || null,
    };

    axios
      .post('http://localhost:8081/api/vehicles/search', filters)
      .then((response) => {
        onFilterChange(response.data); // Update the filtered cars
      })
      .catch((error) => {
        console.error('Error applying filters:', error);
      });
  };

  return (
    <div className="filter-panel">
      <h3>Refine Results</h3>

      {/* Make Filter */}
      <div className="filter-group">
        <label>Make</label>
        <select
          name="make"
          value={selectedFilters.make}
          onChange={handleFilterChange}
        >
          <option value="">Any Make</option>
          {filterOptions.makes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>

      {/* Model Filter */}
      <div className="filter-group">
        <label>Model</label>
        <select
          name="model"
          value={selectedFilters.model}
          onChange={handleFilterChange}
        >
          <option value="">Any Model</option>
          {filterOptions.models.map((model, index) => (
            <option key={index} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>

      {/* Year Filter */}
      <div className="filter-group">
        <label>Year</label>
        <select
          name="year"
          value={selectedFilters.year}
          onChange={handleFilterChange}
        >
          <option value="">Any Year</option>
          {filterOptions.years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Min Price Filter */}
      <div className="filter-group">
        <label>Min Price</label>
        <input
          type="number"
          name="minPrice"
          value={selectedFilters.minPrice}
          onChange={handleFilterChange}
          placeholder="Min Price"
        />
      </div>

      {/* Max Price Filter */}
      <div className="filter-group">
        <label>Max Price</label>
        <input
          type="number"
          name="maxPrice"
          value={selectedFilters.maxPrice}
          onChange={handleFilterChange}
          placeholder="Max Price"
        />
      </div>

      {/* Transmission Filter */}
      <div className="filter-group">
        <label>Transmission</label>
        <select
          name="transmission"
          value={selectedFilters.transmission}
          onChange={handleFilterChange}
        >
          <option value="">Any Transmission</option>
          {filterOptions.transmissions.map((transmission, index) => (
            <option key={index} value={transmission}>
              {transmission}
            </option>
          ))}
        </select>
      </div>

      {/* Body Style Filter */}
      <div className="filter-group">
        <label>Body Style</label>
        <select
          name="bodyStyle"
          value={selectedFilters.bodyStyle}
          onChange={handleFilterChange}
        >
          <option value="">Any Body Style</option>
          {filterOptions.bodyStyles.map((bodyStyle, index) => (
            <option key={index} value={bodyStyle}>
              {bodyStyle}
            </option>
          ))}
        </select>
      </div>

      {/* Color Filter */}
      <div className="filter-group">
        <label>Color</label>
        <select
          name="color"
          value={selectedFilters.color}
          onChange={handleFilterChange}
        >
          <option value="">Any Color</option>
          {filterOptions.colors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      {/* Engine Filter */}
      <div className="filter-group">
        <label>Engine</label>
        <select
          name="engine"
          value={selectedFilters.engine}
          onChange={handleFilterChange}
        >
          <option value="">Any Engine</option>
          {filterOptions.engines.map((engine, index) => (
            <option key={index} value={engine}>
              {engine}
            </option>
          ))}
        </select>
      </div>

      {/* Fuel Type Filter */}
      <div className="filter-group">
        <label>Fuel Type</label>
        <select
          name="fuelType"
          value={selectedFilters.fuelType}
          onChange={handleFilterChange}
        >
          <option value="">Any Fuel Type</option>
          {filterOptions.fuelTypes.map((fuelType, index) => (
            <option key={index} value={fuelType}>
              {fuelType}
            </option>
          ))}
        </select>
      </div>

      {/* Search Button */}
      <button className="btn-search" onClick={applyFilters}>
        Search
      </button>
    </div>
  );
};

export default FilterPanel;
