import React, { useState } from 'react';


export default function PersonalInfo(props) {
  const [pictureUrl, setPictureUrl] = useState('')

  const nameChange = (e) => {
    const { name, value, files } = e.target

    if (name === 'picture'){
      const reader = new FileReader();
      reader.onload = () => {
        setPictureUrl(reader.result)
        props.onFormChanges(reader.result, name);
      };
      reader.readAsDataURL(files[0]); 
    }
    else props.onFormChanges(value, name);
  }

  return (

    <div id="personal-info" className='flex-column'>
        <h2>Personal Information</h2>
        <div className="contact-info flex">
            <label htmlFor="name">Name:
                <input 
                  onChange={nameChange}
                  type="name" 
                  id="name" 
                  name="fullName"
                />
            </label>

            <label htmlFor="title">Title:
                <input 
                  onChange={nameChange}
                  type="" 
                  id="title" 
                  name="title"
                />
            </label>
        </div>

        <div className="flex">
            <label htmlFor="email">E-mail:
                <input 
                  onChange={nameChange}
                  type="email" 
                  id="email" 
                  name="email"
                />
            </label>
            <label htmlFor="tel">Phone number:
                <input 
                  onChange={nameChange}
                  type="tel" 
                  id="tel" 
                  name="telephone"
                />
            </label>
          <label htmlFor="birthdate">Birth date
              <input 
                onChange={nameChange}
                type="date" 
                name="birthdate" 
                id="birthdate" 
              />
          </label>
          <label htmlFor=""></label>
        </div>
        <label htmlFor="picture">Insert profil picture:
          <input 
            onChange={nameChange}
            type="file" 
            name="picture" 
            id="picture" 
            accept="image/*"
          />
        </label>
        <div className="flex-column">
            <label htmlFor="description">Description:</label>
            <textarea 
              onChange={nameChange}
              name="description" 
              id="description" 
            ></textarea>
            
        </div>
    </div>
  );
}
