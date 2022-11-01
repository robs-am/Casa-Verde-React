import "./NavBar.css";

const Navbar = ({img}) => {
  return (
    <div className="menu">
      <div className="logo-wrapper">
        <img src={img} />
      </div>
      
      <nav>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="/">Como fazer</a>
          </li>
          <li className="nav-link">
            <a href="/">Ofertas</a>
          </li>
          <li className="nav-link">
            <a href="/">Depoimentos</a>
          </li>
          <li className="nav-link">
            <a href="/">Vídeos</a>
          </li>
          <li className="nav-link">
            <a href="/">Meu Carrinho</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};



export default Navbar;
