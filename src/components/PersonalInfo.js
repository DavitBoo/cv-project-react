import React, { Component } from 'react';

class PersonalInfo extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
            <h2>Personal Information</h2>

            <label htmlFor="name">Name:</label>
            <input type="name" id="name" />

            <label htmlFor="title">Title:</label>
            <input type="" id="title" />

            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" />

            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description" cols="30" rows="10"></textarea>
        </div>
      );
    }
  }
  
  export default PersonalInfo;