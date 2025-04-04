import React from 'react'
import "./LoginHeader.scss"
import {AiFillHome} from "react-icons/ai"

const LoginHeader = (props) => {
  return (
    <>
    <div className='common-padding Login-header'>
        <div className="Login-Heading">
            <span>{props.heading}</span>
        </div>
        <div className="Login-icon">
            <span>
                <a href="/"><AiFillHome /></a>
            </span>
            <span>
                {props.pageName}
            </span>
        </div>
    </div>
    </>
  )
}

export default LoginHeader