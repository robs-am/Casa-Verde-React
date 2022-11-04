import React from "react";
import { useState } from "react";

const Form = ({ placeholder }) => {
  const [form, setForm] = useState({
    email: "",
  });

  const handleChange = (e) => {;
    let newProp = form;
    newProp[e.target.name] = e.target.value 
   
    setForm({...newProp}) 
     //faz o update do valor antigo do input com
    //o valor digitado
  }
  return (
    <form>
      <div>
        <input
          type="text"
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          required={true}
        />
       {/*  //a cada interação o usuário o oChange atualiza o input */}
      </div>
      <div>
        <button type="submit">Assinar Newsletter</button>
      </div>
    </form>
  );
};

export default Form;
