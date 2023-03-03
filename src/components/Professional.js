import React, { Component } from 'react';

class Professional extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div id="professional-experience" className='flex-column'>
            <h2>Professional Experience</h2>
            <div className="flex">
              <label htmlFor="company">Company:
                <input type="" id="company" />
              </label>

              <label htmlFor="position">Position:
                <input type="" id="position" />
              </label>
            </div>

            <div className="flex">
              <label htmlFor="fromDate">from:
                <input type="date" name="" id="fromDate" />
              </label>

              <label htmlFor="toDate">to:
                <input type="date" name="" id="toDate" />
              </label>

            </div>
            
            <div className="flex-column">
              <label htmlFor="mainTasks">Main Tasks:</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button>Add Professionl Exp.</button>
            <hr />

        </div>
      );
    }
  }
  
  export default Professional;