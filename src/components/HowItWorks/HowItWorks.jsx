import React from 'react'
import './HowItWorks.css'
import Image from 'next/image'
import { hitFeatures } from '@/utils/data'
import { motion } from 'framer-motion'
import { tagVariants, titleVariants } from '@/utils/animations'

const HowItWorks = () => {
    const featureVariants = {
        "offscreen": {
            scale : 0.5
        },
        "onscreen": {
            scale : 1,
            transition : {
                type : "spring",
                duration : 1.5,
            },
        },
    }
  return (
   <div className="hiw-wrapper">
    <div className="container">
        <div className="hiw-container">

            {/* head */}
            <div className="hiw-head">   
                    <motion.span
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={tagVariants}
                    style={{
                        color: 'var(--secondary-color)',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                    }}
                    >How It Works</motion.span>
                    <motion.span
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={titleVariants}
                    style={{
                         fontSize: '2.6rem',
                         color: 'var(--title-color)',
                         fontWeight: 'bold',
                         textAlign: 'center',
                         lineHeight: '3.5rem',
                         textTransform: 'capitalize'
                    }}>Unlocking potentionl along the growth journey</motion.span>
            </div>

            <div className="hiw-features">
                {
                    hitFeatures.map((feature,i) => (
                        <motion.div
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={featureVariants}
                        className='hiw-feature' key={i}>

                            {/* left side  */}
                            <motion.div
                            initial={{opacity: 0,x : -100}}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    type: "easeIn",
                                    duration: 1,
                                    delay: 0.7
                                }
                            }}
                            className="detail">
                                <span style={{
                                 lineHeight: '2rem',
                                 fontSize: '1.4rem',
                                 color: 'var(--text-color)'}}
                                className="des">0{i + 1}</span>
                                <span style={{
                                fontSize: '2rem',
                                color: 'var(--title-color)',
                                fontWeight: '600',
                                textAlign: 'center',
                                lineHeight: '3rem',
                                textTransform: 'capitalize'}}
                                className='sec-title'>{feature.title}</span>
                                <span style={{
                                  color: 'var(--text-color)',
                                  fontSize: '1.1rem',
                                  lineHeight: '1.8rem'}}>{feature.des}</span>
                            </motion.div>

                            {/* right side  */}
                            <div className="icon">
                                <Image style={{translate: "50% 0rem"}} src = {feature.icon} width={128} height={128} alt='feature'/>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    </div>
   </div>
  )
}

export default HowItWorks
