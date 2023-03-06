import React, { Component } from 'react'
import Cv from './components/Cv'
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import Professional from './components/Professional'


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
            educational: [],
            professional: []
        }

    }
    
    onFormChanges =(value, key) => {
        this.setState({
            personalInfo: 
                {  ...this.state.personalInfo, [key]:value }
        })
    }

    addEducation = (obj) => {
        this.setState({
            educational: this.state.educational.concat(obj)
        })
    }

    removeEducation = index => {
        index = parseInt(index)
        this.setState({
            educational: this.state.educational.filter((_, i) => i !== index)
        })
    }

    onEducationFormChanges = (value, key, index) => {
        const updatedEducational = [...this.state.educational];
        updatedEducational[index] = {
          ...updatedEducational[index],
          [key]: value,
        };
        this.setState({ educational: updatedEducational });
      };
    
    render() {

        return (
            <div className="App">
              <h1>CV Aplication</h1>
              <form>
                <PersonalInfo onFormChanges={this.onFormChanges}/>
                <Education formChanges={this.onEducationFormChanges} educational={this.state.educational} addEducation={this.addEducation} removeEducation={this.removeEducation}/>
                <Professional professional={this.professional}/>
              </form>
              <Cv data={this.state}/>
              <p>Create by <a href="https://github.com/DavitBoo">DavitBoo</a></p>
            </div>
        )
    }
}

export default App
