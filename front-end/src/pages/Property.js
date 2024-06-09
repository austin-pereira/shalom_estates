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
const PropertiesContainer = styled.div`
display: flex;
flex-direction: column; // Main container in column for title alignment
align-items: center; // Ensures everything is centered vertically
justify-content: center; // Center content vertically
background-color: #02221A; // Dark green background
padding: 20px 0; // Padding on top and bottom
`;



const PropertiesTitle = styled.h2`
  font-family: 'Jomolhari'; // Specified font
  color: white;
  font-size: 36px; // Increased size for emphasis
  margin-bottom: 20px; // Space between title and cards
`;

const PropertyCard = styled.div`
  background-color: #02221A; // Dark green background
  color: white; // Text color
  margin: 10px; // Adjusted to give space between cards
  padding: 20px; // Internal padding for content
  width: 280px; // Control width for more rectangular shape
  height: 370px; // Control height
  border: 2px solid white; // White border for visual separation
  border-radius: 15px; // Rounded corners
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); // Subtle shadow
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const PropertiesCardsRow = styled.div`
  display: flex; // Allows horizontal layout
  justify-content: center; // Centers cards within this container
  flex-wrap: wrap; // Wraps cards to next line on smaller screens
  width: 100%; // Full width to accommodate multiple cards
`;

const PropertyTitle = styled.h3`
  font-family: 'Jomolhari'; // Specified font
  color: white;
  margin: 5px 0; // Reduced margin for a compact look
  font-size: 22px; // Font size for property title
`;

const PropertyDetail = styled.p`
  font-family: 'Jomolhari'; // Specified font
  color: white;
  margin: 3px 0; // Tight spacing between details
  font-size: 18px; // Readable text size
`;

const PropertyLink = styled.a`
  color: lightblue;
  cursor: pointer;
  text-decoration: none;
  margin: 5px 0; // Spacing around the link
  font-size: 18px; // Uniform font size with other details
  &:hover {
    text-decoration: underline; // Underline on hover for emphasis
  }
`;



const Property = () => {
  const amenitiesData = [
    { icon: furnished, label: "Furnished" },
    { icon: gates, label: "Gated Community" },
    { icon: garden, label: "Garden" },
    { icon: parking, label: "Parking" },
    { icon: water, label: "Water Supply" },
    { icon: maintenance, label: "Fast Maintenance" },
    { icon: aircondition, label: "Great Ventilation" },
    { icon: balcony, label: "Balcony" },
    { icon: pet, label: "Pet Friendly" },
    
    
  ];

  // Splitting data into rows of three
  const rows = [];
  for (let i = 0; i < amenitiesData.length; i += 3) {
    rows.push(amenitiesData.slice(i, i + 3));
  }

  const propertiesData = [
    {
      address: "Shalom Residency",
      city: "Koppa-Taluka, 577123",
      units: 8,
      link: "#"
    },
    {
      address: "Sector-5, Vrindavan Society",
      city: "Belapur, 400614",
      units: 1,
      link: "#"
    }
  ];

  return (
    <div>
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
    <PropertiesContainer>
      <PropertiesTitle>Our Properties</PropertiesTitle>
      <PropertiesCardsRow> 
        {propertiesData.map((property, index) => (
          <PropertyCard key={index}>
            <PropertyTitle>{property.address}</PropertyTitle>
            <PropertyDetail>{property.city}</PropertyDetail>
            <PropertyDetail>No of Units: {property.units}</PropertyDetail>
            <PropertyLink href={property.link}>Floor Plan</PropertyLink>
          </PropertyCard>
        ))}
      </PropertiesCardsRow>
    </PropertiesContainer>
    </div>
  );
};

export default Property;
