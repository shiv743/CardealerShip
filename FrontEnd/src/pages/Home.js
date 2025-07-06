import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FilterPanel from "../components/FilterPanel";
import CarCard from "../components/CarCard";
import axios from "axios";
import "../Style.K/styles.css";

const Home = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]); // State to store filtered cars

  // Fetch cars based on filters
  const fetchFilteredCars = async (filters) => {
    try {
      const response = await axios.get("http://localhost:8081/api/vehicles/search", {
        params: filters, // Send filters as query parameters
      });
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching filtered cars:", error);
    }
  };

  // Handle filter changes from the FilterPanel
  const handleFilterChange = (filters) => {
    fetchFilteredCars(filters); // Fetch cars with the updated filters
  };

  // Initial fetch of all cars
  useEffect(() => {
    fetchFilteredCars({}); // Fetch all cars initially
  }, []);

  // Function to handle "View Details" button
  const handleViewDetails = (car) => {
    navigate("/car-details", { state: { car } });
  };

  return (
    <div className="App">
      <Navbar />

      <div className="banner">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="Banner"
          className="Custbanner-image"
        />
      </div>

      <div className="container">
      <FilterPanel onFilterChange={(filteredCars) => setCars(filteredCars)} />

        <div className="car-list">
          {cars.length === 0 ? (
            <p>No cars available. Try adjusting the filters.</p>
          ) : (
            cars.map((car, index) => (
              <CarCard
                key={index}
                car={car}
                onViewDetails={() => handleViewDetails(car)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
