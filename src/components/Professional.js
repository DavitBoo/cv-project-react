import React, { Component } from 'react';

class Professional extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
            <h2>Professional Experience</h2>

            <label htmlFor="company">Company:</label>
            <input type="" id="company" />

            <label htmlFor="position">Position:</label>
            <input type="" id="position" />

            <label htmlFor="fromDate">from:</label>
            <input type="date" name="" id="fromDate" />

            <label htmlFor="toDate">to:</label>
            <input type="date" name="" id="toDate" />

            <label htmlFor="mainTasks">Main Tasks:</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      );
    }
  }
  
  export default Professional;