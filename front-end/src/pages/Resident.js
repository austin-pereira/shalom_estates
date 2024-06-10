import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 50px auto;
  background: #FFF;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  width: 95%;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
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

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 95%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const MaintenanceRequestForm = () => {
  const [formData, setFormData] = useState({
    unitNo: '',
    room: '',
    problem: '',
    urgency: '',
    email: '' // Changed from phoneNumber to email
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
        const apiEndpoint = 'http://localhost:4000/submit-maintenance';
    
        try {
          const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json(); 
    
          if (response.ok) {
            alert(data.message || 'Message sent successfully!'); // Use server message if available
            console.log('Server response:', data);
            // You can reset the form here if needed:
            setFormData({ unitNo: '', room: '', problem: '', urgency: '', email: '' }); 
          } else {
            // Handle specific backend errors (if provided)
            throw new Error(data.error || 'Network response was not ok');
          }
        } catch (error) {
          console.error('Error sending message:', error);
          alert(error.message || 'Error sending message. Please try again.');
        }
      };
    
    

  return (
    <FormContainer>
      <FormTitle>Maintenance</FormTitle>
      <form onSubmit={handleSubmit}>
        <Select name="unitNo" value={formData.unitNo} onChange={handleChange}>
          <option value="">Select Unit</option>
          <option value="0:1">0:1</option>
          <option value="0:2">0:2</option>
          <option value="1:1">1:1</option>
          <option value="1:2">1:2</option>
          <option value="2:1">2:1</option>
          <option value="2:2">2:2</option>
        </Select>
        <Select name="room" value={formData.room} onChange={handleChange}>
          <option value="">Select Room</option>
          <option value="Bedroom 1">Bedroom 1</option>
          <option value="Bedroom 2">Bedroom 2</option>
          <option value="Balcony">Balcony</option>
          <option value="Bathroom Indian">Bathroom Indian</option>
          <option value="Bathroom Western">Bathroom Western</option>
          <option value="Living Room">Living Room</option>
          <option value="Kitchen">Kitchen</option>
        </Select>
        <Textarea name="problem" value={formData.problem} onChange={handleChange} placeholder="Problem:" />
        <Select name="urgency" value={formData.urgency} onChange={handleChange}>
          <option value="">Select Urgency</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
        <Input name="email" // Changed from phoneNumber to email
               value={formData.email} onChange={handleChange} 
               placeholder="Your Email Address" />
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default MaintenanceRequestForm;

