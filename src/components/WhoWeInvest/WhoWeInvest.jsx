import React from 'react'
import './WhoWeInvest.css'
import { whoWeInvest } from '@/utils/data'
import { motion } from 'framer-motion'
import { containerVariants, tagVariants, titleVariants } from '@/utils/animations'

const WhoWeInvest = () => {
    return (
        <div className="wwi-wrapper">
            <div className="container">
                <div className="wwi-container">

                    {/* left  */}
                    <div className="wwi-left">
                        <div className="head">

                            <motion.span 
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={tagVariants}
                            style={{
                                color: "var(--secondary-color)",
                                fontSize: "1.5rem",
                                fontWeight: "bold"
                            }}>Who we invest in</motion.span>
                            <motion.span 
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={titleVariants}
                            style={{
                                fontSize: " 2.6rem",
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center",
                                lineHeight: "3.5rem",
                                textTransform: "capitalize"
                            }}>{" "} Digital buisness <br />  with early transaction</motion.span>
                        </div>

                        <div className="wwi-features">
                            {
                                whoWeInvest.map((feature, i) => (

                                    <motion.div
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants(i * 0.05 + 1)}
                                    className="wwi-feature" key={i}>

                                        <span
                                        style={{
                                            lineHeight: "2rem",
                                            fontSize: "1.4rem",
                                            color: "var(--fourth-color)"
                                        }}>{feature.title}</span>
                                        <span                                     
                                        style={{
                                            textAlign: "justify",
                                            color: "white",
                                            fontSize: "1.1rem",
                                            lineHeight: "1.8rem"
                                        }}
                                        className='text'>{feature.des}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>

                    {/* right side  */}
                    <div className="wwi-right">
                        <motion.img
                         initial="offscreen"
                         whileInView={"onscreen"}
                         variants={containerVariants(0.5)}
                        src="persons.png" alt="persons" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WhoWeInvest
