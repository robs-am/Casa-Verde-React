import React from "react";
import styled from "styled-components";



const StyleHero = styled.section`
  display: flex;
  align-items: left;
  flex-direction: column;
  padding-inline: 1.8em;
  background-color: #ffe29a;
  height: 100vh;

  @media only screen and (min-width: 700px) {
    padding-inline: 4em;
  }
  @media only screen and (min-width: 992px) {
    margin-block: 1em;
    
    background-color: transparent;
    z-index: -1;

    &::before {
      content: "";
      background-image: url(/public/images/background-hero.png);

      opacity: 0.1;
      background-size: cover;
    }

    &::after {
      content: "";
      background-image: url(/public/images/planta-hero.svg);
      background-repeat: no-repeat;
      width: 787px;
      height: 1183px;
      position: absolute;
      right: 0%;
      top: 0%;
      pointer-events: none;
    }
  }
`;

const Styleh1 = styled.h1`
  font-family: "Elsie Swash Caps", cursive;
  font-style: normal;
  font-weight: 900;
  font-size: 75px;
  line-height: 60px;
  margin-bottom: 0.6em;

  color: #202020;

  @media only screen and (min-width: 700px) {
    font-size: 75px;
    padding-right: 1em;
    line-height: 70px;
    max-width: 8em;
    height: 1.8em;
  }
  @media only screen and (min-width: 992px) {
    font-size: 82px;
    line-height: 70px;
    margin-bottom: 0.5em;
  }
`;

const Stylep1 = styled.p`
  margin-top: 1em;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 0.8em;
  opacity: 0.9;

  @media only screen and (min-width: 992px) {
    width: 30em;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    opacity: 0.7;
  }
`;

const Stylep2 = styled.p`
  font-size: 16px;
  margin-bottom: 1em;
  line-height: 26px;

  @media only screen and (min-width: 700px) {
    width: 30em;
    font-size: 18px;
  }
  @media only screen and (min-width: 992px) {
    width: 30em;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }
`;

const StyleForm = styled.form`
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 75px;
  }
`;

const StyleEmailIcon = styled.div``;

const StyleEmailInput = styled.input`
  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  padding-block: 1.6em;
  padding-left: 3.4em;
  border: none;

  background-image: url(/public/images/mail.svg);

  background-repeat: no-repeat;
  background-position: 10px;

  @media only screen and (min-width: 700px) {
    width: 40em;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  }
`;

const StyleButton = styled.button`
  background: #ffcb47;
  box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);
  padding: 1.6em;
  color: #ffffff;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(95%);
  }

  @media only screen and (min-width: 700px) {
    width: 40em;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  }
`;

const Newsletter = ({ email, placeholder }) => {
  return (
    
      <StyleHero>
        <Stylep1>Sua casa com as</Stylep1>
        <Styleh1>melhores plantas</Styleh1>
        <Stylep2>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </Stylep2>
        <StyleForm>
          <StyleEmailIcon />
          <StyleEmailInput placeholder={placeholder} required={true} />
          {email}
          <StyleButton>Assinar Newsletter</StyleButton>
        </StyleForm>
      </StyleHero>
   
  );
};

export default Newsletter;
