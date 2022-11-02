import React from "react";
import "./Newsletter.css";

const Newsletter = ({ email, placeholder }) => {
  return (
    <section className="hero-section">
      <p className="hero-section-p1">Sua casa com as</p>
      <h1>melhores plantas</h1>
      <p className="hero-section-p2">
        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
        torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e
        assine nossa newsletter para saber das novidades da marca.
      </p>
      <form className="form-newsletter">
        <div className="emailIcon" alt="email icon" />
        <input
          type="email"
          id="email"
          placeholder={placeholder}
          required={true}
        />
        {email}
        <button className="btn-newsletter" type="submit">
          Assinar Newsletter
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
