import React from 'react'
import './OurDiff.css'
import { motion, useAnimation } from 'framer-motion'
import { features, ourDiffFeatures } from '@/utils/data'
import Image from 'next/image'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/utils/animations'

const OurDiff = () => {
  const controls = useAnimation()
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          {/* our head  */}
          <div className="od-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              style={{
                fontSize: '1.9rem',
                // color: 'var(--title-color)',
                // fontWeight: 'bold',
                textAlign: 'center',
                lineHeight: '3.5rem',
                textTransform: 'capitalize'
              }}
              className='tag'>Our Difference</motion.span>
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
              }}
              className='title'>Fair capital, hassle free</motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
              style={{
                lineHeight: '2rem',
                fontSize: '1.4rem',
                // color: 'var(--text-color)'
              }}
              className='text'>We provide capital that iss unbiased, flexible and non dilutive with the execution support to accelerate value creation</motion.span>
          </div>

          {/* feature  */}
          <div className="od-features">
            {
              ourDiffFeatures.map((feature, i) => (
                <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={containerVariants((i + 1) * 0.1)}
                className='od-feature' key={i}>
                  <Image src={feature.icon} alt="feature" width={120} height={120} />
                  <span
                    style={{
                      fontSize: '2rem',
                      color: 'var(--title-color)',
                      fontWeight: 600,
                      textAlign: 'center',
                      lineHeight: '3rem',
                      textTransform: 'capitalize'
                    }}
                  >{feature.title}</span>
                  <span style={{
                    color: 'var(--text-color)',
                    fontSize: '1.1rem',
                    lineHeight: '1.8rem'
                  }}>{feature.des}</span>
                </motion.div>
              ))
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default OurDiff