import React, { Component } from 'react';

class Professional extends Component {
    constructor(props) {
      super(props);

      this.clickAdd = this.clickAdd.bind(this)
      this.clickRemove = this.clickRemove.bind(this)
      this.nameChange = this.nameChange.bind(this)
    }

    clickAdd = e => {
      e.preventDefault();
      const obj = {
        company: '',
        position: '',
        fromDate: '',
        toDate: '',
        mainTasks: '',
      }

      this.props.addToState('professional', obj)
  }

  clickRemove = e => {
    e.preventDefault();
    this.props.removeProfessional(e.target.dataset.key)
  }


  nameChange = e => {
    const { name, value } = e.target
    console.log(name)
    const index = e.target.dataset.key
    this.props.formChanges(value, name, index);
  }
  
  render() {
    return (
      <div id="professional-experience" className='flex-column'>
          <h2>Professional Experience</h2>
          {this.props.professional.length > 0 ?
            (this.props.professional.map((_, i) => {
              return (
                <div key={i}>
                  <div className="flex">
                    <label htmlFor={"company" + i}>Company:
                      <input 
                        type="" 
                        name="company"
                        id={"company" + i} 
                        onChange={this.nameChange}
                        data-key={i}
                      />
                    </label>
      
                    <label htmlFor={"position" + i}>Position:
                      <input 
                        type="" 
                        name="position"
                        id={"position" + i} 
                        onChange={this.nameChange}
                        data-key={i}
                      />
                    </label>
                  </div>
      
                  <div className="flex">
                    <label htmlFor={"fromDate" + i}>from:
                      <input 
                        type="date" 
                        name="fromDate" 
                        id={"fromDate" + i} 
                        onChange={this.nameChange}
                        data-key={i}
                      />
                    </label>
      
                    <label htmlFor={"toDate" + i}>to:
                      <input 
                        type="date" 
                        name="toDate" 
                        id={"toDate" + i}
                        onChange={this.nameChange}
                        data-key={i} 
                      />
                    </label>
                  </div>
                  
                  <div className="flex-column">
                    <label htmlFor={"mainTasks" + i}>Main Tasks:</label>
                    <textarea 
                      name="mainTasks" 
                      id={"mainTasks" + i} 
                      cols="30" 
                      rows="10"
                      onChange={this.nameChange}
                      data-key={i}
                    ></textarea>
                  </div>
                  <hr />
                  <button className='remove-btn' data-key={i} onClick={this.clickRemove}>Remove</button>
                  
                </div>
              )
            })):(<p>No professional information added yet</p>)
          }
          <button onClick={this.clickAdd}>Add Professionl Exp.</button>
      </div>
    );
  }
}

export default Professional;