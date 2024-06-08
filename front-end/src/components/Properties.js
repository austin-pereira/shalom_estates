import React from 'react';
import styled from 'styled-components';

// Styled component for the property card
const PropertyCard = styled.div`
  background-color: #022221;  // Dark green or any color of choice
  color: white;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  width: 300px; // Fixed width or make it responsive as needed
`;

const PropertyTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const PropertyInfo = styled.p`
  font-size: 16px;
  margin: 5px 0;
`;

const Properties = ({ address, postalCode, units }) => {
  return (
    <PropertyCard>
      <PropertyTitle>{address}</PropertyTitle>
      <PropertyInfo>{postalCode}</PropertyInfo>
      <PropertyInfo>Number of Units: {units}</PropertyInfo>
      <PropertyInfo>View Floor Plan</PropertyInfo>
    </PropertyCard>
  );
};

export default Properties;
