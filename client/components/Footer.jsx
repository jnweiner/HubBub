import React from 'react';
import styled from 'styled-components';
import HoverText from './HoverText.jsx';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #294059;
  font-size: 12px;
  margin-top: 20px;
  padding: 10px 0;
`;

const FooterOptionsContainer = styled.span`
  display: flex;
  justify-content: space-between;
  width: 18%;
`;

const FooterOption = ({ text }) => (
  <HoverText
    effect="background"
    text={text}
    regColor="#f5f5f5"
    hoveredColor="rgba(41, 64, 89, .2)"
  />
);

const Footer = () => (
  <FooterContainer>
    <FooterOptionsContainer>
      <FooterOption text="About" />
      |
      <FooterOption text="Contact" />
      |
      <FooterOption text="Terms of Use" />
      |
      <FooterOption text="Privacy" />
    </FooterOptionsContainer>
    <span>
      <i className="far fa-copyright" />
      2021 Jordan Weiner
    </span>
  </FooterContainer>
);

export default Footer;