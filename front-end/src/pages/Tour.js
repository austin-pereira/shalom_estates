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
  width: 80%;
  max-width: 1000px;
  background-color: #fff;
  padding: 30px;
  padding-bottom: 100px; /* Adjust for more/less shadow space */
  margin: 10px;
  text-align: center;

  /* Border Styles */
  
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2); /* Initial subtle shadow */

  /* Hover Effect */
  &:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3); /* Increased shadow on hover */
    transform: translateY(-3px); /* Slight lift on hover */
  }
`;

const Title = styled.h2`
    font-family: 'Jomolhari', serif;
    color: #333;
`;

const Item = styled.div`
    font-family: 'Jomolhari', serif;
    margin: 10px 0;

    font-weight: ${props => props.isTitle ? 'bold' : 'normal'};
    /* Apply style only if the Item has the section-title class AND contains a colon */
  
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
        <Item className="section-title" isTitle={true}>
          Schools Within 7 km:
        </Item>
        <Item>
          <strong>Sri Sathya Sai Srinikethanam </strong> <Link href="https://maps.app.goo.gl/dmtRQHghigom2tg9A" target="_blank">(Link)</Link>
        </Item>
        <Item>
          <strong>BGS group of Education Jayapura </strong> <Link href="https://www.google.com/maps/place/BGS+GROUP+OF+EDUCATION+INSTITUTION+JAYAPURA/@13.4022435,75.3689808,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbb3fc038ea1ffd:0x236e25bbe69dea2e!8m2!3d13.4022435!4d75.3715557!16s%2Fg%2F11j4pxb_gg?authuser=0&entry=ttu" target="_blank">(Link)</Link>
        </Item>
        <Item>
          <strong>Government Higher Primary School </strong> <Link href="https://maps.app.goo.gl/4DUanT9DR6rfB2Mt7" target="_blank">(Link)</Link>
        </Item>
        <Item>
          <strong>Sri Adichunchanagiri Pre-University College </strong> <Link href="https://maps.app.goo.gl/V9mxqQG1ZhfQmv1HA" target="_blank">(Link)</Link>
        </Item>
        <Item className="section-title" isTitle={true}>
          Market Within 4 km: 
        </Item>
        <Item>
          <strong>Vegetable Market </strong> <Link href="https://maps.app.goo.gl/VZpP48CENPvAVNBX7" target="_blank">(Link)</Link>
        </Item>
        <Item>
          <strong>Al Safi Meat House </strong> <Link href="https://maps.app.goo.gl/VZpP48CENPvAVNBX7" target="_blank">(Link)</Link>
        </Item>
       
        
        <Item className="section-title" isTitle={true}>
        Nearest Hospitals: 
        </Item>
        <Item>
          <strong>Primary Health Centre </strong>  <Link href="https://maps.app.goo.gl/G34oJVmELQL1hnhT7" target="_blank">(Link)</Link>
        </Item>
        <Item>
          <strong>Government Hospital </strong> <Link href="https://maps.app.goo.gl/Ef5BGJNUBhNaAnGp7" target="_blank">(Link)</Link>
        </Item>

        <Item className="section-title" isTitle={true}>
        Religious Institutions Nearby:
        </Item>
        
        <Item>
        <strong>St. Rita's Church, Jayapura </strong><Link href="https://maps.app.goo.gl/MPSWD6HcVzmWR3gKA" target="_blank">(Link)</Link>
        </Item>
        <Item>
        <strong>Shree Sangameshwara Temple </strong><Link href="https://maps.app.goo.gl/HciuovCUcv41RrYd6" target="_blank">(Link)</Link>
        </Item>
        <Item>
        <strong>Mosque </strong><Link href="https://maps.app.goo.gl/NT9mGGENrgU5ottn9" target="_blank">(Link)</Link>
        </Item>
        <Item>
        <strong>Durgaparameshwari Temple </strong><Link href="https://maps.app.goo.gl/qmE5sZBxzg8mdPan7" target="_blank">(Link)</Link>
        </Item>
        
        
      </InfoBox>
    </Container>
    
    </>
  );
};

export default TourBookingForm;
