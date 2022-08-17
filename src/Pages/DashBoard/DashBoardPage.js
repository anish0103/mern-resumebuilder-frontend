import React from 'react'
import { useSelector } from 'react-redux'

import './DashBoardPage.css'

const DashBoardPage = () => {
    const UserData = useSelector(state => state.userData)

    let GreetingsText = ""
    const Hours = new Date().getHours()
    console.log(Hours)
    if (Hours > 5 && Hours < 12) {
        GreetingsText = "Good morning"
    } else if (Hours >= 12 && Hours < 18) {
        GreetingsText = "Good afternoon"
    } else {
        GreetingsText = "Good evening"
    }


    return (
        <div className='dashboardpage-maincontainer'>
            <div className='dashboardpage-container'>
                <div className='dashboardpage-greetingcontainer'>
                    <p className='dashboardpage-welcometext'>Welcome back</p>
                    <p className='dashboardpage-greetingtext'>{GreetingsText}, {UserData.Details[0].Name}</p>
                </div>
            </div>
        </div>
    )
}

export default DashBoardPage