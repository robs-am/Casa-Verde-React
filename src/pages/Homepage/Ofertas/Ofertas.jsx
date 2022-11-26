import React from "react";
import styled from "styled-components";

const StyleSection = styled.section`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  margin-top: 1em;
`;

const Styleh3 = styled.h3`
  font-weight: 400;
  font-size: 22px;
  line-height: 27px;

  text-align: center;

  color: #202020;

  opacity: 0.5;
`;

const Styleh2 = styled.h2`
 font-family: 'Elsie Swash Caps';
font-style: normal;
font-weight: 900;
font-size: 52px;
line-height: 60px;
text-align: center;
`;

const StyleOfertas = styled.section `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

const StylePlanta = styled.div `
background-image: url(/images/bgOferta.png);
`;

const StylePlantah2 = styled.h2 `
font-family: 'Elsie Swash Caps';
font-style: normal;
font-weight: 900;
font-size: 28px;
line-height: 37px;

color: #202020;
`;


const Ofertas = () => {
  return (
    <StyleSection>
      <Styleh3>Conheça nossas</Styleh3>
      <Styleh2>ofertas</Styleh2>
      <StyleOfertas>
        <StylePlanta>
          <StylePlantah2>Ajuga reptans</StylePlantah2>
          <p>R$ 20,00</p>
          <p>Comprar </p>
        </StylePlanta>
      </StyleOfertas>
    </StyleSection>
  );
};

export default Ofertas;
