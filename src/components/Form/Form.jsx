import React from "react";

import styled from "styled-components";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

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
  width: 27em;
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
  width: 27em;

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

const StyleFormikerror = styled.div`
  @media only screen and (min-width: 992px) {
  }
`;

//validação para que o usuário preencha
//todas as infos de forma correta

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Campo Obrigatório";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email inválido";
  }

  return errors;
};

//envio de emails após a confirmação de cadastro avisando
//o usuário
function sendEmail(e) {
  e.preventDefault();
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
}

const Form = ({ placeholder }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    //validação do cadastro com alerta visual para o usuário que o email foi
    //cadastrado

    validate,
    onSubmit: (values) => {
      alert(
        "Obrigado! O email: " +
          JSON.stringify(values.email, null, 2) +
          " foi cadastrado com sucesso"
      );
    },
  });

  //mensagem que será recebida na caixa de entrada do usuário
  //como confirmação de cadastro

  return (
    <StyleForm onSubmit={formik.handleSubmit}>
      <StyleNews>
        <StyleEmailIcon />
        <StyleEmailInput
          id="email"
          name="email"
          type="email"
          placeholder={placeholder}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <StyleButton type="submit">Assinar Newsletter</StyleButton>
      </StyleNews>
      {formik.touched.email && formik.errors.email ? (
        <StyleFormikerror>{formik.errors.email}</StyleFormikerror>
      ) : null}
    </StyleForm>
  );
};

export default Form;
