import React from 'react';
 import { useFormik } from 'formik';

 const validate = values => {

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Por favor, insira um email válido.';
  }

  return errors;
};
 
 const Form = ({placeholder}) => {
   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
   const formik = useFormik({
     initialValues: {
       email: '',
     },
     onSubmit: values => {
       alert("Obrigado pela sua assinatura! Você receberá nossas novidades no email: " + (JSON.stringify(values.email, null, 2) ));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       
       <input
         id="email"
         name="email"
         type="email"
         placeholder={placeholder}
         onBlur={formik.handleBlur}
         onChange={formik.handleChange}
         value={formik.values.email}
       />
 
       <button type="submit">Assinar Newsletter</button>
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
     </form>
   );
 };

 export default Form;