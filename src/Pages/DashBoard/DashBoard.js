import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const DashBoard = () => {
  const UserData = useSelector(state => state.userData)
  console.log(UserData)
  return (
    <div>
      <Link to={`/addinformation/${UserData?._id}`}>Form</Link>
    </div>
  )
}

export default DashBoard