import React from 'react';
import styled from 'styled-components';
import aircondition from "../assets/amenities/airconditioning.png";
import furnished from "../assets/amenities/furnished.png";
import garden from "../assets/amenities/garden.png";
import gates from "../assets/amenities/gates.png";
import parking from "../assets/amenities/parking.png";
import balcony from "../assets/amenities/balcony.png";
import pet from "../assets/amenities/pet.png";
import water from "../assets/amenities/water.png";



// Styled component for the amenity icon and text
const AmenitiesListContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
background-color: #333; // Adjust the background color as needed
padding: 20px;
`;

const Amenities = ({ icon, label }) => {
  const amenitiesData = [
    { icon: aircondition, label: "Air Conditioning" },
    { icon: furnished, label: "Furnished" },
    { icon: garden, label: "Garden" },
    { icon: gates, label: "Gates" },
    { icon: parking, label: "Parking" },
    { icon: balcony, label: "Balcony" },
    { icon: pet, label: "Pet Friendly" },
    { icon: water, label: "Water Supply" }
  ];
  
  
  return (
    <AmenitiesListContainer>
      {amenitiesData.map(amenity => (
        <Amenities key={amenity.label} icon={amenity.icon} label={amenity.label} />
      ))}
    </AmenitiesListContainer>
  );
};

export default Amenities;
