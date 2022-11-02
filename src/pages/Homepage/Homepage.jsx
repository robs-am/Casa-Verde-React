import React from "react";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";

import "./Homepage.css"

const Homepage = () => {
  return (
    <div>
      <main>
        <Navbar img={"./images/logo2.svg"} />
        <Newsletter
          placeholder={"Insira seu email"}
          email={Newsletter.email}
          img={"./images/mail.png"}
        />
      </main>
    </div>
  );
};

export default Homepage;
