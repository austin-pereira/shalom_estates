// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import homeImage from '../assets/home.png';



const testimonials = [
  { text: "Great place to live!", author: "Alice Johnson" },
  { text: "Love the community and amenities!", author: "Bob Smith" },
  { text: "Highly recommend Shalom Residency!", author: "Eva Davis" },
];


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
  font-family: 'Jomolhari', serif;
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
  margin-bottom: 50px;

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

const TestimonialContainer = styled.div`
  display: flex;     /* Use flexbox for layout */
  align-items: center; /* Vertically align items */
  justify-content: center; /* Horizontally center items */
  text-align: center;
  padding-top: 150px;
  padding-bottom: 150px;
  background-color: #CECECE; /* Or your preferred background color */
  width: 100%;           /* Increase container width to 80% */
  margin: 0 auto;   
  position: relative;     /* Center container on the page */
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: black; // Set text color to white
`;

const TestimonialAuthor = styled.p`
  font-style: italic;
  color: black; // Set text color to white
`;

const ArrowButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 5px;
  cursor: pointer;
  border-radius: 50%;
`;

const LeftArrowButton = styled(ArrowButton)`
  left: 100px; /* Adjust as needed for spacing */
`;

const RightArrowButton = styled(ArrowButton)`
  right: 20px; /* Adjust as needed for spacing */
`;

const OurMissionContainer = styled.div`
  background-color: #02221A; /* Or your desired dark background color */
  color: white;
  text-align: center;
  padding: 100px 20px; 
  font-family: 'Jomolhari', serif;  /* Add padding for spacing */
`;

const OurMissionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: white;
  margin-bottom: 50px; 
`;

const OurMissionDescription = styled.p`
  line-height: 1.6;
  color: white;
  text-align: center;
  max-width: 700px;; /* Limit width for readability */
  margin: 0 auto;  /* Center the description horizontally */
  padding: 20px;
`;

const LineImage = styled.img`
  position: absolute;
  bottom: 10px; /* Adjust position as needed */
  left: 50%;
  transform: translateX(-50%); 
  width: 80%;  
  height: auto;
`;

const Home = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentTestimonialIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
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
        <TestimonialContainer>
          <LeftArrowButton onClick={previousTestimonial}>&lt;</LeftArrowButton>
        <div> 
          <TestimonialText>{testimonials[currentTestimonialIndex].text}</TestimonialText>
          <TestimonialAuthor>- {testimonials[currentTestimonialIndex].author}</TestimonialAuthor>
        </div>
          <RightArrowButton onClick={nextTestimonial}>&gt;</RightArrowButton>
        </TestimonialContainer>
        <OurMissionContainer>
          <OurMissionTitle>Our Mission</OurMissionTitle>
          <OurMissionDescription>
            To provide exceptional living experiences in a vibrant, family-friendly community where comfort, 
            convenience, and sustainability harmoniously coexist.
          </OurMissionDescription>
        </OurMissionContainer>
        <OurMissionContainer>
          <OurMissionTitle>Future Plans</OurMissionTitle>
          <OurMissionDescription>
            To provide exceptional living experiences in a vibrant, family-friendly community where comfort, 
            convenience, and sustainability harmoniously coexist.
          </OurMissionDescription>
        </OurMissionContainer>
        </>
  );
};

export default Home;
