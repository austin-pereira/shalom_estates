// src/components/Layout.js
import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const Main = styled.main`

`;

const Footer = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: #f1f1f1;
`;

const Layout = ({ children }) => (
  <div>
    <Header />
    <Main>{children}</Main>
    <Footer>
      <p>&copy; {new Date().getFullYear()} Shalom Residency. All rights reserved.</p>
    </Footer>
  </div>
);

export default Layout;
