import React, { Component } from 'react'

export default class Skills extends Component {
    constructor(props) {
        super(props);

        this.clickAdd = this.clickAdd.bind(this);
        this.clickRemove = this.clickRemove.bind(this);
        this.nameChange = this.nameChange.bind(this);
    }

  render() {
    return (
      <div id="skills" className='flex-column'>
        <h2>Skills</h2>
      </div>
    )
  }
}

