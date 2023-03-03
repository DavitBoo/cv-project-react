import React, { Component } from 'react'

export default class Cv extends Component {
  render() {
    const {fullName, title, email, telephone, birthdate, description, picture} = this.props.data.personalInfo
    let pictureUrl = './' + picture.split('\\')[2]
    console.log(pictureUrl)


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
                
                <h3>International University of La Rioja (UNIR)</h3>
                <p>Master of Digital Marketing (10/2020 - Present)</p>

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
