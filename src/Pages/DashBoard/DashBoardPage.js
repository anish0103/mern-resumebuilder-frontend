import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import CopyAllRoundedIcon from '@mui/icons-material/CopyAllRounded';

import './DashBoardPage.css'
import Loading from '../Loading/Loading'
import { resetViewCount } from '../../store/action/action';

const DashBoardPage = props => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const UserData = useSelector(state => state.userData)

    let GreetingsText = ""
    const Hours = new Date().getHours()
    if (Hours > 5 && Hours < 12) {
        GreetingsText = "Good morning"
    } else if (Hours >= 12 && Hours < 18) {
        GreetingsText = "Good afternoon"
    } else {
        GreetingsText = "Good evening"
    }

    const ContainerVariant = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.4,
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
                type: "spring",
                stiffness: 50
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
                type: "spring",
                stiffness: 50
            }
        }
    }

    const CopyToClipboardHandler = () => {
        navigator.clipboard.writeText(window.location.href + "resume/" + props.id)
        toast.success("Copied to clipboard")
    }

    const ResetViewCountHandler = async () => {
        try {
            setLoading(true)
            await dispatch(resetViewCount({id: props.id}))
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {loading && <Loading />}
            <ToastContainer />
            <div className='dashboardpage-maincontainer'>
                <motion.div variants={ContainerVariant} initial="hidden" animate="show" exit="hidden" className='dashboardpage-container'>
                    <motion.div variants={ContainerVariant} className='dashboardpage-greetingcontainer'>
                        <motion.p variants={ElementVariant} className='dashboardpage-welcometext'>Welcome back</motion.p>
                        <motion.p variants={SubElementVariant} className='dashboardpage-greetingtext'>{GreetingsText}, {UserData.Details[0]?.Name || "Name"}</motion.p>
                    </motion.div>
                    <motion.div className='dashboardpage-informationcontainer'>
                        <motion.div variants={ContainerVariant} className='dashboardpage-viewcountcontainer'>
                            <motion.p variants={ContainerVariant} className='dashboardpage-viewcountcontainer-viewtext'>Your Resume Views <div title="Reset" onClick={ResetViewCountHandler} ><RestartAltRoundedIcon /></div></motion.p>
                            <motion.p variants={ContainerVariant} className='dashboardpage-viewcountcontainer-counttext'>{UserData?.ViewCount}</motion.p>
                        </motion.div>
                        <motion.div variants={ContainerVariant} className='dashboardpage-copylinkcontainer'>
                            <motion.p variants={ContainerVariant} className='dashboardpage-viewcountcontainer-viewtext'>Your Resume Link <div title='copy to clipboard' onClick={CopyToClipboardHandler}><CopyAllRoundedIcon /></div></motion.p>
                            <motion.p variants={ContainerVariant} className='dashboardpage-viewcountcontainer-linktext'><a target="_blank" rel="noreferrer" href={window.location.href + "resume/" + props.id}>View Your Resume</a></motion.p>
                        </motion.div>
                        {/* <motion.div variants={ContainerVariant} className='dashboardpage-copylinkcontainer'>

                        </motion.div> */}
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default DashBoardPage