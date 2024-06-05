// src/components/SubHeader.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SubHeaderContainer = styled.div`
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const SubHeader = () => (
  <SubHeaderContainer>
    <Nav>
      <Link to="/floor-plans">Floor Plans</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/amenities">Amenities</Link>
      <Link to="/neighborhood">Neighborhood</Link>
      <Link to="/residents">Residents</Link>
      <Link to="/lease-now">Lease Now</Link>
      <Link to="/contact">Contact</Link>
    </Nav>
  </SubHeaderContainer>
);

export default SubHeader;
