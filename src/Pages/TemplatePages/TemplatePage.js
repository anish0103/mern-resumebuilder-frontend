import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import Loading from '../Loading/Loading';
import Template1 from './ResumeTemplates/Template1/Template1';
import Template2 from './ResumeTemplates/Template2/Template2';
import { BACKENDLINK } from '../../store/action/action';

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

    console.log(template, Data)

    useEffect(() => {
        FetchUserDataHandler(userId)
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <div>{template === "Template1" ? <Template1 Data={Data} /> : <Template2 Data={Data}/>}</div>
    )
}

export default TemplatePage