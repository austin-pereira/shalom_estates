// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import homeImage from '../assets/amenities/home.png';



const testimonials = [
  { text: "Best Facilities in the area!.", author: "" },
  { text: "Very Well Managed and Fast Maintainance Services.", author: "" },
  { text: "Best Residency to rent out in Jayapura area!", author: "" },
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
  max-width: 70%;
  height: auto;
 
`;

const TestimonialContainer = styled.div`
  display: flex;     /* Use flexbox for layout */
  align-items: center; /* Vertically align items */
  position: relative;  /* Needed for absolute positioning of arrow buttons */
  background-color: #CECECE; /* Or your preferred background color */
  padding: 150px 20px; /* Top and bottom padding and horizontal padding */
  width: 100%;         /* Full width */
  overflow: hidden;    /* Prevents overflow of children outside the container */
`;

// Wraps the text and centers it absolutely within TestimonialContainer
const TestimonialWrapper = styled.div`
  width: calc(100% - 6px); /* full width minus some padding for arrows */
  max-width: 800px; /* Maximum width to control the size on larger screens */
  margin: 0 auto;   /* Auto margins for horizontal centering */
  text-align: center; /* Ensures text is centered */
  position: relative; /* Context for positioning text content */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TestimonialText = styled.p`
font-family: 'Jomolhari', serif;
  font-size: 1.3rem;
  color: black;
  margin: 0; /* Removes default paragraph margin */
`;

const TestimonialAuthor = styled.p`
font-family: 'Jomolhari', serif;
  font-style: italic;
  color: black;
  font-size: 1rem;
`;

const ArrowButton = styled.button`
  background-color: #4CAF50; // Green
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%); // Center vertically
`;

const LeftArrowButton = styled(ArrowButton)`
  left: 250px; /* Positioned close to the left edge */
`;

const RightArrowButton = styled(ArrowButton)`
  right: 300px; /* Positioned close to the right edge */
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
  padding-bottom: 20px;
`;


const OurFutureContainer = styled.div`
  background-color: #CDCDCD;
  color: white;
  text-align: center;
  padding: 100px 20px;
  font-family: 'Jomolhari', serif;
`;

const OurFutureTitle = styled.h2`
  color: black;
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const OurFutureDescription = styled.p`
  line-height: 1.6;
  color: #2E1503;
  max-width: 600px; /* Or your desired width */
  margin: 0 auto;
  padding: 20px;
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
    setCurrentTestimonialIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      console.log('Moving to previous testimonial:', newIndex); // Debug
      return newIndex;
    });
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
          <TestimonialWrapper>
          <TestimonialText>{testimonials[currentTestimonialIndex].text}</TestimonialText>
          <TestimonialAuthor>- {testimonials[currentTestimonialIndex].author}</TestimonialAuthor>
          </TestimonialWrapper>
          <RightArrowButton onClick={nextTestimonial}>&gt;</RightArrowButton>
          </TestimonialContainer>
        <OurMissionContainer>
          <OurMissionTitle>Our Mission</OurMissionTitle>
          <OurMissionDescription>
          Shalom Residency is committed to exceeding the expectations of our residents. We believe in providing exceptional service through proactive maintenance, attentive staff, and prompt response to resident needs. Our well-designed and durable homes promote comfort and well-being, while our sustainable practices minimize our environmental impact and create a healthier community. We also prioritize community engagement, offering numerous opportunities for residents to connect, socialize, and build lasting memories together.
          
          </OurMissionDescription>
          
        </OurMissionContainer>
        <OurFutureContainer>
        <OurFutureTitle>Our Future</OurFutureTitle>
        <OurFutureDescription>
        At Shalom Residency, we envision a future where sustainable living is the norm, not the exception. We are dedicated to building a community that serves as a model for others, where residents enjoy a harmonious balance between modern comforts and environmental responsibility. Our mission is to empower families to live their best lives in a place they are proud to call home.  As part of our ongoing commitment to enhancing the Chikmagalur community, we are thrilled to announce our plans for a state-of-the-art service building. This new development will not only provide valuable amenities and services for our residents but also contribute to the growth of tourism in our beautiful region, attracting visitors who seek both modern comforts and a deep appreciation for nature.
        </OurFutureDescription>
        
        </OurFutureContainer>
        </>
  );
};

export default Home;
