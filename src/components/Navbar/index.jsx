import styled from "styled-components";

const StyleMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-block: 1em;
  padding-inline: 0.6em;

  flex-wrap: wrap;
  flex-direction: column;
`;

const StyleNav = styled.nav`
  margin-top: 1em;
  width: 100%;
  flex: 1;
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
`;

const StyleLink = styled.a`
  padding-inline: 0.5em;
  font-weight: 500;

  &:hover {
    color: #4a6f2fe6;
    transition: 0.6s ease-in-out 0.1s;
  }
`;

/*   menu.nav-links {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;

    flex-wrap: wrap;
    color: #202020;
    padding-bottom: 0.1em;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }

  .nav-link,
  a {
    padding-inline: 0.5em;
    font-weight: 500;
  }

  &:hover,
  a:hover {
    color: #4a6f2fe6;
    transition: 0.6s ease-in-out 0.1s;
  }
`;
 */

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
