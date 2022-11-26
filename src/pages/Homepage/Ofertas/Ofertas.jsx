import React from "react";
import styled from "styled-components";

const StyleSection = styled.section`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
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

const Ofertas = () => {
  return (
    <StyleSection>
      <Styleh3>Conheça nossas</Styleh3>
      <Styleh2>ofertas</Styleh2>
      <section className="ofertas-wrapper">
        <div className="Ajuga">
          <h2>Ajuga reptans</h2>
          <p>R$ 20,00</p>
          <p>Comprar </p>
        </div>
      </section>
    </StyleSection>
  );
};

export default Ofertas;
