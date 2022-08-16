import { React, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PublishedWithChangesRoundedIcon from '@mui/icons-material/PublishedWithChangesRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

import './DashBoard.css'
import { LoginStatusHandler } from '../../store/action/action';
import EditInformationPage from '../EditInformationPage/EditInformationPage';
import ChooseTemplatePage from '../TemplatePages/ChooseTemplatePage';

const DashBoard = () => {
  const [showState, setShowState] = useState("dashboard")
  const dispatch = useDispatch()

  const UserData = useSelector(state => state.userData)
  console.log(UserData)

  const LogoutHandler = () => {
    dispatch(LoginStatusHandler(false))
  }

  const PreviewHandler = () => {
    window.open(window.location.href + "resume/" + UserData._id, "_blank")
  }

  return (
    <div className='dashboard-maincontainer'>
      {UserData?.Template === "null" && UserData?.Details[0]?.Name === undefined && <Redirect to={`/addinformation/${UserData?._id}`} />}
      <div className='dashboard-leftcontainer'>
        <div className='dashboard-leftcontainer-namecontainer'>Resume Builder</div>
        <div className='dashboard-leftcontainer-buttoncontainer'>
          <button onClick={() => setShowState("dashboard")} className={showState === "dashboard" && "activebutton"}><HomeOutlinedIcon />Dashboard</button>
          <button onClick={() => setShowState("editdetail")} className={showState === "editdetail" && "activebutton"}><EditOutlinedIcon />Edit Details</button>
          <button onClick={() => setShowState("changetemplate")} className={showState === "changetemplate" && "activebutton"}><PublishedWithChangesRoundedIcon />Change Template</button>
          <button onClick={PreviewHandler}><OpenInNewRoundedIcon />Preview</button>
        </div>
        <div className='dashboard-leftcontainer-logoutcontainer'>
          <button onClick={LogoutHandler}><ExitToAppRoundedIcon />Logout</button>
        </div>
      </div>
      <div className='dashboard-rightcontainer'>
        {showState === "dashboard" ? "Dashboard" : showState === "editdetail" ? <EditInformationPage /> : <ChooseTemplatePage />}
      </div>
    </div>
  )
}

export default DashBoard