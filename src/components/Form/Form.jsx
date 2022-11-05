import { React, useState } from "react";



const Form = () => {
  //state para atualizar os valores
  const [values, setValues] = useState({
    email: "",
  });

  //função que altera os valores no submit
  function onChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.values,
    });
  }
  return (<div>
    <form>
      <div>
      <input type="email" name="email" value={values.email} onChange={onChange} required={true}/>
      </div>
      <button type="submit">Assinar Newsletter</button>
    </form>
  </div>);
};

export default Form;
