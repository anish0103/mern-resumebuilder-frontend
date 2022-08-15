import { React } from 'react'
import { motion } from 'framer-motion'
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';

import './Template1.css'

const Template1 = props => {
  const Data = props.Data;

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
    <motion.div variants={ContainerVariant} initial="hidden" animate="show" exit="hidden" className='template1-maincontainer'>
      <motion.div variants={ContainerVariant} className='template1-generalinformationcontainer'>
        <motion.div variants={ElementVariant} className='template1-generalinformation-namecontainer'>
          {Data.Name}
          <motion.div variants={ElementVariant} className='template1-generalinformation-roletitlecontainer'>
            {Data.RoleTitle}
          </motion.div>
        </motion.div>
        <motion.div variants={ElementVariant} className='template1-generalinformation-descriptioncontainer'>{Data.Description}</motion.div>
      </motion.div>
      <motion.div variants={ContainerVariant} className='template1-personalinformationcontainer'>
        <div className='template1-personalinformationsubcontainer'>
          {Data.Email && <motion.div variants={SubElementVariant} className='template1-personalinformation-detailcontainer'><MailRoundedIcon /> <a rel="noreferrer" target='_blank' href={`mailto:${Data.Email}`}>{Data.Email}</a></motion.div>}
          {Data.PhoneNumber && <motion.div variants={SubElementVariant} className='template1-personalinformation-detailcontainer'><LocalPhoneRoundedIcon /> <a rel="noreferrer" target='_blank' href={`Tel:${Data.PhoneNumber}`}>{Data.PhoneNumber}</a></motion.div>}
          {Data.Location && <motion.div variants={SubElementVariant} className='template1-personalinformation-detailcontainer'><LocationOnRoundedIcon /> {Data.Location}</motion.div>}
          {Data.PortfolioLink && <motion.div variants={SubElementVariant} className='template1-personalinformation-detailcontainer'><LanguageRoundedIcon /> <a rel="noreferrer" target='_blank' href={Data.PortfolioLink}>Portfolio</a></motion.div>}
          {Data.LinkedInProfileLink && <motion.div variants={SubElementVariant} className='template1-personalinformation-detailcontainer'><LinkRoundedIcon /> <a rel="noreferrer" target='_blank' href={Data.LinkedInProfileLink}>LinkedIn</a></motion.div>}
          {Data.GithubLink && <motion.div variants={SubElementVariant} className='template1-personalinformation-detailcontainer'><LinkRoundedIcon /> <a rel="noreferrer" target='_blank' href={Data.GithubLink}>GitHub</a></motion.div>}
        </div>
      </motion.div>
      <div className='template1-professionalinformationcontainer'>
        <div className='template1-professionalinformationsubcontainer'>
          <div className='template1-professionalinformation-leftcontainer'>
            {Data.Education.length > 0 && <motion.div variants={ContainerVariant} className='template1-professionalinformation-educationcontainer'>
              <motion.h3 variants={ElementVariant} className='template1-professionalinformation-title'>EDUCATION</motion.h3>
              {Data.Education.map(data => <motion.div variants={SubElementVariant} style={{ marginBottom: '20px' }}>
                <p className='template1-educationcontainer-coursename'>{data.Name}</p>
                <p className='template1-educationcontainer-schoolname'>{data.SchoolName}</p>
                <p className='template1-educationcontainer-duration'>{data.StartDate} - {data.EndDate}</p>
              </motion.div>)}
            </motion.div>}
            {Data.Work.length > 0 && <motion.div variants={ContainerVariant} className='template1-professionalinformation-expcontainer'>
              <motion.h3 variants={ElementVariant} className='template1-professionalinformation-title'>WORK EXPERIENCE</motion.h3>
              {Data.Work.map(data => <motion.div variants={SubElementVariant} style={{ marginBottom: '20px' }}>
                <p className='template1-expcontainer-rolename'>{data.Role}</p>
                <p className='template1-expcontainer-companyname'>{data.Company}</p>
                <p className='template1-expcontainer-duration'>{data.StartDate} - {data.EndDate}</p>
              </motion.div>)}
            </motion.div>}
          </div>
          <div className='template1-professionalinformation-rightcontainer'>
            {Data.Skills.length > 0 && <motion.div variants={ContainerVariant} className='template1-professionalinformation-skillcontainer'>
              <motion.h3 variants={ElementVariant} className='template1-professionalinformation-title'>SKILLS</motion.h3>
              <motion.div className='template1-skillcontainer'>
                {Data.Skills.map(data => <motion.p variants={SubElementVariant}>{data}</motion.p>)}
              </motion.div>
            </motion.div>}
            {Data.Projects.length > 0 && <motion.div variants={ContainerVariant} className='template1-professionalinformation-projectcontainer'>
              <motion.h3 variants={ElementVariant} className='template1-professionalinformation-title'>PROJECTS</motion.h3>
              {Data.Projects.map(data => <motion.div variants={SubElementVariant} style={{ marginBottom: '20px' }}>
                <p className='template1-projectcontainer-name'>{data.Name}</p>
                Link : <a href={data.Link} target="_blank" rel="noreferrer" className='template1-projectcontainer-link'>{data.Link}</a>
              </motion.div>)}
            </motion.div>}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Template1