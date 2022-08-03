import { React, useState } from 'react'

import './AddInformationPage.css'

const AddInformationPage = () => {
    const [formData, setFormData] = useState({
        Education: [
            {
                Name: "",
                SchoolName: "",
                StartDate: "",
                EndDate: ""
            }
        ],
        Work: [
            {
                Role: "",
                Company: "",
                StartDate: "",
                EndDate: ""
            }
        ],
        Projects: [
            {
                Name: "",
                Link: ""
            }
        ],
        Skills: [""]
    })

    const DataHandler = (name, value, index, fieldvalue) => {
        const Data = formData;
        if (name === "Education") {
            Data.Education[index][fieldvalue] = value
            setFormData(Data)
        } else if (name === "Work") {
            Data.Work[index][fieldvalue] = value
            setFormData(Data)
        } else if (name === "Project") {
            Data.Projects[index][fieldvalue] = value
            setFormData(Data)
        } else if (name === "Skill") {
            Data.Skills[index] = value
            setFormData(Data)
        } else {
            Data[name] = value
            setFormData(Data)
        }
    }

    const SubmitHandler = () => {
        console.log(formData)
    }

    const EducationAddHandler = () => {
        formData.Education.push({ Name: "", SchoolName: "", StartDate: "", EndDate: "" })
        setFormData({ ...formData, Education: formData.Education })
    }

    const WorkAddHandler = () => {
        formData.Work.push({ Role: "", Company: "", StartDate: "", EndDate: "" })
        setFormData({ ...formData, Work: formData.Work })
    }

    const ProjectAddHandler = () => {
        formData.Projects.push({ Role: "", Company: "", StartDate: "", EndDate: "" })
        setFormData({ ...formData, Projects: formData.Projects })
    }

    const SkillAddHandler = () => {
        formData.Skills.push("")
        setFormData({ ...formData, Skills: formData.Skills })
    }

    return (
        <div className='personalinformation-maincontainer'>
            <div className='personalinformation-container'>
                <div className='personalinformation-titlecontainer'>
                    <p>Enter your personal details</p>
                </div>
                <p>Personal Details</p>
                <div className='personalinformation-personaldetailcontainer'>
                    <div className='personalinformation-horizontalcontainer'>
                        <div className='personalinformation-inputcontainer'>
                            <label>Name</label>
                            <input onChange={(e) => DataHandler("Name", e.target.value)} type="text" placeholder='Enter your name' />
                        </div>
                        <div className='personalinformation-inputcontainer'>
                            <label>Email</label>
                            <input onChange={(e) => DataHandler("Email", e.target.value)} type="email" placeholder='Enter your email' />
                        </div>
                    </div>
                    <div className='personalinformation-horizontalcontainer'>
                        <div className='personalinformation-inputcontainer'>
                            <label>Phone Number</label>
                            <input onChange={(e) => DataHandler("PhoneNumber", e.target.value)} type="number" placeholder='Enter your phone number' />
                        </div>
                        <div className='personalinformation-inputcontainer'>
                            <label>Location</label>
                            <input onChange={(e) => DataHandler("Location", e.target.value)} type="text" placeholder='Enter your location. For example: Toranto, Canada' />
                        </div>
                    </div>
                    <div className='personalinformation-horizontalcontainer'>
                        <div className='personalinformation-inputcontainer'>
                            <label>Portfolio Link (if have one)</label>
                            <input onChange={(e) => DataHandler("PortfolioLink", e.target.value)} type="text" placeholder='Enter your Portfolio link' />
                        </div>
                        <div className='personalinformation-inputcontainer'>
                            <label>Github Link (if have one)</label>
                            <input onChange={(e) => DataHandler("GithubLink", e.target.value)} type="text" placeholder='Enter your GitHub link' />
                        </div>
                    </div>
                    <div className='personalinformation-horizontalcontainer'>
                        <div className='personalinformation-inputcontainer'>
                            <label>Role Title</label>
                            <input onChange={(e) => DataHandler("RoleTitle", e.target.value)} type="text" placeholder='Enter your role title. For example: Full Stack Developer' />
                        </div>
                        <div className='personalinformation-inputcontainer'>
                            <label>LinkedIn Profile Link (if have one)</label>
                            <input onChange={(e) => DataHandler("LinkedInProfileLink", e.target.value)} type="text" placeholder='Enter your LinkedIn profile link' />
                        </div>
                    </div>
                    <div className='personalinformation-inputcontainer'>
                        <label>Short Description</label>
                        <textarea onChange={(e) => DataHandler("Description", e.target.value)} placeholder='For Eg: To obtain a responsible career, where I can optimally utilize my education, qualification as well as a gained professional experience for making significant contribution in a progressive and dynamic organization.' />
                    </div>
                </div>
                <p>Education Details</p>
                <div className='personalinformation-educationdetailcontainer'>
                    {formData.Education.map((data, index) => {
                        return (
                            <>
                                <p>Course Detail {index + 1} </p>
                                <hr />
                                <div className='personalinformation-horizontalcontainer'>
                                    <div className='personalinformation-inputcontainer'>
                                        <label>Couse Name</label>
                                        <input onChange={(e) => DataHandler("Education", e.target.value, index, "Name")} type="text" placeholder='Enter your course name' />
                                    </div>
                                    <div className='personalinformation-inputcontainer'>
                                        <label>School/University Name</label>
                                        <input onChange={(e) => DataHandler("Education", e.target.value, index, "SchoolName")} type="text" placeholder='Enter your school/university name' />
                                    </div>
                                </div>
                                <div className='personalinformation-horizontalcontainer'>
                                    <div className='personalinformation-inputcontainer'>
                                        <label>Starting Date</label>
                                        <input onChange={(e) => DataHandler("Education", e.target.value, index, "StartDate")} type="date" placeholder='Enter your starting date' />
                                    </div>
                                    <div className='personalinformation-inputcontainer'>
                                        <label>Ending Date</label>
                                        <input onChange={(e) => DataHandler("Education", e.target.value, index, "EndDate")} type="date" placeholder='Enter your ending date' />
                                    </div>
                                </div>
                                <hr />
                            </>
                        )
                    })}
                    <button onClick={EducationAddHandler}>Add</button>
                </div>
                <p>Work Details</p>
                <div className='personalinformation-educationdetailcontainer'>
                    {formData.Work.map((data, index) => {
                        return (
                            <>
                                <p>Work Detail {index + 1}</p>
                                <hr />
                                <div className='personalinformation-horizontalcontainer'>
                                    <div className='personalinformation-inputcontainer'>
                                        <label>Role</label>
                                        <input onChange={(e) => DataHandler("Work", e.target.value, index, "Role")} type="text" placeholder='Enter your role in the company. For eg: Manager.' />
                                    </div>
                                    <div className='personalinformation-inputcontainer'>
                                        <label>Company Name</label>
                                        <input onChange={(e) => DataHandler("Work", e.target.value, index, "Company")} type="text" placeholder='Enter company name' />
                                    </div>
                                </div>
                                <div className='personalinformation-horizontalcontainer'>
                                    <div className='personalinformation-inputcontainer'>
                                        <label>Starting Date</label>
                                        <input onChange={(e) => DataHandler("Work", e.target.value, index, "StartDate")} type="date" placeholder='Enter your starting date' />
                                    </div>
                                    <div className='personalinformation-inputcontainer'>
                                        <label>Ending Date</label>
                                        <input onChange={(e) => DataHandler("Work", e.target.value, index, "EndDate")} type="date" placeholder='Enter your ending date' />
                                    </div>
                                </div>
                                <hr />
                            </>
                        )
                    })}
                    <button onClick={WorkAddHandler}>Add</button>
                </div>
                <p>Project Details</p>
                <div className='personalinformation-educationdetailcontainer'>
                    {formData.Projects.map((data, index) => {
                        return (
                            <>
                                <p>Project Detail {index + 1}</p>
                                <hr />
                                <div className='personalinformation-horizontalcontainer'>
                                    <div className='personalinformation-inputcontainer'>
                                        <label>Project Name</label>
                                        <input onChange={(e) => DataHandler("Project", e.target.value, index, "Name")} type="text" placeholder='Enter your project name' />
                                    </div>
                                    <div className='personalinformation-inputcontainer'>
                                        <label>Project Link</label>
                                        <input onChange={(e) => DataHandler("Project", e.target.value, index, "Link")} type="text" placeholder='Enter your project link' />
                                    </div>
                                </div>
                                <hr />
                            </>
                        )
                    })}
                    <button onClick={ProjectAddHandler}>Add</button>
                </div>
                <p>Skills Details</p>
                <div className='personalinformation-skillsdetailcontainer'>
                    {formData.Skills.map((data, index) => {
                        return (
                            <div className='personalinformation-horizontalcontainer'>
                                <input onChange={(e) => DataHandler("Skill", e.target.value, index)} placeholder='Skill' className='personalinformation-skillinput' />
                            </div>
                        )
                    })}
                    <button onClick={SkillAddHandler}>Add</button>
                </div>
                <div className='personalinformation-actionbuttoncontainer'>
                    <button onClick={SubmitHandler}>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AddInformationPage