import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import io from 'socket.io-client'
import Loading from '../Loading/Loading';
import Template1 from './ResumeTemplates/Template1/Template1';
import Template2 from './ResumeTemplates/Template2/Template2';
import { BACKENDLINK } from '../../store/action/action';

let socket;

const TemplatePage = () => {
    const [Data, setData] = useState({
        Education: [],
        Work: [],
        Projects: [],
        Skills: []
    })
    const [loading, setLoading] = useState(false)
    const [template, setTemplate] = useState("")
    const { userId } = useParams();

    const UserData = useSelector(state => state.userData)

    const FetchUserDataHandler = async id => {
        try {
            setLoading(true)
            const response = await fetch(BACKENDLINK + `/api/users/${id}`)
            const userdata = await response.json();
            if (!response.ok) {
                throw userdata.message
            }
            setData(userdata.Details[0])

            setTemplate(userdata.Template)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        FetchUserDataHandler(userId)
    }, [])

    useEffect(() => {
        socket = io(BACKENDLINK)
    }, [])

    useEffect(() => {
        if (socket) {
            socket.on('connect', () => {
                if (UserData?._id === undefined || (UserData?._id !== userId)) {
                    socket.emit('updatecount', { id: userId })
                }
            });
        }
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <div>{template === "Template1" ? <Template1 id={userId} Data={Data} /> : <Template2 id={userId} Data={Data} />}</div>
    )
}

export default TemplatePage