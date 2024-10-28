import { React, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

import './UserListPage.css'
import Loading from '../Loading/Loading';
import Avtar from '../../assets/avatar.png'

const UserListPage = () => {

    const [userList, setUserList] = useState([])
    const [loading, setLoading] = useState(false)
    const UserData = useSelector(state => state.userData)

    const BACKENDLINK = process.env.REACT_APP_BACKEND_URL

    const fetchUsers = async () => {
        const response = await fetch(BACKENDLINK + `/api/users/`, {
            headers: { 'Access-Control-Allow-Origin': '*' }
        })
        const userdata = await response.json();
        if (!response.ok) {
            throw userdata.message
        }
        setUserList(userdata.filter(data => data.Details.length > 0 && data?.IsActive != undefined && data._id != UserData._id))
        // console.log(userList)
        setLoading(false)
    }
    
    useEffect(() => {
        fetchUsers()
    }, [])
    
    const resumeOpenFunction = (id) => {
        console.log(id)
        window.open(window.location.href + "resume/" + id, "_blank")
    }
    
    const UserActiveSwitchFunction = async (id) => {
        setLoading(true)
        const responseData = { id: id }
        const response = await fetch(BACKENDLINK + `/api/users/changeactivestatus/`, {
            method: 'POST',
            body: JSON.stringify(responseData),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
        const data = await response.json()
        console.log(data)
        fetchUsers()
        toast.success(data.IsActive == true ? "User Activation Completed" : "User Deactivation Completed")
    }

    return (
        <>
            {loading && <Loading />}
            <ToastContainer />
            <div className="userlistpage-maincontainer">
                <div className='userlistpage-container'>
                    {userList.map((data) => {
                        return <div className='userlistpage-usermaincontainer'>
                            <div className='userlistpage-userimagecontainer'>
                                <img src={Avtar} />
                            </div>
                            <div className='userlistpage-userdetailcontainer'>
                                <div className='userlistpage-usernamecontainer'>
                                    <p>{data.Details[0].Name}</p>
                                </div>
                                <div className='userlistpage-actionbuttoncontainer'>
                                    <button id={data._id} onClick={(e) => resumeOpenFunction(e.target.id)} >Preview</button>
                                    <button id={data._id} onClick={(e) => UserActiveSwitchFunction(e.target.id)} >{data.IsActive == true ? "Deactivate" : "Activate"}</button>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </>

    )
}

export default UserListPage