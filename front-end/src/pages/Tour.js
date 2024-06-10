import React, { useState } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: #02221A; /* Dark green background */
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 100px auto;
`;

const FormTitle = styled.h2`
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 350px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  width: 100%;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;


const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;  // Light grey background around the map
  padding: 20px;
`;

const Sidebar = styled.div`
  width: 200px;
  height: 400px;
  overflow-y: auto;
  margin-right: 20px;
  background: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const PlaceItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #e8e8e8;
  }
`;

const TourBookingForm = ({ places }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    phoneNo: '',
    visitors: ''
  });

  const [selectedPosition, setSelectedPosition] = useState([13.3536424, 75.4936571]);

  const handlePlaceClick = (lat, lng) => {
    setSelectedPosition([lat, lng]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint = 'http://localhost:4000/book-tour'; // Updated endpoint

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Tour booked successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          date: '',
          phoneNo: '',
          visitors: '',
        }); // Reset the form
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error booking tour:', error);
      alert('Error booking tour. Please try again.');
    }
  };


  return (
      <>
    <PageContainer>
    <FormContainer>
      <FormTitle>Book Your Tour</FormTitle>
      <form onSubmit={handleSubmit}>
        <Input 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange} 
          placeholder="First Name"
        />
        <Input 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleChange} 
          placeholder="Last Name"
        />
        <Input 
          name="date" 
          type="date" 
          value={formData.date} 
          onChange={handleChange} 
          placeholder="Date"
        />
        <Input 
          name="phoneNo" 
          value={formData.phoneNo} 
          onChange={handleChange} 
          placeholder="Phone No"
        />
        <Input 
          name="visitors" 
          type="number" 
          value={formData.visitors} 
          onChange={handleChange} 
          placeholder="Number of Visitors"
        />
        <Button type="submit">Confirm</Button>
      </form>
    </FormContainer>
    </PageContainer>
    <MapWrapper>
      <Sidebar>
        {places && places.map((place, index) => (
          <PlaceItem key={index} onClick={() => handlePlaceClick(place.latitude, place.longitude)}>
            {place.name}
          </PlaceItem>
        ))}
      </Sidebar>
      <MapContainer center={selectedPosition} zoom={13} style={{ height: '400px', width: '600px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={selectedPosition}>
          <Popup>A marker at the default or clicked location.</Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
    </>
  );
};

export default TourBookingForm;
