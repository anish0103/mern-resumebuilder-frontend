import { React, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import Loading from '../Loading/Loading'
import { addInformationForm } from '../../store/action/action';

const EditInformationPage = () => {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        Education: [],
        Work: [],
        Projects: [],
        Skills: []
    })
    const history = useHistory();
    const dispatch = useDispatch();

    const UserData = useSelector(state => state.userData)

    useEffect(() => {
        setFormData(UserData.Details[0])
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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

    const DataHandler = (name, value, index, fieldvalue) => {
        const Data = formData;
        if (name === "Education") {
            Data.Education[index][fieldvalue] = value
            setFormData({ ...formData, Data })
        } else if (name === "Work") {
            Data.Work[index][fieldvalue] = value
            setFormData({ ...formData, Data })
        } else if (name === "Project") {
            Data.Projects[index][fieldvalue] = value
            setFormData({ ...formData, Data })
        } else if (name === "Skill") {
            Data.Skills[index] = value
            setFormData({ ...formData, Data })
        } else {
            Data[name] = value
            setFormData({ ...formData, [name]: value })
        }
    }

    const SubmitHandler = async () => {
        if (formData?.Name !== undefined || formData?.RoleTitle !== undefined || formData?.Description !== undefined || formData?.Email !== undefined || formData?.PhoneNumber !== undefined || formData?.Location !== undefined || formData?.Email !== undefined || formData.Education.length !== 0 || formData.Skills.length !== 0) {
            setLoading(true)
            await dispatch(addInformationForm(formData, UserData?._id))
            setLoading(false)
            history.replace('/')
        } else {
            alert("Please Enter Basic Details such as Name, RoleTitle, Description, Email, Phone Number, Location, Education And Skills")
        }
    }

    const EducationAddHandler = () => {
        formData.Education.push({ Name: "", SchoolName: "", StartDate: "", EndDate: "" })
        setFormData({ ...formData, Education: formData.Education })
    }

    const EducationDeleteHandler = index => {
        formData.Education.splice(index, 1)
        setFormData({ ...formData, Education: formData.Education })
    }

    const WorkAddHandler = () => {
        formData.Work.push({ Role: "", Company: "", StartDate: "", EndDate: "" })
        setFormData({ ...formData, Work: formData.Work })
    }

    const WorkDeleteHandler = index => {
        formData.Work.splice(index, 1)
        setFormData({ ...formData, Work: formData.Work })
    }

    const ProjectAddHandler = () => {
        formData.Projects.push({ Name: "", Link: "" })
        setFormData({ ...formData, Projects: formData.Projects })
    }

    const ProjectDeleteHandler = index => {
        formData.Projects.splice(index, 1)
        setFormData({ ...formData, Projects: formData.Projects })
    }

    const SkillAddHandler = () => {
        formData.Skills.push("")
        setFormData({ ...formData, Skills: formData.Skills })
    }

    const SkillDeleteHandler = index => {
        formData.Skills.splice(index, 1)
        setFormData({ ...formData, Skills: formData.Skills })
    }

    return (
        <>
            {loading && <Loading />}
            <div className='personalinformation-maincontainer'>
                <motion.div variants={ContainerVariant} initial="hidden" animate="show" exit="hidden" className='personalinformation-container'>
                    <motion.div variants={ElementVariant} className='personalinformation-titlecontainer'>
                        <p>Edit your details</p>
                    </motion.div>
                    <motion.p variants={SubElementVariant}>Personal Details</motion.p>
                    <motion.div variants={SubElementVariant} className='personalinformation-personaldetailcontainer'>
                        <div className='personalinformation-horizontalcontainer'>
                            <div className='personalinformation-inputcontainer'>
                                <label>Name</label>
                                <input value={formData?.Name} onChange={(e) => DataHandler("Name", e.target.value)} type="text" placeholder='Enter your name' />
                            </div>
                            <div className='personalinformation-inputcontainer'>
                                <label>Email</label>
                                <input value={formData?.Email} onChange={(e) => DataHandler("Email", e.target.value)} type="email" placeholder='Enter your email' />
                            </div>
                        </div>
                        <div className='personalinformation-horizontalcontainer'>
                            <div className='personalinformation-inputcontainer'>
                                <label>Phone Number</label>
                                <input value={formData?.PhoneNumber} onChange={(e) => DataHandler("PhoneNumber", e.target.value)} type="number" placeholder='Enter your phone number' />
                            </div>
                            <div className='personalinformation-inputcontainer'>
                                <label>Location</label>
                                <input value={formData?.Location} onChange={(e) => DataHandler("Location", e.target.value)} type="text" placeholder='Enter your location. For example: Toranto, Canada' />
                            </div>
                        </div>
                        <div className='personalinformation-horizontalcontainer'>
                            <div className='personalinformation-inputcontainer'>
                                <label>Portfolio Link (if have one)</label>
                                <input value={formData?.PortfolioLink} onChange={(e) => DataHandler("PortfolioLink", e.target.value)} type="text" placeholder='Enter your Portfolio link' />
                            </div>
                            <div className='personalinformation-inputcontainer'>
                                <label>Github Link (if have one)</label>
                                <input value={formData?.GithubLink} onChange={(e) => DataHandler("GithubLink", e.target.value)} type="text" placeholder='Enter your GitHub link' />
                            </div>
                        </div>
                        <div className='personalinformation-horizontalcontainer'>
                            <div className='personalinformation-inputcontainer'>
                                <label>Role Title</label>
                                <input value={formData?.RoleTitle} onChange={(e) => DataHandler("RoleTitle", e.target.value)} type="text" placeholder='Enter your role title. For example: Full Stack Developer' />
                            </div>
                            <div className='personalinformation-inputcontainer'>
                                <label>LinkedIn Profile Link (if have one)</label>
                                <input value={formData?.LinkedInProfileLink} onChange={(e) => DataHandler("LinkedInProfileLink", e.target.value)} type="text" placeholder='Enter your LinkedIn profile link' />
                            </div>
                        </div>
                        <div className='personalinformation-inputcontainer'>
                            <label>Short Description</label>
                            <textarea value={formData?.Description} onChange={(e) => DataHandler("Description", e.target.value)} placeholder='For Eg: To obtain a responsible career, where I can optimally utilize my education, qualification as well as a gained professional experience for making significant contribution in a progressive and dynamic organization.' />
                        </div>
                    </motion.div>
                    <motion.div variants={SubElementVariant} className='personalinformation-sectiontitle'>
                        <p>Education Details</p>
                        <button className='personalinformation-addbutton' onClick={EducationAddHandler}><ControlPointRoundedIcon /> Add</button>
                    </motion.div>
                    {formData.Education.length > 0 && <div className='personalinformation-educationdetailcontainer'>
                        {formData.Education.map((data, index) => {
                            return (
                                <>
                                    <p>Course Detail {index + 1}</p>
                                    <hr />
                                    <div className='personalinformation-horizontalcontainer'>
                                        <div className='personalinformation-inputcontainer'>
                                            <label>Couse Name</label>
                                            <input value={data?.Name} onChange={(e) => DataHandler("Education", e.target.value, index, "Name")} type="text" placeholder='Enter your course name' />
                                        </div>
                                        <div className='personalinformation-inputcontainer'>
                                            <label>School/University Name</label>
                                            <input value={data?.SchoolName} onChange={(e) => DataHandler("Education", e.target.value, index, "SchoolName")} type="text" placeholder='Enter your school/university name' />
                                        </div>
                                    </div>
                                    <div className='personalinformation-horizontalcontainer'>
                                        <div className='personalinformation-inputcontainer'>
                                            <label>Starting Date</label>
                                            <input value={data?.StartDate} onChange={(e) => DataHandler("Education", e.target.value, index, "StartDate")} type="date" placeholder='Enter your starting date' />
                                        </div>
                                        <div className='personalinformation-inputcontainer'>
                                            <label>Ending Date</label>
                                            <input value={data?.EndDate} onChange={(e) => DataHandler("Education", e.target.value, index, "EndDate")} type="date" placeholder='Enter your ending date' />
                                        </div>
                                    </div>
                                    <div className='personalinformation-deletebuttoncontainer'>
                                        <button className='personalinformation-deletebutton' onClick={() => EducationDeleteHandler(index)}><DeleteRoundedIcon /> Delete</button>
                                    </div>
                                    {/* <hr /> */}
                                </>
                            )
                        })}
                    </div>}
                    <motion.div variants={SubElementVariant} className='personalinformation-sectiontitle'>
                        <p>Work Details</p>
                        <button className='personalinformation-addbutton' onClick={WorkAddHandler}><ControlPointRoundedIcon /> Add</button>
                    </motion.div>
                    {formData.Work.length > 0 && <div className='personalinformation-educationdetailcontainer'>
                        {formData.Work.map((data, index) => {
                            return (
                                <>
                                    <p>Work Detail {index + 1}</p>
                                    <hr />
                                    <div className='personalinformation-horizontalcontainer'>
                                        <div className='personalinformation-inputcontainer'>
                                            <label>Role</label>
                                            <input value={data?.Role} onChange={(e) => DataHandler("Work", e.target.value, index, "Role")} type="text" placeholder='Enter your role in the company. For eg: Manager.' />
                                        </div>
                                        <div className='personalinformation-inputcontainer'>
                                            <label>Company Name</label>
                                            <input value={data?.Company} onChange={(e) => DataHandler("Work", e.target.value, index, "Company")} type="text" placeholder='Enter company name' />
                                        </div>
                                    </div>
                                    <div className='personalinformation-horizontalcontainer'>
                                        <div className='personalinformation-inputcontainer'>
                                            <label>Starting Date</label>
                                            <input value={data?.StartDate} onChange={(e) => DataHandler("Work", e.target.value, index, "StartDate")} type="date" placeholder='Enter your starting date' />
                                        </div>
                                        <div className='personalinformation-inputcontainer'>
                                            <label>Ending Date</label>
                                            <input value={data?.EndDate} onChange={(e) => DataHandler("Work", e.target.value, index, "EndDate")} type="date" placeholder='Enter your ending date' />
                                        </div>
                                    </div>
                                    <div className='personalinformation-deletebuttoncontainer'>
                                        <button className='personalinformation-deletebutton' onClick={() => WorkDeleteHandler(index)}><DeleteRoundedIcon /> Delete</button>
                                    </div>
                                    {/* <hr /> */}
                                </>
                            )
                        })}
                    </div>}
                    <motion.div variants={SubElementVariant} className='personalinformation-sectiontitle'>
                        <p>Project Details</p>
                        <button className='personalinformation-addbutton' onClick={ProjectAddHandler}><ControlPointRoundedIcon /> Add</button>
                    </motion.div>
                    {formData.Projects.length > 0 && <div className='personalinformation-educationdetailcontainer'>
                        {formData.Projects.map((data, index) => {
                            return (
                                <>
                                    <p>Project Detail {index + 1}</p>
                                    <hr />
                                    <div className='personalinformation-horizontalcontainer'>
                                        <div className='personalinformation-inputcontainer'>
                                            <label>Project Name</label>
                                            <input value={data?.Name} onChange={(e) => DataHandler("Project", e.target.value, index, "Name")} type="text" placeholder='Enter your project name' />
                                        </div>
                                        <div className='personalinformation-inputcontainer'>
                                            <label>Project Link</label>
                                            <input value={data?.Link} onChange={(e) => DataHandler("Project", e.target.value, index, "Link")} type="text" placeholder='Enter your project link' />
                                        </div>
                                    </div>
                                    <div className='personalinformation-deletebuttoncontainer'>
                                        <button className='personalinformation-deletebutton' onClick={() => ProjectDeleteHandler(index)}><DeleteRoundedIcon /> Delete</button>
                                    </div>
                                    {/* <hr /> */}
                                </>
                            )
                        })}
                    </div>}
                    <motion.div variants={SubElementVariant} className='personalinformation-sectiontitle'>
                        <p>Skills Details</p>
                        <button className='personalinformation-addbutton' onClick={SkillAddHandler}><ControlPointRoundedIcon />Add</button>
                    </motion.div>
                    {formData.Skills.length > 0 && <div className='personalinformation-skillsdetailcontainer'>
                        {formData.Skills.map((data, index) => {
                            return (
                                <>
                                    <div className='personalinformation-horizontalcontainer'>
                                        <input value={data} onChange={(e) => DataHandler("Skill", e.target.value, index)} placeholder='Skill' className='personalinformation-skillinput' />
                                    </div>
                                    <div className='personalinformation-deletebuttoncontainer'>
                                        <button className='personalinformation-deletebutton' onClick={() => SkillDeleteHandler(index)}><DeleteRoundedIcon /></button>
                                    </div>
                                </>
                            )
                        })}
                    </div>}
                    <motion.div variants={SubElementVariant} className='personalinformation-actionbuttoncontainer'>
                        <button onClick={SubmitHandler}>Save</button>
                        <button onClick={() => history.replace('/')}>Cancel</button>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default EditInformationPage