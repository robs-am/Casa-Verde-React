import React from "react";
import styled from "styled-components";

import Products from './../../../components/data/Products';


const StyleSection = styled.section`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  margin-block: 0.5em;
  background-color: #ffffff;
`;

const StyleOfertas = styled.section`
  margin-top: 0.5em;
  padding-inline: 1.5em;

  h2 {
    font-family: "Elsie Swash Caps";
    font-style: normal;
    font-weight: 900;
    font-size: 52px;
    line-height: 60px;
    text-align: center;
  }

  h3 {
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;

    text-align: center;

    color: #202020;

    opacity: 0.5;
  }
`;

const StylePlantaCard = styled.div`
  background-image: url(/images/bgOferta.png);
  width: 100%;
  height: 200px;

  display: flex;
  align-items: center;

  flex-direction: row;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

  .plantaNome {
    font-family: "Elsie Swash Caps";
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    line-height: 37px;

    color: #202020;
  }

  .preco {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  .comprar {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    color: #ffcb47;
  }
`;
const StylePlantaImg = styled.img`
  width: 40%;
`;

const StylePlantaTexto = styled.div``;

const Ofertas = ({ img }) => {
  return (
    <StyleSection>
      {/* Chamadas das ofertas */}
      <StyleOfertas>
        <h3>Conheça nossas</h3>
        <h2>ofertas</h2>
      </StyleOfertas>
      <StyleOfertas>
        {/* Lista de plantas */}
        <StylePlantaCard>
         <Products />
        </StylePlantaCard>
      </StyleOfertas>
    </StyleSection>
  );
};

export default Ofertas;
