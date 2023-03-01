import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
            <h2>Educational</h2>

            <label htmlFor="institutionName">Institution Name:</label>
            <input type="" id="institutionName" />

            <label htmlFor="subject">Subject:</label>
            <input type="" id="subject" />

            <label htmlFor="eTitle">Title:</label>
            <input type="" id="eTitle" />

            <label htmlFor="fromDate">from:</label>
            <input type="date" name="" id="fromDate" />

            <label htmlFor="toDate">to:</label>
            <input type="date" name="" id="toDate" />

        </div>
      );
    }
  }
  
  export default Education;