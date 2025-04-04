import React, { useState, useEffect } from "react";
import "./FormPage.scss";
import {toast} from "react-toastify";
import { useDispatch } from "react-redux"
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import goggleLogo from "../../../Assets/Images/google.png";
import facebookLogo from "../../../Assets/Images/facebook.png";
import { LoginSchema, signUpSchema } from "../../../Schemas";
import api from './axios'
import { login } from "../../../store/slices/authSlice";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: ""
};

const FormPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Register, Setregister] = useState(false)
  const [Forget, Setforget] = useState(false)
  // const [IsLogin, SetisLogin] = useState(false)
  const isLogin = (payload) => {
    dispatch(login(payload));
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik((Register)?
  {
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
        fetch("http://localhost:3030/user",{
        method: "POST",
        headers: {'content-type':'application/json'},
        body: JSON.stringify(values)
      }).then((res) =>{
        toast.success('Registered successfully');
        navigate('/login')
      }).catch((err)=>{
        toast.error('Failed :' +err.message);
      });
    }
  }:  {
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: (e, action) => {
          let email = e.email
          let password = e.password
          api.get('/user').then(e => {
            let authData = e.data;
            console.log(authData);
            let authDataObj = authData.find(e => e.email === email)
            if(authDataObj.email === email && authDataObj.password === password) {
                toast.success('Successfull login');
                localStorage.setItem('auth', JSON.stringify(authDataObj.id));
                sessionStorage.setItem('name',authDataObj.name);
            } else {
                toast.error('Something went wrong');
            }
        }).then(()=>{
            isLogin(true);
        }).then(()=>{
            navigate('/')
        })
        action.resetForm();
        }
  });
  console.log(errors);
  useEffect(()=>{
    if(props.btnName === "Sign-up"){
      Setregister(true);
    }
    if(props.btnName === "Forget Password"){
      Setforget(true);
    }
  }); 
  return (
    <>
      <div className="Form-row">
        <div className="form-img">
          <img src={props.src} alt={props.imgName} />
        </div>
        <div className="form-container">
          <h3>Welcome To Fastkart</h3>
          <p>{props.tagLine}</p>
              <form onSubmit={handleSubmit}>
              {Register && <div className="floating-field">
                  <input
                    placeholder="Enter Your Full Name"
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`
                    form-control 
                    logForm 
                    `}
                  />
                  {errors.name && touched.name ? <span className="error">{errors.name}</span>:null}
                </div>}
                <div className="floating-field">
                  <input
                    placeholder="Enter Your Email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`
                    form-control 
                    logForm 
                    `}
                  />
                  {errors.email && touched.email ? <span className="error">{errors.email}</span>:null}
                </div>
                {!Forget && <>
                  <div className="floating-field">
                  <input
                    placeholder="Enter Your Password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`
                    form-control 
                    logForm 
                    `}
                  />
                  {errors.password && touched.password ? <span className="error">{errors.password}</span>:null}
                </div>
                </>}
                {Register && <>
                  <div className="floating-field">
                  <input
                    placeholder="Enter Your Confirm Password"
                    type="password"
                    name="confirm_password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`
                    form-control 
                    logForm 
                    `}
                  />
                  {errors.confirm_password && touched.confirm_password ? <span className="error">{errors.confirm_password}</span>:null}
                </div>
                </>}
                {!Forget && <>
                  <div className="checkbox-container">
                  <div className="check-label">
                    <label className="custom-checkbox">
                      <input type="checkbox" />
                      <span className="check-span"></span>
                      <p>{props.checkData}</p>
                    </label>
                  </div>
                  {!Register ? <>
                  <div className="checkbox-content">
                    <a href="/forgetPassword">Forget Password?</a>
                  </div>
                  </>:"" }
                </div>
                </>}
                <button type="submit" className="btn-form">
                  {props.btnName}
                </button>
              </form>
          {!Forget && <>
            <div className="log-in-button">
            <div className="or">OR</div>
            <ul>
              <li>
                <a href="https://www.google.com/">
                  <img src={goggleLogo} alt="Google btn" />
                  Log In with Google
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={facebookLogo} alt="Facebook btn" />
                  Log In with Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="sign-up-box">
            {Register? 
            <>
            <p>Already have an account?</p>
            <a href="/login">Log In</a>
            </>:<>
            <p>Don't have an account?</p>
            <a href="/register">Sign Up</a>
            </>}
          </div>
          </>}
        </div>
      </div>
    </>
  );
};

export default FormPage;
