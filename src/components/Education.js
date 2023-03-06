import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
      super(props);

      this.clickAdd = this.clickAdd.bind(this);
      this.clickRemove = this.clickRemove.bind(this);
      this.nameChange = this.nameChange.bind(this);
    }

    clickAdd = e => {
        e.preventDefault();
        const obj = {
          institutionName: '',
          subject: '',
          eTitle: '',
          fromDate: '',
          toDate: '',
        }

        this.props.addEducation(obj)

    }

    clickRemove = e => {
      e.preventDefault();
      this.props.removeEducation(e.target.dataset.key)
    }


    nameChange = e => {
      const { name, value } = e.target
      console.log(name)
      const index = e.target.dataset.key
      console.log(index)
      this.props.formChanges(value, name, index);
    }
  
    render() {
      return (
        <div id="educational" className='flex-column'>
        <h2>Educational</h2>
        { this.props.educational.length > 0 ?
          (this.props.educational.map((_, i) => {
            return (
              <div key={i}>
                <div className="flex">
                  <label htmlFor="institutionName">Institution Name:
                    <input 
                      type="" 
                      id="institutionName" 
                      onChange={this.nameChange}
                      name="institutionName" 
                      data-key={i}
                    />
                  </label>

                  <label htmlFor="subject">Subject:
                    <input 
                      type="" 
                      id="subject" 
                      onChange={this.nameChange}
                      name="subject" 
                      data-key={i}

                    />
                  </label>
                </div>

                <label htmlFor="eTitle">Title:
                  <input 
                    type="" 
                    id="eTitle" 
                    onChange={this.nameChange}
                    name="eTitle" 
                    data-key={i}
                  />
                </label>

                <div className="flex">
                  <label htmlFor="fromDate">from:
                    <input type="date" name="" id="fromDate" />
                  </label>

                  <label htmlFor="toDate">to:
                    <input type="date" name="" id="toDate" />
                  </label>
                </div>
                <button className='remove-btn' data-key={i} onClick={this.clickRemove}>Remove</button>
                <hr />
              </div>
          )
      })):
      ( <p>No educational information provided yet</p>)
    }
      <button onClick={this.clickAdd}>Add Educational Info.</button>
    </div>
      )
    }
  }
  
  export default Education;