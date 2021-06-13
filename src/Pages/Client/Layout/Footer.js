import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const getYear = ()=>{
    return (new Date).getFullYear();
  }
  return (
    <Container >
      <p>@{getYear()} copy right By Huyhq</p>
    </Container>
  );
};

const Container = styled.footer`
  height: 80px;
  position: relative;
  top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #3e3333;

  p {
    color: #dfe5e8 !important;
    margin: 0 !important;
    padding-bottom: 10px;

  }

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
    height: 100%;
  }
`;

export default Footer;


