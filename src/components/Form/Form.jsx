import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import.meta.env.VITE_SECRET_KEY

const StyleForm = styled.form`
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

  @media only screen and (min-width: 700px) {
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

  @media only screen and (min-width: 700px) {
    width: 15em;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  }
  @media only screen and (min-width: 992px) {
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  }
`;

const StyleFormikerror = styled.div`
  @media only screen and (min-width: 992px) {
  }
`;

//validação//
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Campo Obrigatório";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email inválido";
  }

  return errors;
};

//envio de emails

const envioEmail = require("@sendgrid/mail");


const Form = ({ placeholder }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    //validação do cadastro com alerta para o usuário que o email foi
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

  //mensagem que será recebida pelo usuário
  //como confirmação de cadastro

  const onComplete = (fields) => {
    const message = {
      to: "lixor19291@jernang.com",
      from: fields.email,
      subject: fields.subject,
      html: `
    <p><strong>Name:</strong>${fields.name}</p>
    <p>${fields.message}</p>`,
    };

    envioEmail.send(message);
  };

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
