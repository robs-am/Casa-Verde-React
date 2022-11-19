import { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { validateYupSchema } from "formik";

const StyleForm = styled.form`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    height: 100px;
    width: 35em;
  }
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    height: 75px;
    width: 35em;
  }
`;

const StyleNews = styled.div``;

const StyleEmailIcon = styled.div``;

const StyleEmailInput = styled.input`
  background: #ffffff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  padding-block: 1.6em;
  padding-left: 3.4em;
  border: none;
  width: 25em;
  background-image: url(/public/images/mail.svg);

  background-repeat: no-repeat;
  background-position: 10px;

  @media only screen and (min-width: 768px) {
    width: 31.5em;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  }
  @media only screen and (min-width: 992px) {
    width: 25em;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  }
`;

const StyleButton = styled.button`
  background: #ffcb47;
  box-shadow: 10px 10px 30px rgba(255, 203, 71, 0.3);
  padding: 1.6em;
  color: #ffffff;
  border: none;
  cursor: pointer;
  width: 25em;

  &:hover {
    filter: brightness(95%);
  }

  @media only screen and (min-width: 768px) {
    width: 30em;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    font-size: 14px;
    font-weight: 400;
  }

  @media only screen and (min-width: 992px) {
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 15em;
    font-size: 14px;
    font-weight: 400;
  }
`;


function Form2({ placeholder }) {
  const [email, setEmail] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    //alerta para preencher todos os campost
    if (email === "") {
      alert("Preencha todos os campos");
      return;
    }

   ;
    //alerta de email cadastrado
   
    const emailInput = input.value
    alert("O email " + emailInput + "foi cadastrado com sucesso");
  }
  const templateParams = {
    email: "",
  };

  emailjs
    .send(
      "service_vb1bu4c",
      "template_bnnrl1c",
      templateParams,
      "KC5RY0MDSmJA7jIP1"
    )
    .then(
      (response) => {
        console.log("Email Enviado", response.status, response.text);
      },
      (error) => {
        console.log("Failed", error);
      }
    );

  return (
    
      <StyleForm onSubmit={sendEmail}>
        <StyleNews>
          <StyleEmailIcon />
          <StyleEmailInput
            type="text"
            placeholder={placeholder}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <StyleButton type="submit">Assinar Newsletter</StyleButton>
        </StyleNews>
      </StyleForm>
    
  );
}

export default Form2;
