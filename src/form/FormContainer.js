import React, { useState } from "react";
import { useFormik } from "formik";
import {useSelector,useDispatch} from 'react-redux'
import {isFormHidden} from '../redux/MainSlise'

const exitLogo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={30}
    height={30}
    viewBox="0 0 24 24"
    strokeWidth="0.7"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
    />
  </svg>
);



const initialValues = {
  name: "",
  email: "",
  text: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  console.log(values);
  let errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.channel) {
    errors.text = "Write any message to us";
  }

  return errors;
};

const FormContainer = () => {

  const {FormHideBoolean} = useSelector(state=>state.Data)
  const dispatch = useDispatch()


  const formic = useFormik({
    initialValues,
    onSubmit,
    validate,
  });


  return (
    <div className={FormHideBoolean?'formContainerVisible':'formContainerHidden'}>

     <div className="box">

        <button 
          onClick={()=>dispatch(isFormHidden())}
          className="formBackBtn">
          {exitLogo}
        </button>

      <form className="form" onSubmit={formic.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={formic.handleChange}
            value={formic.values.name}
            id="name"
          />
          {formic.errors.name && <span>{formic.errors.name}</span>}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            onChange={formic.handleChange}
            value={formic.values.email}
            id="email"
          />
          {formic.errors.email && <span>{formic.errors.email}</span>}
        </div>

        <div className="form-control">
          <label htmlFor="text">Message</label>
          <textarea
            type="text"
            onChange={formic.handleChange}
            value={formic.values.text}
            id="text"
          />
          {formic.errors.text && <span>{formic.errors.text}</span>}
        </div>

        <button type="submit">Send</button>
      </form>

        <div className="logBtns">
          <button>Sing up</button>
          <button>Log in</button>
       </div>

     </div>
    </div>
  );
};

export default FormContainer;
