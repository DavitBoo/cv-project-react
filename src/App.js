import React, { Component } from 'react'
import Cv from './components/Cv'
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import Professional from './components/Professional'
// import Form from './components/Form'


class App extends Component {
    constructor() {
        super()

        this.state = {
            personalInfo: {
                fullName: "",
                title: "",
                email: "",
                phoneNumber: "",
                birthDate: "",
                description: "",
                picture: ""
              },
            
        }

    }
    
    onFormChanges =(value, key) => {
        console.log(key)
        this.setState({
            personalInfo: 
                {  ...this.state.personalInfo, [key]:value }
        })
    }
    
    render() {

        return (
            <div className="App">
              <h1>CV Aplication</h1>
              <form>
                <PersonalInfo personalInfo={this.state.personalInfo} onFormChanges={this.onFormChanges}/>
                <Education/>
                <Professional/>
              </form>
              <Cv data={this.state}/>
              <p>Create by <a href="https://github.com/DavitBoo">DavitBoo</a></p>
            </div>
        )
    }
}

export default App
