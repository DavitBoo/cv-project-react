import React from 'react'

export default function Skills(props) {
    // const [skills, setSkills] = useState(props.skills)

    const clickAdd = e => {
        e.preventDefault();
        const obj = {
          skills: '',
          level: 0,
        }
        props.addToState('skills', obj)
    }

    const clickRemove = e => {
        e.preventDefault();
        props.removeFromState('skills', e.target.dataset.key)
    }

    const nameChange = e => {
        const { name, value } = e.target
        const index = e.target.dataset.key
        props.formChanges(value, name, index);
    }

    return (
        <div id="skills" className='flex-column'>
            <h2>Skills</h2>
            { props.skills.length > 0 ?
                (props.skills.map((_, i) => {
                    return (
                        <div key={i}>
                            <div className="flex">
                                <label htmlFor={"skill"+ i}>Skill:  
                                    <input 
                                    type="" 
                                    id={"skill"+ i} 
                                    onChange={nameChange}
                                    name="skill" 
                                    data-key={i}
                                    />
                                </label>
                        
                                <label htmlFor={"level"+ i}>Level: 
                                    <select name="level" id={"level"+ i} data-key={i} onChange={nameChange}>
                                        <option value="0">Novice</option>
                                        <option value="1">Advanced Beginner</option>
                                        <option value="2">Competent</option>
                                        <option value="3">Proficient</option>
                                        <option value="4">Expert</option>
                                    </select>
                                </label>
                                <button className='remove-skill' data-key={i} onClick={clickRemove}>X</button>
                                </div>
                        </div>
                    )
                }
              )):<p>No skills information added yet</p>
            } 
            <button onClick={clickAdd}>Add new skill</button>
        </div>
        )
}



