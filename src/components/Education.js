// components/Education.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateEducation } from '../actions/cvActions';


const Education = ({ education, updateEducation }) => {
  useEffect(() => {
    // Load education from localStorage when component mounts
    const storedEducation = localStorage.getItem('education');
    if (storedEducation) {
      try {
        // Attempt to parse the stored data
        const parsedEducation = JSON.parse(storedEducation);
        // Update the education state if parsing succeeds
        updateEducation(parsedEducation);
      } catch (error) {
        console.error('Error parsing education data from localStorage:', error);
        // Handle the error, for example, by setting a default value
        updateEducation([]);
      }
    }
  }, [updateEducation]);
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    updateEducation(updatedEducation);
     // Update localStorage
     localStorage.setItem('education', JSON.stringify(updatedEducation));
  };

  const addEducation = () => {
    updateEducation([
      ...education,
      { institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '' },
    ]);
    // Update localStorage
    localStorage.setItem('education', JSON.stringify(updateEducation));
  };

  const removeEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    updateEducation(updatedEducation);
    // Update localStorage
    localStorage.setItem('education', JSON.stringify(updatedEducation));
  };

  return (
    <div class="form-wp">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className='repeated-list'>
          <form>
            <div className="form-group">
              <label>
                Institution: </label>
              <input
                type="text"
                className='form-control'
                name="institution"
                value={edu.institution || ''}
                onChange={(e) => handleInputChange(e, index)}
              />

            </div>
            <div className="form-group">
              <label>
                Degree:</label>
              <input
                type="text"
                name="degree"
                className='form-control'
                value={edu.degree || ''}
                onChange={(e) => handleInputChange(e, index)}
              />

            </div>
            <div className="form-group">
              <label>
                Field of Study: </label>
              <input
                type="text"
                name="fieldOfStudy"
                className='form-control'
                value={edu.fieldOfStudy || ''}
                onChange={(e) => handleInputChange(e, index)}
              />

            </div>
            <div className="form-group">
              <label>
                Start Date: </label>
              <input
                type="text"
                name="startDate"
                className='form-control'
                value={edu.startDate || ''}
                onChange={(e) => handleInputChange(e, index)}
              />

            </div>
            <div className="form-group">
              <label>
                End Date:</label>
              <input
                type="text"
                name="endDate"
                className='form-control'
                value={edu.endDate || ''}
                onChange={(e) => handleInputChange(e, index)}
              />

            </div>
          </form>
          <button onClick={() => removeEducation(index)} className='btn small-btn'>Remove</button>
        </div>
      ))}
      <button onClick={addEducation} className='btn small-btn'>Add Education +</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  education: state.education,
});

export default connect(mapStateToProps, { updateEducation })(Education);