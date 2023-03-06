import React, { Component } from 'react'
import Cv from './components/Cv'
import PersonalInfo from './components/PersonalInfo'
import Education from './components/Education'
import Professional from './components/Professional'
import Skills from './components/Skills'


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
            professional: [],
            skills: []
        }

    }
    
    onFormChanges =(value, key) => {
        this.setState({
            personalInfo: 
                {  ...this.state.personalInfo, [key]:value }
        })
    }
    
    addToState = (prop, obj) => {
        this.setState({
          [prop]: [...this.state[prop], obj]
        })
      }

    removeFromState = (prop, index) => {
        index = parseInt(index)
        this.setState({
            [prop]: this.state[prop].filter((_, i) => i !== index)
        })
    }
    

    onEducationFormChanges = (value, key, index) => {
        const updatedEducational = [...this.state.educational]
        updatedEducational[index] = {
          ...updatedEducational[index],
          [key]: value,
        };
        this.setState({ educational: updatedEducational })
      };
        

    onProfessionalFormChanges = (value, key, index) => {
        const updatedProfessional = [...this.state.professional]
        updatedProfessional[index] = {
          ...updatedProfessional[index],
          [key]: value,
        };
        this.setState({ professional: updatedProfessional })
      };

    onSkillsFormChanges = (value, key, index) => {
    const updatedSkills = [...this.state.skills];
    updatedSkills[index] = {
        ...updatedSkills[index],
        [key]: value,
    };
    this.setState({ skills: updatedSkills });
    };
      
    
    render() {
        return (
            <div className="App">
              <h1>CV Aplication</h1>
              <form>
                <PersonalInfo onFormChanges={this.onFormChanges}/>
                <Education 
                    formChanges={this.onEducationFormChanges} 
                    educational={this.state.educational} 
                    addToState={this.addToState} 
                    removeFromState={this.removeFromState}
                />
                <Professional 
                    professional={this.state.professional}
                    addToState={this.addToState} 
                    removeFromState={this.removeFromState}
                    formChanges={this.onProfessionalFormChanges} 
                />
                <Skills
                    skills={this.state.skills}
                    addToState={this.addToState} 
                    removeFromState={this.removeFromState}
                    formChanges={this.onSkillsFormChanges} 
                />

              </form>
              <Cv data={this.state}/>
              <p>Create by <a href="https://github.com/DavitBoo">DavitBoo</a></p>
            </div>
        )
    }
}

export default App
