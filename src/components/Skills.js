import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateSkills } from '../actions/cvActions';

const Skills = ({ skills, updateSkills }) => {
  useEffect(() => {
    // Load skills from localStorage when component mounts
    const storedSkills = localStorage.getItem('skills');
    if (storedSkills) {
      updateSkills(JSON.parse(storedSkills));
    }
  }, [updateSkills]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[index][name] = value;
    updateSkills(updatedSkills);
    // Update localStorage
    localStorage.setItem('skills', JSON.stringify(updatedSkills));
  };

  const addSkills = () => {
    const updatedSkills = [...skills, { skill: '' }];
    updateSkills(updatedSkills);
    // Update localStorage
    localStorage.setItem('skills', JSON.stringify(updatedSkills));
  };

  const removeSkills = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    updateSkills(updatedSkills);
    // Update localStorage
    localStorage.setItem('skills', JSON.stringify(updatedSkills));
  };

  return (
    <div className="form-wp-rep form-wp">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="repeated-field d-flex">
          <form>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="skill"
                value={skill.skill || ''}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
          </form>
          <button onClick={() => removeSkills(index)} className="btn small-btn">
            Remove -
          </button>
        </div>
      ))}
      <button onClick={addSkills} className="btn small-btn">
        Add Skills +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  skills: state.skills,
});

export default connect(mapStateToProps, { updateSkills })(Skills);
