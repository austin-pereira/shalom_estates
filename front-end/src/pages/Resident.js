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

const MaintenanceRequestForm = () => {
  const [formData, setFormData] = useState({
    unitNo: '',
    room: '',
    problem: '',
    urgency: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would call your backend which interacts with Twilio
    console.log('Form data submitted:', formData);
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
        <Textarea
          name="problem"
          placeholder="Problem:"
          value={formData.problem}
          onChange={handleChange}
        />
        <Select name="urgency" value={formData.urgency} onChange={handleChange}>
          <option value="">Select Urgency</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default MaintenanceRequestForm;

