import React, { Component } from 'react'

export default class Skills extends Component {
    constructor(props) {
        super(props);

        this.clickAdd = this.clickAdd.bind(this);
        this.clickRemove = this.clickRemove.bind(this);
        this.nameChange = this.nameChange.bind(this);
    }

    clickAdd = e => {
        e.preventDefault();
        const obj = {
          skills: '',
          level: 0,
        }
        this.props.addToState('skills', obj)
    }
    
    clickRemove = e => {
        e.preventDefault();
        this.props.removeFromState('skills', e.target.dataset.key)
    }

    nameChange = e => {
        const { name, value } = e.target
        const index = e.target.dataset.key
        this.props.formChanges(value, name, index);
      }

    render() {
        return (
        <div id="skills" className='flex-column'>
            <h2>Skills</h2>
            { this.props.skills.length > 0 ?
                (this.props.skills.map((_, i) => {
                    return (
                        <div key={i}>
                            <div className="flex">
                                <label htmlFor={"skill"+ i}>Skill:  
                                    <input 
                                    type="" 
                                    id={"skill"+ i} 
                                    onChange={this.nameChange}
                                    name="skill" 
                                    data-key={i}
                                    />
                                </label>
                        
                                <label htmlFor={"level"+ i}>Level: 
                                    <select name="level" id={"level"+ i} data-key={i} onChange={this.nameChange}>
                                        <option value="0">Novice</option>
                                        <option value="1">Advanced Beginner</option>
                                        <option value="2">Competent</option>
                                        <option value="3">Proficient</option>
                                        <option value="4">Expert</option>
                                    </select>
                                </label>
                                <button className='remove-skill' data-key={i} onClick={this.clickRemove}>X</button>
                                </div>
                        </div>
                    )
                }
              )):<p>No skills information added yet</p>
            } 
            <button onClick={this.clickAdd}>Add new skill</button>
        </div>
        )
    }
}

