import React from 'react'
import LoginHeader from '../../LoginHeader/LoginHeader'
import FormPage from '../Form-Page/FormPage'
import "./Login.scss"
import imageName from "../../../Assets/Images/log-in.png"

const Login = () => {
  return (
    <>
      <LoginHeader heading="Sign In" pageName="Sign-in" />
      <FormPage src={imageName} imageName="Login image" tagLine="Log In Your Account" btnName="Submit" checkData="Remember me" />
    </>
  )
}

export default Login
