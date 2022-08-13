import React from 'react'
import { motion } from 'framer-motion'
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import EngineeringRoundedIcon from '@mui/icons-material/EngineeringRounded';

import { Data } from '../../../Data'
import './Template2.css'

const Template2 = () => {
    const ContainerVariant = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.6,
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
                delayChildren: 0.4,
                staggerChildren: 0.3,
                type: "spring",
                stiffness: 150
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
                duration: 0.6
            }
        }
    }

    return (
        <motion.div variants={ContainerVariant} initial="hidden" animate="show" exit="hidden" className='template2-maincontainer'>
            <motion.div variants={ContainerVariant} className='template2-generalinformationcontainer'>
                <motion.div variants={ElementVariant} className='template2-generalinformationsubcontainer'>
                    <motion.div variants={ElementVariant} className='template2-generalinformation-namecontainer'>
                        {Data.Name}
                        <motion.div variants={ElementVariant} className='template2-generalinformation-roletitlecontainer'>
                            {Data.RoleTitle}
                        </motion.div>
                    </motion.div>
                    <motion.div variants={ElementVariant} className='template2-generalinformation-descriptioncontainer'>{Data.Description}</motion.div>
                </motion.div>
            </motion.div>
            <motion.div variants={ContainerVariant} className='template2-personalinformationcontainer'>
                <motion.div variants={ContainerVariant} className='template2-personalinformationsubcontainer'>
                    {Data.Email && <motion.div variants={SubElementVariant} className='template2-personalinformation-detailcontainer'><MailRoundedIcon /> <a rel="noreferrer" target='_blank' href={`mailto:${Data.Email}`}>{Data.Email}</a></motion.div>}
                    {Data.PhoneNumber && <motion.div variants={SubElementVariant} className='template2-personalinformation-detailcontainer'><LocalPhoneRoundedIcon /> <a rel="noreferrer" target='_blank' href={`Tel:${Data.PhoneNumber}`}>{Data.PhoneNumber}</a></motion.div>}
                    {Data.Location && <motion.div variants={SubElementVariant} className='template2-personalinformation-detailcontainer'><LocationOnRoundedIcon /> {Data.Location}</motion.div>}
                    {Data.PortfolioLink && <motion.div variants={SubElementVariant} className='template2-personalinformation-detailcontainer'><LanguageRoundedIcon /> <a rel="noreferrer" target='_blank' href={Data.PortfolioLink}>Portfolio</a></motion.div>}
                    {Data.LinkedInProfileLink && <motion.div variants={SubElementVariant} className='template2-personalinformation-detailcontainer'><LinkRoundedIcon /> <a rel="noreferrer" target='_blank' href={Data.LinkedInProfileLink}>LinkedIn</a></motion.div>}
                    {Data.GithubLink && <motion.div variants={SubElementVariant} className='template2-personalinformation-detailcontainer'><LinkRoundedIcon /> <a rel="noreferrer" target='_blank' href={Data.GithubLink}>GitHub</a></motion.div>}
                </motion.div>
            </motion.div>
            <div className='template2-professionalinformationcontainer'>
                <div className='template2-professionalinformationsubcontainer'>
                    <div className='template2-professionalinformation-leftcontainer'>
                        {Data.Education.length > 0 && <motion.div variants={ContainerVariant} className='template2-professionalinformation-educationcontainer'>
                            <motion.h3 variants={ElementVariant} className='template2-professionalinformation-title'><SchoolRoundedIcon />EDUCATION</motion.h3>
                            {Data.Education.map(data => <motion.div variants={SubElementVariant} style={{ marginBottom: '20px' }}>
                                <p className='template2-educationcontainer-coursename'>{data.Name}</p>
                                <p className='template2-educationcontainer-schoolname'>{data.SchoolName}</p>
                                <p className='template2-educationcontainer-duration'>{data.StartDate} - {data.EndDate}</p>
                            </motion.div>)}
                        </motion.div>}
                        {Data.Work.length > 0 && <motion.div variants={ContainerVariant} className='template2-professionalinformation-expcontainer'>
                            <motion.h3 variants={ElementVariant} className='template2-professionalinformation-title'><WorkRoundedIcon />WORK EXPERIENCE</motion.h3>
                            {Data.Work.map(data => <motion.div variants={SubElementVariant} style={{ marginBottom: '20px' }}>
                                <p className='template2-expcontainer-rolename'>{data.Role}</p>
                                <p className='template2-expcontainer-companyname'>{data.Company}</p>
                                <p className='template2-expcontainer-duration'>{data.StartDate} - {data.EndDate}</p>
                            </motion.div>)}
                        </motion.div>}
                    </div>
                    <div className='template2-professionalinformation-rightcontainer'>
                        {Data.Skills.length > 0 && <motion.div variants={ContainerVariant} className='template2-professionalinformation-skillcontainer'>
                            <motion.h3 variants={ElementVariant} className='template2-professionalinformation-title'><PsychologyRoundedIcon />SKILLS</motion.h3>
                            <motion.div className='template2-skillcontainer'>
                                {Data.Skills.map(data => <motion.p variants={SubElementVariant}>{data}</motion.p>)}
                            </motion.div>
                        </motion.div>}
                        {Data.Projects.length > 0 && <motion.div variants={ContainerVariant} className='template2-professionalinformation-projectcontainer'>
                            <motion.h3 variants={ElementVariant} className='template2-professionalinformation-title'><EngineeringRoundedIcon />PROJECTS</motion.h3>
                            {Data.Projects.map(data => <motion.div variants={SubElementVariant} style={{ marginBottom: '20px' }}>
                                <p className='template2-projectcontainer-name'>{data.Name}</p>
                                Link : <a href={data.Link} target="_blank" rel="noreferrer" className='template2-projectcontainer-link'>{data.Link}</a>
                            </motion.div>)}
                        </motion.div>}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Template2