import React from "react";
import styled from "styled-components";

import Form from "../Form/Form";

const StyleHero = styled.section`
  display: flex;
  align-items: left;

  flex-direction: column;
  padding-inline: 1.8em;

  background-color: #ffe29a;

  @media only screen and (min-width: 768px) {
    padding-inline: 4em;
  }
  @media only screen and (min-width: 992px) {
    padding-left: 4em;
    margin-top: 8em;
    margin-left: 3em;

    background-color: transparent;

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
      background-size: 750px 750px;
      width: 787px;
      height: 1183px;
      position: absolute;
      right: 0%;
      top: 0%;
      pointer-events: none;
    }
  }
`;

const StyleWrapper = styled.div`
  margin-top: 9em;
`;

const Stylep1 = styled.p`
  margin-top: 2em;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  margin-block: 1em;
  opacity: 0.9;

  @media only screen and (min-width: 768px) {
    margin-top: 2.5em;
    font-size: 26px;
    margin-bottom: 0.2em;
  }

  @media only screen and (min-width: 992px) {
    width: 30em;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    opacity: 0.7;
    margin-block: 0;
  }
`;
const Styleh1 = styled.h1`
  font-family: "Elsie Swash Caps", cursive;
  font-style: normal;
  font-weight: 900;
  font-size: 70px;
  line-height: 60px;
  margin-bottom: 0.6em;

  color: #202020;

  @media only screen and (min-width: 768px) {
    font-size: 95px;
    padding-right: 1em;
    line-height: 70px;
    max-width: 8em;
    height: 1.8em;
    margin-block: 0.3em;
  }
  @media only screen and (min-width: 992px) {
    font-size: 82px;
    line-height: 70px;
    margin-bottom: 0.5em;
    margin-top: 0.2em;
  }
`;

const Stylep2 = styled.p`
  font-size: 16px;
  margin-bottom: 2em;
  line-height: 26px;
  text-align: left;

  @media only screen and (min-width: 768px) {
    width: 28em;
    font-size: 22px;
    line-height: 34px;
    margin-top: 0.5em;
  }
  @media only screen and (min-width: 992px) {
    width: 30em;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
  }
`;

const Newsletter = ({ email, placeholder }) => {
  return (
    <StyleHero>
      <StyleWrapper>
        <Stylep1>Sua casa com as</Stylep1>
        <Styleh1>melhores plantas</Styleh1>
        <Stylep2>
          Encontre aqui uma vasta sele????o de plantas para decorar a sua casa e
          torn??-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </Stylep2>
      </StyleWrapper>
      <Form />
    </StyleHero>
  );
};

export default Newsletter;
