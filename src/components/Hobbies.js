import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateHobbies } from '../actions/cvActions';

const Hobbies = ({ hobbies, updateHobbies }) => {
    useEffect(() => {
        // Load hobbies from localStorage when component mounts
        const storedHobbies = localStorage.getItem('hobbies-d');
        if (storedHobbies) {
            updateHobbies(JSON.parse(storedHobbies));
        }
    }, [updateHobbies]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedHobbies = [...hobbies];
        updatedHobbies[index][name] = value;
        updateHobbies(updatedHobbies);
        localStorage.setItem('hobbies-d', JSON.stringify(updatedHobbies));
    };

    const addHobbies = () => {
        const updatedHobbies = [...hobbies, { hobbies: '' }];
        updateHobbies(updatedHobbies);
        localStorage.setItem('hobbies-d', JSON.stringify(updatedHobbies));
    };

    const removeHobbies = (index) => {
        const updatedHobbies = [...hobbies];
        updatedHobbies.splice(index, 1);
        updateHobbies(updatedHobbies);
        localStorage.setItem('hobbies-d', JSON.stringify(updatedHobbies));
    };

    return (
        <div className="form-wp-rep form-wp">
            <h2>Hobbies</h2>
            {hobbies.map((hobby, index) => (
                <div key={index} className="repeated-field d-flex">
                    <form>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name="hobbies"
                                value={hobby.hobbies || ''}
                                onChange={(e) => handleInputChange(e, index)}
                            />
                        </div>
                    </form>
                    <button onClick={() => removeHobbies(index)} className="btn small-btn">Remove -</button>
                </div>
            ))}
            <button onClick={addHobbies} className="btn small-btn">Add Hobbies +</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    hobbies: state.hobbies,
});

export default connect(mapStateToProps, { updateHobbies })(Hobbies);
