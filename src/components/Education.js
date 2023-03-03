import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div id="educational" className='flex-column'>
            <h2>Educational</h2>
            <div className="flex">
              <label htmlFor="institutionName">Institution Name:
                <input type="" id="institutionName" />
              </label>

              <label htmlFor="subject">Subject:
                <input type="" id="subject" />
              </label>
            </div>


            <label htmlFor="eTitle">Title:
              <input type="" id="eTitle" />
            </label>

            <div className="flex">
              <label htmlFor="fromDate">from:
                <input type="date" name="" id="fromDate" />
              </label>

              <label htmlFor="toDate">to:
                <input type="date" name="" id="toDate" />
              </label>
            </div>

            <button>Add Educational Info.</button>

            <hr />
        </div>
      );
    }
  }
  
  export default Education;