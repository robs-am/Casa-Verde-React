import React from "react";
import styled from "styled-components";

const StyleContainer = styled.section`
  margin-top: 1.5em;
  padding-inline: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-repeat: no-repeat;
  background-position: center;
  background-image: url(/images/bc_cconseguir.png);

  z-index: 1;
`;

const StyleImg = styled.img`
  width: 100%;
  opacity: 0.5;
`;

const Styletext = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  background-color: #f8f8f8;

  width: 100%;
  position: relative;
  bottom: 150px;
  opacity: 0.89;
  padding-left: 1.5em;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);

  p {
    margin-top: 1em;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 0.03em;
    width: 100%;
    color: #202020;

    opacity: 0.9;
  }

  h2 {
    font-family: "Elsie Swash Caps";
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    margin-top: 0.3em;
    margin-bottom: 0.5em;
    line-height: 30px;
    color: #202020;
  }

 
`;

const Styleul = styled.ul`
 
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  opacity: 1;
  list-style: none;
  background-color: #f8f8f8;
  margin-bottom: 1em;
`;

const Styleli = styled.li`
  &::before {
    content: url(/images/Ellipse_svg.svg);
  }
  color: #202020;
  font-weight: 400;
  font-size: 18px;

  display: flex;
  gap: 0.6em;
  align-items: center;
  padding-bottom: 0.5em;
  
`;

const ComoConseguir = ({ img }) => {
  return (
    <StyleContainer>
      <StyleImg img src={img} alt="planta" />

      <Styletext>
        <p>Como Conseguir</p>
        <h2>minha planta</h2>
      
        <Styleul>
          <Styleli>Escolha suas plantas</Styleli>
          <Styleli>Faça seu pedido</Styleli>
          <Styleli>Aguarde na sua casa</Styleli>
        </Styleul>
      </Styletext>
    </StyleContainer>
  );
};

export default ComoConseguir;
