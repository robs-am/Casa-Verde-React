import React from "react";
import styled from "styled-components";

const StyleContainer = styled.section`
  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  z-index: 1;
`;

const StyleImagem = styled.img`
  background-image: url(/public/images/comoConseguir.png);
`;

const ComoConseguir = ({img}) => {
  return (
    <>
      <StyleContainer>
        <div className="imagem">
          <img src={img} alt="planta" />
        </div>
        <div className="text">
          <p>Como Conseguir</p>
          <h2>minha planta</h2>
        </div>
      </StyleContainer>
    </>
  );
};

export default ComoConseguir;
