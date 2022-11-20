import React from "react";
import styled from "styled-components";

const StyleContainer = styled.section`
  margin-block: 3em;
  margin-inline: 0.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-repeat: no-repeat;
  background-position: center;
  background-image: url(/images/bc_cconseguir.png);

  //box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  z-index: 1;
`;

const StyleImg = styled.img`
  width: 350px;
  opacity: 0.7;
`;



const Styletext = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  background-color: #f8f8f8;
  width: 350px;
  position: relative;
  opacity: 0.8;
  padding-left: 0.8em;
  bottom: 70px;
`;

const Styleh2 = styled.h2`
  font-family: "Elsie Swash Caps";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 30px;

  color: #202020;
`;

const Stylep = styled.p`
  margin-top: 1em;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  margin-bottom: 0.03em;

  /* identical to box height */

  color: #202020;

  opacity: 0.9;
`;

const Styleul = styled.ul`
  margin-block: 1.6em;
  padding-left: 0.2em;
  list-style:none;
`;

const Styleli = styled.li`
  color: #202020;
  font-weight: 400;
  font-size: 18px;
  opacity: 0.7;
`;

// const Stylepng = styled.png`
// background-image: url(/images/Ellipse.png);


// `;

const ComoConseguir = ({ img }) => {
  return (
    <>
      <StyleContainer>
        <StyleImg img src={img} alt="planta" />

        <Styletext>
          <Stylep>Como Conseguir</Stylep>
          <Styleh2>minha planta</Styleh2>
          <Styleul>
            <Styleli>Escolha suas plantas</Styleli>
            <Styleli>Faça seu pedido</Styleli>
            <Styleli>Aguarde na sua casa</Styleli>
          </Styleul>
        </Styletext>
      </StyleContainer>
    </>
  );
};

export default ComoConseguir;
