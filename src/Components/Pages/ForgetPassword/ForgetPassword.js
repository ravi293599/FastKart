import React from 'react'
import LoginHeader from '../../LoginHeader/LoginHeader'
import FormPage from '../Form-Page/FormPage'
import imageName from "../../../Assets/Images/forgot-password.png"

const ForgetPassword = () => {
  return (
    <>
      <LoginHeader heading="Forgot Password" pageName="Forgot Password" />
      <FormPage src={imageName} imageName="Forget Password image" tagLine="Forgot your password" btnName="Forget Password" />
    </>
  )
}

export default ForgetPassword
