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

  text-align: left;

  color: #202020;

  opacity: 0.5;
`;

const Ofertas = () => {
  return (
    <StyleSection>
      <Styleh3>Conheça nossas</Styleh3>
      <h1>ofertas</h1>
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
