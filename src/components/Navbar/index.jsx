import styled from "styled-components";

const StyleMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1em;
  padding-inline: 0.6em;
  background-color: #f8f8f8;
  position: fixed;
  z-index: 999;
  flex-wrap: wrap;
  flex-direction: column;
  

  @media only screen and (min-width: 768px) {
    margin-block: 1em;
  }
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
    position: fixed;
    
  }
`;

const StyleLogo = styled.div`
  @media only screen and (min-width: 992px) {
    margin-left: 3em;
  }
`;

const Styleimg = styled.img`
  @media only screen and (min-width: 992px) {
    margin-left: 3.5em;
  }
`;

const StyleNav = styled.nav`
  margin-top: 1em;
  width: 100%;
  flex: 1;
  
 
  @media only screen and (min-width: 768px) {
    margin-top: 2em;
  }
  @media only screen and (min-width: 992px) {
    display: flex;
    justify-content: flex-end;
    margin-right: 2em;
    margin-top: 1.1em;
    color: transparent;
  }
`;

const StyleLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  flex-wrap: wrap;
  color: #202020;
  padding-bottom: 0.1em;
  cursor: pointer;

  a {
    text-decoration: none;
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 992px) {
    font-weight: 500;
    font-size: 16px;
    margin-top: 0;
  }
`;

const StyleLink = styled.a`
  padding-inline: 0.5em;
  font-weight: 500;

  &:hover {
    color: #4a6f2fe6;
    transition: 0.6s ease-in-out 0.1s;
  }
  @media only screen and (min-width: 992px) {
    font-weight: 500;
    font-size: 16px;
    display: flex;
    padding-inline: 0.2em;
    margin-right: 2em;
  }
`;

const Navbar = ({ img }) => {
  return (
    <StyleMenu>
      <StyleLogo>
        <Styleimg img src={img} />
      </StyleLogo>

      <StyleNav>
        <StyleLinks>
          <StyleLink>Como fazer</StyleLink>
          <StyleLink>Ofertas</StyleLink>
          <StyleLink>Depoimentos</StyleLink>
          <StyleLink>Vídeos</StyleLink>
          <StyleLink>Meu Carrinho</StyleLink>
        </StyleLinks>
      </StyleNav>
    </StyleMenu>
  );
};

export default Navbar;
