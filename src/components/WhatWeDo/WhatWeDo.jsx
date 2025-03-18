import React from 'react'
import './WhatWeDo.css'
import { features } from '@/utils/data'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/utils/animations'

const WhatWeDo = () => {
    return (
        <div className="wwd-wrapper">
            <div className="container">
                <div className="wwd-container">
                    <div className="wwd-head">
                        <motion.span
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={tagVariants}
                            className='tag'
                            style={{
                                color: 'var(--secondary-color)',
                                fontSize: '1.5rem',
                                fontWeight: 'bold'
                            }}
                        >Services</motion.span>
                        <motion.span
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={titleVariants}
                            className='title'
                            style={{
                                fontSize: '2.6rem',
                                color: 'var(--title-color)',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                lineHeight: '3.5rem',
                                textTransform: 'capitalize'
                            }}
                        >{" "} Empowering founders with non dilutive capital and execution expertsie</motion.span>
                        <motion.span
                            initial="offscreen"
                            whileInView={"onscreen"}
                            variants={desVariants}
                            className='des'
                            style={{
                                lineHeight: '2rem',
                                fontSize: '1.4rem',
                                color: 'var(--text-color)'
                            }}
                        >Here is how we can evaluate</motion.span>
                    </div>

                    {/* Two blocks  */}
                    <div className="wwd-blocks">
                        {/* First block  */}
                        <div className="wwd-block">
                            <motion.span
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={titleVariants}
                                style={{
                                    fontSize: '2rem',
                                    color: 'var(--title-color)',
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    lineHeight: '3rem',
                                    textTransform: 'capitalize'
                                }}
                            >Blue Advances</motion.span>
                            <motion.span
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={desVariants}
                                style={{
                                    color: 'var(--text-color)',
                                    fontSize: '1.1rem',
                                    lineHeight: '1.8rem'
                                }}
                            >
                            Fund recurring growth expenses e.g. customer quisitions, inventory and expertsie
                            </motion.span>
                            <div className="block-features">
                                {
                                    features.slice(0, 3).map((feature, i) => (
                                        <motion.div 
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        variants={containerVariants((i + 1) * 0.1)}
                                        className="block-feature" key={i}>
                                            <Image
                                                src={feature.icon}
                                                alt="feature"
                                                width={60}
                                                height={60} />
                                            <span>{feature.title}</span>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                        {/* second block  */}
                        <div className="wwd-block">
                            <motion.span
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={titleVariants}
                                style={{
                                    fontSize: '2rem',
                                    color: 'var(--title-color)',
                                    fontWeight: 600,
                                    textAlign: 'center',
                                    lineHeight: '3rem',
                                    textTransform: 'capitalize'
                                }}
                            >Blue Seed</motion.span>
                            <motion.span
                                initial="offscreen"
                                whileInView={"onscreen"}
                                variants={desVariants}
                                style={{
                                    color: 'var(--text-color)',
                                    fontSize: '1.1rem',
                                    lineHeight: '1.8rem'
                                }}
                            >
                            Fund one-offs to scale e.g. product, hiring
                            </motion.span>
                            <div className="block-features">
                                {
                                    features.slice(3, 7).map((feature, i) => (
                                        <motion.div 
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        variants={containerVariants((i + 1) * 0.1)}
                                        className="block-feature" key={i}>
                                            <Image
                                                src={feature.icon}
                                                alt="feature"
                                                width={60}
                                                height={60} />
                                            <span>{feature.title}</span>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* support block  */}
                    <motion.div 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants(0.3)}
                    className="wwd-support">
                        <div>
                            <span className="sec-title"
                                style={{
                                    fontSize: '2.6rem',
                                    color: 'var(--title-color)',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    lineHeight: '3.5rem',
                                    textTransform: 'capitalize'
                                }}
                            >Blue Growth Support</span>
                            <span
                                style={{
                                    lineHeight: '2rem',
                                    fontSize: '1.4rem',
                                    color: 'var(--text-color)'
                                }}
                            >Data insights and full stack expertise to supercharge growth</span>
                        </div>

                        {/* right side  */}
                        <div>
                            <span className="text"
                                style={{
                                    color: 'var(--text-color)',
                                    fontSize: '1.1rem',
                                    lineHeight: '1.8rem'
                                }}
                            >
                            Actionable data insights by connecting revenue, marketing and social media platforms
                            </span>
                            <span className="text"
                                style={{
                                    color: 'var(--text-color)',
                                    fontSize: '1.1rem',
                                    lineHeight: '1.8rem'
                                }}
                            >
                            On demand execution expertise at cost or revenue share across preposition design, engineering, marketing analysis, partnerships, brand, intellectual property, market expansion, talent management
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo