import { React, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import './LogInPage.css'
import Loading from '../Loading/Loading';
import LoginImage from '../../assets/signin.jpg'
import ErrorModal from '../../Components/ErrorModal/ErrorModal'
import { LoginUser, googleLoginSignup } from '../../store/action/action';

const LogInPage = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [errorContent, setErrorContent] = useState("")

    const history = useHistory()
    const dispatch = useDispatch()

    const emailvalid = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

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
        try {
            setLoading(true)
            await dispatch(googleLoginSignup(data))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
            setErrorContent(error)
            return
        }
    }

    const LoginHandler = async () => {
        if (email.trim().length === 0 || password.trim().length === 0 || !email.match(emailvalid) || password.length < 5) {
            return toast.error("Please Enter Proper Input");
        } else {
            const LoginData = { Email: email, Password: password }
            try {
                setLoading(true)
                await dispatch(LoginUser(LoginData))
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(true)
                setErrorContent(error)
                return
            }
        }
    }

    const ModalHandler = () => {
        setError(false)
    }

    return (
        <>
            {loading && <Loading />}
            <ErrorModal visible={error} title={'Error'} content={errorContent} ModalHandler={ModalHandler} />
            <ToastContainer />
            <motion.div variants={ContainerVariant} initial="hidden" animate="show" exit="hidden" className='authpage-maincontainer'>
                <div className='authpage-leftcontainer'>
                    <motion.div variants={ElementVariant} className='authpage-leftsubcontainer'>
                        <img src={LoginImage} alt="Login" />
                    </motion.div>
                </div>
                <div className='authpage-rightcontainer'>
                    <motion.div variants={ElementVariant} className='authpage-formcontainer'>
                        <motion.div variants={ElementVariant} className='authpage-formname'>Log In</motion.div>
                        <motion.div variants={SubElementVariant} className='authpage-inputcontainer'>
                            <label>Email</label>
                            <input name='email' onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email' />
                        </motion.div>
                        <motion.div variants={SubElementVariant} className='authpage-inputcontainer'>
                            <label>Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter your Password' />
                        </motion.div>
                        <motion.div variants={SubElementVariant} className='authpage-loginbuttoncontainer'>
                            <button onClick={LoginHandler}>Log in</button>
                        </motion.div>
                        <motion.div variants={SubElementVariant} className='authpage-separator'>
                            <div></div>
                            <p>or login with</p>
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
                            <p>don't have an account?</p>
                            <div></div>
                        </motion.div>
                        <motion.div variants={SubElementVariant} className='authpage-singupbuttoncontainer'>
                            <button onClick={() => history.push('/signup')}>Sign Up</button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default LogInPage