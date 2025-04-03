import React from 'react'
import "./Register.css"
import LoginHeader from "../../LoginHeader/LoginHeader"
import FormPage from "../Form-Page/FormPage"
import imageName from "../../../Assets/Images/sign-up.png"

const Register = () => {
  return (
    <>
      <LoginHeader heading="Register" pageName="Register" />
      <FormPage src={imageName} imageName="Register image" tagLine="Create New Account" btnName="Sign-up" checkData="I agree with Terms and Privacy" />
    </>
  )
}

export default Register
