import React from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Skills from './Skills';
import Hobbies from './Hobbies';
import Labels from './AddLabel';
import { Link } from 'react-router-dom';

const EditedFile = () => {
    return (
        <div>
            <div class="container">
            <PersonalInfo />
                <Skills/>
                <Education />
                <Hobbies/>
                <Labels/>
                
                
               
            </div>
            <div className="btn-sec">
            <Link to="/preview" className='btn'>Submit</Link>
            </div>
        </div>
    )
}

export default EditedFile
