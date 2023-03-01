import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import Professional from './Professional'

class Form extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <form>
            <PersonalInfo/>
            <Education/>
            <Professional/>
          </form>
        </div>
      );
    }
  }
  
  export default Form;
  