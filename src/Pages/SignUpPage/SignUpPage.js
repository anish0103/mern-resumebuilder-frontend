import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion'

import '../LogInPage/LogInPage.css'
import SignUpImage from '../../assets/signup.jpg'

const SignUpPage = () => {
  const ContainerVariant = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2,
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

  const googlesigninhandler = async data => {
    const response = await fetch("https://anish-react-google-login.herokuapp.com/googlesignin", {
      method: 'POST',
      body: JSON.stringify({ token: data.credential }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const responsedata = await response.json()
    if (!response.ok) {
      return alert("Something went wrong! Try again later.")
    }
    console.log(responsedata)
  }

  return (
    <motion.div variants={ContainerVariant} initial="hidden" animate="show" exit="hidden" className='authpage-maincontainer'>
      <div className='authpage-leftcontainer'>
        <motion.div variants={ElementVariant} className='authpage-leftsubcontainer'>
          <img src={SignUpImage} alt="SignUp" />
        </motion.div>
      </div>
      <div className='authpage-rightcontainer'>
        <motion.div variants={ElementVariant} className='authpage-formcontainer'>
          <motion.div variants={ElementVariant} className='authpage-formname'>Sign Up</motion.div>
          <motion.div variants={SubElementVariant} className='authpage-inputcontainer'>
            <label>Email</label>
            <input type='text' placeholder='Enter your email' />
          </motion.div>
          <motion.div variants={SubElementVariant} className='authpage-inputcontainer'>
            <label>Password</label>
            <input type="password" placeholder='Enter your Password' />
          </motion.div>
          <motion.div variants={SubElementVariant} className='authpage-loginbuttoncontainer'>
            <button>Sign up</button>
          </motion.div>
          <motion.div variants={SubElementVariant} className='authpage-separator'>
            <div></div>
            <p>or signup with</p>
            <div></div>
          </motion.div>
          <motion.div variants={SubElementVariant}>
            <GoogleLogin
              onSuccess={googlesigninhandler}
              onError={() => {
                console.log('Login Failed');
              }} />
          </motion.div>
          <motion.div variants={SubElementVariant} className='authpage-separator'>
            <div></div>
            <p>already have an account?</p>
            <div></div>
          </motion.div>
          <motion.div variants={SubElementVariant} className='authpage-singupbuttoncontainer'>
            <button>Log In</button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SignUpPage