import React, { Component } from 'react';

export default function Professional(props) {
  const {professional} = props

  const clickAdd = e => {
    e.preventDefault();
    const obj = {
      company: '',
      position: '',
      fromDate: '',
      toDate: '',
      mainTasks: '',
    }

    props.addToState('professional', obj)
}

const clickRemove = e => {
  e.preventDefault();
  props.removeFromState('professional', e.target.dataset.key)
}


const nameChange = e => {
  const { name, value } = e.target
  console.log(name)
  const index = e.target.dataset.key
  props.formChanges(value, name, index);
}


return (
  <div id="professional-experience" className='flex-column'>
      <h2>Professional Experience</h2>
      {props.professional.length > 0 ?
        (props.professional.map((_, i) => {
          return (
            <div key={i}>
              <div className="flex">
                <label htmlFor={"company" + i}>Company:
                  <input 
                    type="" 
                    name="company"
                    id={"company" + i} 
                    onChange={nameChange}
                    data-key={i}
                    value={professional[i].company}
                  />
                </label>
  
                <label htmlFor={"position" + i}>Position:
                  <input 
                    type="" 
                    name="position"
                    id={"position" + i} 
                    onChange={nameChange}
                    data-key={i}
                    value={professional[i].position}
                  />
                </label>
              </div>
  
              <div className="flex">
                <label htmlFor={"fromDate" + i}>from:
                  <input 
                    type="date" 
                    name="fromDate" 
                    id={"fromDate" + i} 
                    onChange={nameChange}
                    data-key={i}
                    value={professional[i].fromDate}

                  />
                </label>
  
                <label htmlFor={"toDate" + i}>to:
                  <input 
                    type="date" 
                    name="toDate" 
                    id={"toDate" + i}
                    onChange={nameChange}
                    data-key={i} 
                    value={professional[i].toDate}

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
                  onChange={nameChange}
                  data-key={i}
                  value={professional[i].mainTasks}
                ></textarea>
              </div>
              <button className='remove-btn' data-key={i} onClick={clickRemove}>Remove</button>
              <hr />
              
            </div>
          )
        })):(<p>No professional information added yet</p>)
      }
      <button onClick={clickAdd}>Add Professionl Exp.</button>
  </div>
);
}

