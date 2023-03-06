import React, { Component } from 'react'

export default class Cv extends Component {
  render() {
    const {fullName, title, email, telephone, birthdate, description, picture} = this.props.data.personalInfo
    const educationalInfo = this.props.data.educational

    return (
      <div className='cv-container flex'>
        <div className="personal-info">
      
            <img src={picture} alt="" />
            <h2>{fullName}</h2>
            <h3>{title}</h3>
            <p>E-mail: {email}</p>
            <p>Phone: {telephone}</p>
            <p>Birthdate: {birthdate}</p>
            <p>Description: {description}</p>

            
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
                        <p>{each.eTitle} (10/2020 - Present)</p>
                      </div>
                    )  
                  })
                ):(<p>No educational information provided yet</p>)}

            </div>
            <div className="professional">
                <h2>Professional Experience</h2>
                <h3>Higher Technician in Web Applications Development</h3>
                <h4>IDEC S.A. (01/2022 - 06/2022)</h4>
                <p>
                    Development of websites (HTML, CSS, JS, WordPress, PHP)
                    Development of e-learning platforms 
                    Data entry
                    Social media set up and support
                </p>
            </div>
        </div>
      </div>
    )
  }
}
