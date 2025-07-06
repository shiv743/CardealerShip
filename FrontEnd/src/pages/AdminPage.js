import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style.T/AdminPage.css';

const AdminPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [newCar, setNewCar] = useState({
    make: '',
    model: '',
    year: '',
    bodyStyle: '',
    odometer: '',
    odometerUnit: 'km',
    transmission: '',
    engine: '',
    fuelType: '',
    color: '',
    passengers: '',
    description: '',
    image: '',
    price: '',
  });
  const [editCar, setEditCar] = useState(null);

  useEffect(() => {
    fetchAppointments();
    fetchInventory();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/appointments');
      setAppointments(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const fetchInventory = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/admin/inventory');
      setInventory(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      await axios.delete(`http://localhost:8081/api/appointments/${appointmentId}`);
      alert('Appointment deleted successfully!');
      fetchAppointments();
    } catch (error) {
      console.error('Error deleting appointment:', error);
      alert('Failed to delete appointment. Please try again.');
    }
  };

  const handleAddCar = async () => {
    if (!newCar.make || !newCar.model || !newCar.year || !newCar.price) {
      alert('Please fill out all required fields (Make, Model, Year, Price).');
      return;
    }
    try {
      await axios.post('http://localhost:8081/api/admin/inventory', newCar);
      alert('Car added successfully!');
      setNewCar({
        make: '',
        model: '',
        year: '',
        bodyStyle: '',
        odometer: '',
        odometerUnit: 'km',
        transmission: '',
        engine: '',
        fuelType: '',
        color: '',
        passengers: '',
        description: '',
        image: '',
        price: '',
      });
      fetchInventory();
    } catch (error) {
      console.error('Error adding car:', error);
      alert('Failed to add car. Please try again.');
    }
  };

  const handleEditCar = async () => {
    if (!editCar.make || !editCar.model || !editCar.year || !editCar.price) {
      alert('Please fill out all required fields (Make, Model, Year, Price).');
      return;
    }
    try {
      await axios.put(`http://localhost:8081/api/admin/inventory/${editCar.id}`, editCar);
      alert('Car updated successfully!');
      setEditCar(null);
      fetchInventory();
    } catch (error) {
      console.error('Error updating car:', error);
      alert('Failed to update car. Please try again.');
    }
  };

  const handleDeleteCar = async (carId) => {
    try {
      await axios.delete(`http://localhost:8081/api/admin/inventory/${carId}`);
      alert('Car deleted successfully!');
      fetchInventory();
    } catch (error) {
      console.error('Error deleting car:', error);
      alert('Failed to delete car. Please try again.');
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="appointments-section">
        <h2>Appointment History</h2>
        {appointments.length === 0 ? (
          <p>No appointments available</p>
        ) : (
          <table className="appointments-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer Name</th>
                <th>Contact</th>
                <th>Vehicle</th>
                <th>Service Type</th>
                <th>Appointment Date</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.customerName || 'N/A'}</td>
                  <td>{appointment.contact || 'N/A'}</td>
                  <td>{appointment.vehicle || 'N/A'}</td>
                  <td>{appointment.serviceType || 'N/A'}</td>
                  <td>{appointment.appointmentDate || 'N/A'}</td>
                  <td>{appointment.additionalNotes || 'N/A'}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteAppointment(appointment.id)}
                      className="delete-appointment-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="inventory-section">
        <h2>Inventory Management</h2>
        <div className="add-car-form">
          <h3>Add New Car</h3>
          <div className="form-grid">
            {Object.keys(newCar).map((field) => (
              <input
                key={field}
                type={field === 'price' || field === 'odometer' || field === 'passengers' ? 'number' : 'text'}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={newCar[field]}
                onChange={(e) => setNewCar({ ...newCar, [field]: e.target.value })}
              />
            ))}
            <button onClick={handleAddCar} className="add-car-button">
              Add Car
            </button>
          </div>
        </div>

        <table className="inventory-table">
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((car) => (
              <tr key={car.id}>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>${car.price}</td>
                <td>
                  <button onClick={() => setEditCar(car)}>Edit</button>
                  <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editCar && (
          <div className="edit-car-form">
            <h3>Edit Car</h3>
            <div className="form-grid">
              {Object.keys(editCar).map((field) => (
                <input
                  key={field}
                  type={field === 'price' || field === 'odometer' || field === 'passengers' ? 'number' : 'text'}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={editCar[field]}
                  onChange={(e) => setEditCar({ ...editCar, [field]: e.target.value })}
                />
              ))}
              <button onClick={handleEditCar} className="edit-car-button">
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
