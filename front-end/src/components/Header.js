import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/file.png'; // Path to your logo image
 

const HeaderContainer = styled.header`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between; /* Maintains space between groups */
  align-items: center;
  padding: 0px 20px;
`;

const LeftNavLinks = styled.div` 
  display: flex; 
  align-items: center;  /* Vertically align logo and links */
  gap: 25px;
`;

const NavLink = styled(Link)`
  color: #A8A8A8;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Logo = styled.img`
  height: 80px;     
  margin-right: 25px; /* Add some space between logo and links */
`;

const ContactLink = styled(NavLink)`
  margin-left: auto;  /* Push the Contact link to the right */
  padding: 0px 50px;
  font-size: 1.2rem;
`;


const Header = () => (
  <HeaderContainer>
    <LeftNavLinks> 
      <Logo src={logo} alt="Shalom Residency Logo" />
      <NavLink to="/">About</NavLink>
      <NavLink to="/properties">Properties</NavLink>
      <NavLink to="/resident">Resident</NavLink>
      <NavLink to="/resident">Tour</NavLink>
    </LeftNavLinks>
    <ContactLink to="/contact">Contact Us</ContactLink> 
  </HeaderContainer>
);

export default Header;

