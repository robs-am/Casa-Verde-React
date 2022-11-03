import styled from "styled-components";

const Body = styled.body`

  @media only screen and (min-width: 992px) {
    background-image: url(/public/images/body-shape.png);
    background-repeat: no-repeat;
    background-position: right top;
  }
`;

const StyleMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-block: 1em;
  padding-inline: 0.6em;

  flex-wrap: wrap;
  flex-direction: column;
  @media only screen and (min-width: 768px){
    margin-block: 1em;
  }
  @media only screen and (min-width: 992px) 
   {
    display: flex;
    flex-direction: row;
    
  }
`;

const StyleNav = styled.nav`
  margin-top: 1em;
  width: 100%;
  flex: 1;
  @media only screen and (min-width: 768px){
    margin-top: 2em;
  }
  @media only screen and (min-width: 992px) 
   {
    display: flex;
    justify-content: flex-end;
    margin-right: 2.8em;
    margin-top: 0;
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
  @media only screen and (min-width: 768px){
    font-size: 18px;
  }
  @media only screen and (min-width: 992px){
    font-weight: 500;
    font-size: 16px;
  }
`;

const StyleLink = styled.a`
  padding-inline: 0.5em;
  font-weight: 500;

  &:hover {
    color: #4a6f2fe6;
    transition: 0.6s ease-in-out 0.1s;
  }
  @media only screen and (min-width: 992px){
    font-weight: 500;
    font-size: 16px;
  }
 
`;



const Navbar = ({ img }) => {
  return (
      
      <StyleMenu>
        <div className="logo-wrapper">
          <img src={img} />
        </div>
        
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
