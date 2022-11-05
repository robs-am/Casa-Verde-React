import { React, useState } from "react";

import React from "react";

const Form = () => {
  //state para atualizar os valores
  const [values, setValues] = useState({
    email: "",
  });

  //função que altera os valores no submit
  function onChange(e) {
    setValues({
      ...values,
      [e.target.email]: e.target.values,
    });
  }
  return (<div>
    <form>
      <input type="email" name="email" value={values.name} onChange={onChange} />
    </form>
  </div>);
};

export default Form;
