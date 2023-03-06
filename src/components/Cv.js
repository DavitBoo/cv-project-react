import React, { Component } from 'react'

export default class Cv extends Component {
  render() {
    const {fullName, title, email, telephone, birthdate, description, picture} = this.props.data.personalInfo
    const educationalInfo = this.props.data.educational
    const professionalInfo = this.props.data.professional
    const skillsInfo = this.props.data.skills



    return (
      <div className='cv-container flex'>
        <div className="personal-info">
            <img src={picture} alt="" />
            <h2>Contact Information</h2>
            <h2>{fullName}</h2>
            <h3>{title}</h3>
            <p>E-mail: {email}</p>
            <p>Phone: {telephone}</p>
            <p>Birthdate: {birthdate}</p>
            <p>Description: {description}</p>

            <div className="skills">
              <h2>Skills</h2>
              {skillsInfo.length > 0 ? (
                skillsInfo.map((each, i) => {
                  return (
                    <div key={i} className="flex-column">
                        <div className="flex">
                          <p>{each.skill}</p>
                          <div>
                            <div className={"level"+each.level}></div>
                          </div>
                        </div>
                    </div>
                  )
                }
              )):(<p>No skills provided yet</p>) }
            </div>

        </div>
        <div className="experience">
            <div className="studies">
                <h2>Studies</h2>
                {educationalInfo.length > 0 ? (
                  educationalInfo.map((each, i) => {
                    console.log(each)
                    return(
                      <div key={i}>
                        <h3>{each.institutionName}</h3>
                        <h4>{each.eTitle} ({each.fromDate} - {each.toDate})</h4>
                        <hr />
                      </div>
                    )  
                  })
                ):(<p>No professional information provided yet</p>)}

            </div>
            <div className="professional">
                <h2>Professional Experience</h2>
                {professionalInfo.length > 0 ? (
                  professionalInfo.map((each, i) => {
                    console.log(each)
                    return(
                      <div key={i}>
                        <h3>{each.position}</h3>
                        <h4>{each.company} ({each.fromDate} - {each.toDate})</h4>
                        <p>
                            {each.mainTasks}
                        </p>
                        <hr />
                      </div>
                    )  
                  })
                ):(<p>No educational information provided yet</p>)}

                
            </div>
        </div>
      </div>
    )
  }
}
