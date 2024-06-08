import React from 'react';
import styled from 'styled-components';
import aircondition from "../assets/amenities/aircondition.png";
import furnished from "../assets/amenities/furnished.png";
import garden from "../assets/amenities/garden.png";
import gates from "../assets/amenities/gates.png";
import parking from "../assets/amenities/parking.png";
import balcony from "../assets/amenities/balcony.png";
import pet from "../assets/amenities/pet.png";
import water from "../assets/amenities/water.png";
import maintenance from "../assets/amenities/maintainance.png";

const AmenitiesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #CDCDCD;
  padding: 20px;
`;

const AmenityRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%; // Ensure full width for even spacing
  margin-bottom: 20px; // Adds space between rows
`;

const AmenityItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%; // Ensures each item takes up 1/3 of the row for 3 items per row
`;

const AmenityIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
`;

const AmenityLabel = styled.div`
  font-family: 'Jomolhari';
  color: black;
  font-size: 18px;
  text-align: center;
`;

const Title = styled.h2`
  font-family: 'Jomolhari';
  color: black;
  margin-bottom: 30px;
  width: 100%;
  text-align: center;
  font-size: 45px;
`;

const Property = () => {
  const amenitiesData = [
    { icon: aircondition, label: "Air Conditioning" },
    { icon: furnished, label: "Furnished" },
    { icon: garden, label: "Garden" },
    { icon: gates, label: "Gates" },
    { icon: parking, label: "Parking" },
    { icon: balcony, label: "Balcony" },
    { icon: pet, label: "Pet Friendly" },
    { icon: water, label: "Water Supply" },
    { icon: maintenance, label: "Maintenance" }
  ];

  // Splitting data into rows of three
  const rows = [];
  for (let i = 0; i < amenitiesData.length; i += 3) {
    rows.push(amenitiesData.slice(i, i + 3));
  }

  return (
    <AmenitiesListContainer>
      <Title>Amenities</Title>
      {rows.map((row, index) => (
        <AmenityRow key={index}>
          {row.map(amenity => (
            <AmenityItem key={amenity.label}>
              <AmenityIcon src={amenity.icon} alt={amenity.label} />
              <AmenityLabel>{amenity.label}</AmenityLabel>
            </AmenityItem>
          ))}
        </AmenityRow>
      ))}
    </AmenitiesListContainer>
  );
};

export default Property;
