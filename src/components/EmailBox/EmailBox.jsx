"use client"
import React from 'react'
import './EmailBox.css'
import { LuMail } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { containerVariants } from '@/utils/animations'

const EmailBox = () => {
  return (
    <motion.div
      initial={{ width: "0.5rem", borderRadius: "100%" }}
      whileInView={{
        width: "70%", borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1,
        },
      }}
      className="emailbox">

      {/* icon */}
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true
        }}
        variants={containerVariants(0.6)}
      >
        <LuMail size={30} color='grey' />
      </motion.div>

      {/* input */}
      <input
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true
        }}
        variants={containerVariants(0.7)}
        type="email"
        placeholder='Enter email' />

      {/* get funded button  */}
      <div 
      initial="offscreen"
      whileInView={"onscreen"}
      viewport={{
        once : true
      }}
      variants={containerVariants(0.9)}
      className="getFunded">
        Get Funded
      </div>
    </motion.div>
  )
}

export default EmailBox
