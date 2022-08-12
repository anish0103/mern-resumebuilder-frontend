import React from 'react'
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';

import { Data } from '../../../Data'
import './Template1.css'

const Template1 = () => {
  return (
    <div className='template1-maincontainer'>
      <div className='template1-generalinformationcontainer'>
        <div className='template1-generalinformation-namecontainer'>
          {Data.Name}
          <div className='template1-generalinformation-roletitlecontainer'>
            {Data.RoleTitle}
          </div>
        </div>
        <div className='template1-generalinformation-descriptioncontainer'>{Data.Description}</div>
      </div>
      <div className='template1-personalinformationcontainer'>
        <div className='template1-personalinformationsubcontainer'>
          {Data.Email && <div className='template1-personalinformation-detailcontainer'><MailRoundedIcon /> <a rel="noreferrer" target='_blank' href={`mailto:${Data.Email}`}>{Data.Email}</a></div>}
          {Data.PhoneNumber && <div className='template1-personalinformation-detailcontainer'><LocalPhoneRoundedIcon /> <a rel="noreferrer" target='_blank' href={`Tel:${Data.PhoneNumber}`}>{Data.PhoneNumber}</a></div>}
          {Data.Location && <div className='template1-personalinformation-detailcontainer'><LocationOnRoundedIcon /> {Data.Location}</div>}
          {Data.PortfolioLink && <div className='template1-personalinformation-detailcontainer'><LanguageRoundedIcon /> <a rel="noreferrer" target='_blank' href={Data.PortfolioLink}>{Data.PortfolioLink}</a></div>}
          {Data.LinkedInProfileLink && <div className='template1-personalinformation-detailcontainer'><LinkRoundedIcon /> <a rel="noreferrer" target='_blank' href={Data.LinkedInProfileLink}>{Data.LinkedInProfileLink}</a></div>}
          {Data.GithubLink && <div className='template1-personalinformation-detailcontainer'><LinkRoundedIcon /> <a rel="noreferrer" target='_blank' href={Data.GithubLink}>{Data.GithubLink}</a></div>}
        </div>
      </div>
      <div className='template1-professionalinformationcontainer'>
        <div className='template1-professionalinformationsubcontainer'>
          <div className='template1-professionalinformation-leftcontainer'>
            <div className='template1-professionalinformation-educationcontainer'>
              <h3 className='template1-professionalinformation-title'>EDUCATION</h3>
              {Data.Education.map(data => <div style={{ marginBottom: '20px' }}>
                <p className='template1-educationcontainer-coursename'>{data.Name}</p>
                <p className='template1-educationcontainer-schoolname'>{data.SchoolName}</p>
                <p className='template1-educationcontainer-duration'>{data.StartDate} - {data.EndDate}</p>
              </div>)}
            </div>
            <div className='template1-professionalinformation-expcontainer'>
              <h3 className='template1-professionalinformation-title'>WORK EXPERIENCE</h3>
              {Data.Work.map(data => <div style={{ marginBottom: '20px' }}>
                <p className='template1-expcontainer-rolename'>{data.Role}</p>
                <p className='template1-expcontainer-companyname'>{data.Company}</p>
                <p className='template1-expcontainer-duration'>{data.StartDate} - {data.EndDate}</p>
              </div>)}
            </div>
          </div>
          <div className='template1-professionalinformation-rightcontainer'>
            <div className='template1-professionalinformation-skillcontainer'>
              <h3 className='template1-professionalinformation-title'>SKILLS</h3>
              <div className='template1-skillcontainer'>
                {Data.Skills.map(data => <p>{data}</p>)}
              </div>
            </div>
            <div className='template1-professionalinformation-projectcontainer'>
              <h3 className='template1-professionalinformation-title'>PROJECTS</h3>
              {Data.Projects.map(data => <div style={{ marginBottom: '20px' }}>
                <p className='template1-projectcontainer-name'>{data.Name}</p>
                Link : <a href={data.Link} target="_blank" rel="noreferrer" className='template1-projectcontainer-link'>{data.Link}</a>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template1