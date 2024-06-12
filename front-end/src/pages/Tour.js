import React, { useState } from 'react';
import styled from 'styled-components';

import 'leaflet/dist/leaflet.css';
import 'leaflet-providers';



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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background-color: #D9D9D9; // Grey background
`;

// Styling for the box that contains the neighborhood information
const InfoBox = styled.div`
  width: 80%; // Increased width
  max-width: 1000px; // Ensure it doesn't get too wide on large screens
  background-color: #fff;
  
  padding: 30px;
  padding-bottom: 100px;
  margin: 10px;
  text-align: center; // Center the text inside the box
`;

const Title = styled.h2`
    font-family: 'Jomolhari', serif;
    color: #333;
`;

const Item = styled.div`
    font-family: 'Jomolhari', serif;
    margin: 10px 0;
`;

const Link = styled.a`
    font-family: 'Jomolhari', serif;
    color: #0066cc;
    text-decoration: none;

  &:hover {
    
    color: #04453A;

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
    <Container>
      <InfoBox>
        <Title>Jayapura Neighborhood</Title>
        <Item>
          <strong>School Within 7 km:</strong> <Link href="https://www.google.com/maps/place/BGS+GROUP+OF+EDUCATION+INSTITUTION+JAYAPURA/@13.4022435,75.3689808,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbb3fc038ea1ffd:0x236e25bbe69dea2e!8m2!3d13.4022435!4d75.3715557!16s%2Fg%2F11j4pxb_gg?authuser=0&entry=ttu" target="_blank">(Link)</Link>
        </Item>
        <Item>
          <strong>Market Within 7 km:</strong> <Link href="https://www.google.com/maps/place/BGS+GROUP+OF+EDUCATION+INSTITUTION+JAYAPURA/@13.4022435,75.3689808,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbb3fc038ea1ffd:0x236e25bbe69dea2e!8m2!3d13.4022435!4d75.3715557!16s%2Fg%2F11j4pxb_gg?authuser=0&entry=ttu" target="_blank">(Link)</Link>
        </Item>
        <Item>
          <strong>Religious Institution Within 7km:</strong> <Link href="https://www.google.com/maps/place/BGS+GROUP+OF+EDUCATION+INSTITUTION+JAYAPURA/@13.4022435,75.3689808,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbb3fc038ea1ffd:0x236e25bbe69dea2e!8m2!3d13.4022435!4d75.3715557!16s%2Fg%2F11j4pxb_gg?authuser=0&entry=ttu" target="_blank">(Link)</Link>
        </Item>
      </InfoBox>
    </Container>
    
    </>
  );
};

export default TourBookingForm;
