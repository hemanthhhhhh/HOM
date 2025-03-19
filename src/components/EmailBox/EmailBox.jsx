"use client"
import React from 'react'
import './EmailBox.css'
import { motion } from 'framer-motion'
import { containerVariants } from '@/utils/animations'

const EmailBox = () => {
  const [result, setResult] = React.useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a7e17c0f-0f25-4edf-b5bf-79c49df80e28");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.section
    initial={{ width: "0.5rem", borderRadius: "100%" }}
      whileInView={{
        width: "70%", borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1,
        },
      }}
    className='contact'>
      <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className='field' required placeholder='Enter your name' name='name' />
        </div>
        <div className="input-box">
          <label>Email</label>
          <input type="email" className='field' required placeholder='Enter your email' name='email' />
        </div>
        <div className="input-box">
          <label>Message</label>
          <textarea type="text" className='field-mess' required placeholder='Enter your message' name='message'></textarea>
        </div>
        <button
        onSubmit={onSubmit}
        initial="offscreen"
          whileInView={"onscreen"}
          viewport={{
            once : true
          }}
          variants={containerVariants(0.9)}
        type='submit'>Send Message</button>
      </form>
    </motion.section>
  )
}

export default EmailBox
