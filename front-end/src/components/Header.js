// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const Header = () => (
  <HeaderContainer>
    <div>Shalom Residency</div>
    <Nav>
      <Link to="#">Chat Now</Link>
      <Link to="#">Book a Tour</Link>
      <Link to="#">Email Us</Link>
      <span>+1 408-728-9280</span>
      <Link to="#">Virtual Tour</Link>
    </Nav>
  </HeaderContainer>
);

export default Header;
