import React, { Component } from 'react';

class PersonalInfo extends Component {
    constructor(props) {
      super(props);

      this.state = {
        name: '',
        title: '',
        email: '',
        phoneNumber: '',
        birthDate: '',
        description: ''
      };

      this.nameChange = this.nameChange.bind(this);
    }

    nameChange(e){
      console.log(e.target.name)
      this.props.onFormChanges(e.target.value, e.target.name);
    }


    render() {
      
      return (

        <div id="personal-info" className='flex-column'>
            <h2>Personal Information</h2>
            <div className="contact-info flex">
                <label htmlFor="name">Name:
                    <input 
                      onChange={this.nameChange}
                      type="name" 
                      id="name" 
                      name="fullName"
                    />
                </label>

                <label htmlFor="title">Title:
                    <input 
                      onChange={this.nameChange}
                      type="" 
                      id="title" 
                      name="title"
                    />
                </label>
            </div>

            <div className="flex">
                <label htmlFor="email">E-mail:
                    <input 
                      onChange={this.nameChange}
                      type="email" 
                      id="email" 
                      name="email"
                    />
                </label>
                <label htmlFor="tel">Phone number:
                    <input 
                      onChange={this.nameChange}
                      type="tel" 
                      id="tel" 
                      name="telephone"
                    />
                </label>
              <label htmlFor="birthdate">Birth date
                  <input 
                    onChange={this.nameChange}
                    type="date" 
                    name="birthdate" 
                    id="birthdate" 
                  />
              </label>
              <label htmlFor=""></label>
            </div>
            <label htmlFor="picture">Insert profil picture:
              <input 
                onChange={this.nameChange}
                type="file" 
                name="picture" 
                id="picture" 
                accept="image/*"
              />
            </label>
            <div className="flex-column">
                <label htmlFor="description">Description:</label>
                <textarea 
                  onChange={this.nameChange}
                  name="description" 
                  id="description" 
                ></textarea>
                
            </div>
            

        </div>
      );
    }
  }
  
  export default PersonalInfo;