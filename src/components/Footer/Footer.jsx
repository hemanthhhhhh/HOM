import React from 'react'
import './Footer.css'
import EmailBox from '../EmailBox/EmailBox'

const Footer = () => {
  return (
   <div className="f-wrapper">
    <div className="container">
        <div className="f-container">
            <EmailBox/>

            <span className="text">
                Made by Hemant
            </span>
        </div>
    </div>
   </div>
  )
}

export default Footer
