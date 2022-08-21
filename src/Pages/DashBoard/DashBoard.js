import { React, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { motion } from 'framer-motion'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PublishedWithChangesRoundedIcon from '@mui/icons-material/PublishedWithChangesRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

import './DashBoard.css'
import { LoginStatusHandler } from '../../store/action/action';
import EditInformationPage from '../EditInformationPage/EditInformationPage';
import ChooseTemplatePage from '../TemplatePages/ChooseTemplatePage';
import DashBoardPage from './DashBoardPage';

const DashBoard = () => {
  const [showState, setShowState] = useState("dashboard")
  const dispatch = useDispatch()

  const UserData = useSelector(state => state.userData)

  const LogoutHandler = () => {
    dispatch(LoginStatusHandler(false))
  }

  const PreviewHandler = () => {
    window.open(window.location.href + "resume/" + UserData._id, "_blank")
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

  return (
    <div className='dashboard-maincontainer'>
      {UserData?.Template === "null" && UserData?.Details[0]?.Name === undefined && <Redirect to={`/addinformation/${UserData?._id}`} />}
      <motion.div variants={ContainerVariant} initial="hidden" animate="show" exit="hidden" className='dashboard-leftcontainer'>
        <motion.div variants={ElementVariant} className='dashboard-leftcontainer-namecontainer'>Resume Builder</motion.div>
        <motion.div variants={ContainerVariant} className='dashboard-leftcontainer-buttoncontainer'>
          <motion.button variants={ContainerVariant} onClick={() => setShowState("dashboard")} className={showState === "dashboard" && "activebutton"}><HomeOutlinedIcon />Dashboard</motion.button>
          <motion.button variants={ContainerVariant} onClick={() => setShowState("editdetail")} className={showState === "editdetail" && "activebutton"}><EditOutlinedIcon />Edit Details</motion.button>
          <motion.button variants={ContainerVariant} onClick={() => setShowState("changetemplate")} className={showState === "changetemplate" && "activebutton"}><PublishedWithChangesRoundedIcon />Change Template</motion.button>
          <motion.button variants={ContainerVariant} onClick={PreviewHandler}><OpenInNewRoundedIcon />Preview</motion.button>
        </motion.div>
        <motion.div className='dashboard-leftcontainer-logoutcontainer'>
          <motion.button variants={ContainerVariant} onClick={LogoutHandler}><ExitToAppRoundedIcon />Logout</motion.button>
        </motion.div>
      </motion.div>
      <div className='dashboard-rightcontainer'>
        {showState === "dashboard" ? <DashBoardPage id={UserData?._id} /> : showState === "editdetail" ? <EditInformationPage ShowStateHandler={() => setShowState("dashboard")} /> : <ChooseTemplatePage />}
      </div>
    </div>
  )
}

export default DashBoard