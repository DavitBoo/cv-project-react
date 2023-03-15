import React from 'react';

export default function Education (props) {
  const {educational} = props
  
  const clickAdd = e => {
    e.preventDefault();
    const obj = {
      institutionName: '',
      eTitle: '',
      fromDate: '',
      toDate: '',
    }

    props.addToState('educational', obj)
  }

  const clickRemove = e => {
    e.preventDefault();
    console.log(e.target.dataset.key)
    props.removeFromState('educational', e.target.dataset.key)
  }

  const nameChange = e => {
    const { name, value } = e.target
    const index = e.target.dataset.key
    props.formChanges(value, name, index);
  }

  return (
    <div id="educational" className='flex-column'>
    <h2>Educational</h2>
    { props.educational.length > 0 ?
      (props.educational.map((_, i) => {
        return (
          <div key={i}>
            <div className="flex">
              <label htmlFor={"institutionName"+ i}>Institution Name:
                <input 
                  type="" 
                  id={"institutionName"+ i} 
                  onChange={nameChange}
                  name="institutionName" 
                  data-key={i}
                  value={educational[i].institutionName}
                />
              </label>

              {/* <label htmlFor="subject">Subject:
                <input 
                  type="" 
                  id="subject" 
                  onChange={this.nameChange}
                  name="subject" 
                  data-key={i}

                />
              </label> */}
              <label htmlFor={"eTitle"+ i}>Title:
                <input 
                  type="" 
                  id={"eTitle"+ i} 
                  onChange={nameChange}
                  name="eTitle" 
                  data-key={i}
                  value={educational[i].eTitle}
                />
              </label>
            </div>


            <div className="flex">
              <label htmlFor={"fromDate"+ i}>from:
                <input 
                  type="date" 
                  name="fromDate" 
                  id={"fromDate"+ i} 
                  onChange={nameChange}
                  data-key={i}
                  value={educational[i].fromDate}
                />
              </label>

              <label htmlFor={"toDate"+ i}>to:
                <input 
                  type="date" 
                  name="toDate" 
                  id={"toDate"+ i}
                  onChange={nameChange} 
                  data-key={i}
                  value={educational[i].toDate}
                />
              </label>
            </div>
            <button className='remove-btn' data-key={i} onClick={clickRemove}>Remove</button>
            <hr />
          </div>
      )
  })):
  ( <p>No educational information added yet</p> )
}
  <button onClick={clickAdd}>Add Educational Info.</button>
</div>
  )
}

