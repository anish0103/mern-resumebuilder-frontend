import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import './Navigation.css'

const Navigation = () => {
  const ContainerVariant = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.4,
      }
    }
  }
  const ElementVariant = {
    hidden: {
      y: -40,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150
      }
    }
  }

  return (
    <motion.div className='navigation-maincontainer'>
      <motion.div variants={ContainerVariant} initial="hidden" animate="show" className='navigation-container'>
        <motion.div variants={ElementVariant}>
          <NavLink className='navigation-name' to='/'>Resume Builder</NavLink>
        </motion.div>
        <motion.div variants={ElementVariant}>
          <NavLink className='navigation-loginbutton' to='/login'>Log In</NavLink>
          <NavLink className='navigation-signupbutton' to='/signup'>Sign Up</NavLink>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Navigation