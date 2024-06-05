// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import homeImage from '../assets/home.png';


const AboutUsContainer = styled.div`
  display: flex;
  background-color: #02221A;

  min-height: 100vh;
  width: 100%;
  margin: 0;
`;

const LeftContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const RightContainer = styled.div`
  flex: 1;
  width: 40%;
  background-color: black;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutUsTitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;
const AboutUsDescription = styled.p`
  color: white;
  text-align: center;
  line-height: 1.6;
  margin-bottom: 30px;

  /* New styles for block-like appearance */
  width: 80%;            /* Adjust the width as needed */
  margin: 0 auto;        /* Center the block horizontally */
  padding: 20px;         /* Add padding for spacing */
  border-radius: 10px;   /* Optional: Add rounded corners */
  /* Optional: Add background color or a subtle box-shadow */
`;

const TourButton = styled.button`
  background: linear-gradient(to right, #488299, #205375); /* Add linear gradient */
  color: white;          /* Text color white */
  padding: 15px 30px;    /* Increase padding for better look */
  border: none;
  border-radius: 25px;   /* Rounded corners to match image */
  font-size: 1.2rem;
  font-weight: bold;     /* Make text bold */
  cursor: pointer;
  transition: all 0.3s ease; /* Add smooth transition for hover effect */

  &:hover {
    transform: translateY(-2px); /* Add slight lift on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
  }
`;

const AboutUsImage = styled.img`
  max-width: 60%;
  height: auto;
 
`;

const Home = () => (
  <AboutUsContainer>
      <LeftContainer>
        <AboutUsTitle>About Us</AboutUsTitle>
        <AboutUsDescription>
          Looking for a home that combines comfort, convenience, and a welcoming community? 
          Look no further than Shalom Residency in Chikmagalur. Our residents enjoy top-notch maintenance, 
          proximity to essential services, and a family-friendly atmosphere.
        </AboutUsDescription>
        <TourButton to="/tour">TOUR</TourButton>
      </LeftContainer>
      <RightContainer>
        <AboutUsImage src={homeImage} alt="About" />
      </RightContainer>
    </AboutUsContainer>
);

export default Home;
