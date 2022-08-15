import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const DashBoard = () => {
  const UserData = useSelector(state => state.userData)
  console.log(UserData)

  return (
    <div>
      {UserData?.Template === "null" && UserData?.Details[0]?.Name === undefined && <Redirect to={`/addinformation/${UserData?._id}`} />}
      <Link to={`/addinformation/${UserData?._id}`}>Form</Link>
      <Link to='/editinformation'>Edit</Link>
    </div>
  )
}

export default DashBoard