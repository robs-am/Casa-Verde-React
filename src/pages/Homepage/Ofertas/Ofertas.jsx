

import React from "react";
import styled from "styled-components";


const Styleh3 = styled.h3`
font-weight: 400;
font-size: 22px;
line-height: 27px;


text-align: center;

color: #202020;

opacity: 0.5;
`;

const Ofertas = () => {

  return (
    <main>
      <Styleh3>Conheça nossas</Styleh3>
      <h1>ofertas</h1>
      <section className="ofertas-wrapper">
        <div className="Ajuga">
            <h2>Ajuga reptans</h2>
            <p>R$ 20,00</p>
            <p>Comprar </p>
        </div>
      </section>
    </main>
  );
};

export default Ofertas;
