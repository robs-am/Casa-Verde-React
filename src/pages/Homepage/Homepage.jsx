import React from "react";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";

import styled from "styled-components";


const Body = styled.body`
  margin: 0;
  padding: 0;
  
  box-sizing: border-box;

  @media only screen and (min-width: 992px) {
    background-image: url(/public/images/body-shape.png);
    background-repeat: no-repeat;
    background-position: right top;
    z-index: -1;

    display: flex;
    align-items: left;
    flex-direction: column;
    

  }
`;

const Homepage = () => {
  return (
    <div>
      
        
        <Body>
          <Navbar img={"./images/logo2.svg"} />
          <Newsletter
            placeholder={"Insira seu email"}
            email={Newsletter.email}
            img={"./images/mail.png"}
          />
        </Body>
      
    </div>
  );
};

export default Homepage;
