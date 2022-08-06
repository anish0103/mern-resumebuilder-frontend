import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';

import './HomePage.css'

const HomePage = () => {
  const ContainerVariant = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.4,
      }
    }
  }
  const ElementVariant = {
    hidden: {
      x: -40,
      opacity: 0
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
        type: "spring",
        stiffness: 150
      }
    }
  }
  const SubElementVariant = {
    hidden: {
      y: -50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <motion.div variants={ContainerVariant} initial="hidden" animate="show" exit="hidden" className='homepage-maincontainer'>
      <div className='homepage-leftcontainer'>
        <motion.div variants={ElementVariant} className='homepage-leftsubcontainer'>
          <motion.p variants={ElementVariant}>TURN ON YOUR CAREER</motion.p>
          <motion.h3 variants={SubElementVariant} >Boost your chances of <br /> landing that dream job</motion.h3>
          <motion.p variants={SubElementVariant} >Create eye catching resume using one of our <br /> templates in just a few steps</motion.p>
          <motion.div variants={SubElementVariant} >
            <NavLink className='homepage-createbutton' to='/'>Create Now</NavLink>
          </motion.div>
        </motion.div>
      </div>
      <div className='homepage-rightcontainer'>
        <motion.div variants={ElementVariant} className='homepage-rightsubcontainer'>
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_4DLPlW.json"
            style={{ height: '100%', width: '100%' }}
          ></Player>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HomePage