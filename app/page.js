"use client"
import Navbar from '@/components/Navbar/Navbar';
import './page.module.css'
import Hero from '@/components/Hero/Hero';
import BrandingVideo from '@/components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/components/WhatWeDo/WhatWeDo';
import PricingTable from '@/components/PricingTable/PricingTable';
import {motion,useAnimation} from 'framer-motion'
import UsersList from '@/components/UsersList/UsersList';
import Footer from '@/components/Footer/Footer';


export default function Home() {
const controls = useAnimation()
  return (
    <motion.div className="app" animate={controls}>
      <Navbar/>
      <Hero/>
      <BrandingVideo/>
      <WhatWeDo/>
      <motion.div
      onViewportEnter={() => controls.start({
        backgroundColor: "var(--secondary-color)"
      })}
      onViewportLeave={() => controls.start({
        backgroundColor: "white"
      })} 
      viewport={{amount: 0.4}}
      >
      <PricingTable/>
      <UsersList/>
      </motion.div>
      <Footer/>
    </motion.div>
  );
}