import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateLabels } from '../actions/cvActions';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const Labels = ({ labels, updateLabels }) => {
    useEffect(() => {
        // Load labels from localStorage when component mounts
        const storedLabels = localStorage.getItem('labels-d');
        if (storedLabels) {
            updateLabels(JSON.parse(storedLabels));
        }
    }, [updateLabels]);

    const handleInputChange = (e, index, nestedIndex) => {
        const { name, value } = e.target;
        const updatedLabels = [...labels];
        updatedLabels[index][0][name] = value; // Assuming you have a structure where the heading is at index 0 of each label
        updateLabels(updatedLabels);
        localStorage.setItem('labels-d', JSON.stringify(updatedLabels));
    };

    const addNestedLabels = (index) => {
        const updatedLabels = [...labels];
        updatedLabels[index].push({ nestedLabels: '' });
        updateLabels(updatedLabels);
        localStorage.setItem('labels-d', JSON.stringify(updatedLabels));
    };

    const removeNestedLabels = (index, nestedIndex) => {
        const updatedLabels = [...labels];
        updatedLabels[index].splice(nestedIndex, 1);
        updateLabels(updatedLabels);
        localStorage.setItem('labels-d', JSON.stringify(updatedLabels));
    };

    const addLabels = () => {
        const newLabels = [...labels, [{ nestedLabels: '' }]];
        updateLabels(newLabels);
        localStorage.setItem('labels-d', JSON.stringify(newLabels));
    };

    const removeLabels = (index) => {
        const updatedLabels = [...labels];
        updatedLabels.splice(index, 1);
        updateLabels(updatedLabels);
        localStorage.setItem('labels-d', JSON.stringify(updatedLabels));
    };

    const handleNestedInputChange = (value, index, nestedIndex) => {
        const updatedLabels = [...labels];
        updatedLabels[index][nestedIndex].nestedLabels = value;
        updateLabels(updatedLabels);
        localStorage.setItem('labels-d', JSON.stringify(updatedLabels));
    };

    return (
        <div className="form-wp-rep form-wp">
            <h2>Labels</h2>
            {labels.map((edu, index) => (
                <div key={index} className="repeated-parentfield ">
                    <form>
                        <div className="form-group">
                            <label htmlFor="">Heading</label>
                            <input
                                className='form-control'
                                type="text"
                                name="labels"
                                value={edu[0]?.labels || ''}
                                onChange={(e) => handleInputChange(e, index, 0)} // Pass nestedIndex as 0
                            />
                        </div>
                    </form>
                    {/* Nested repeater block */}
                    {edu.map((nestedLabel, nestedIndex) => (
                        <div key={nestedIndex} className="nested-label">
                            <form>
                                <div className="form-group ">
                                    <label htmlFor="">Content</label>
                                    <ReactQuill
                                        className=''
                                        type="text"
                                        name="nestedLabels"
                                        value={nestedLabel.nestedLabels || ''}
                                        onChange={(value) => handleNestedInputChange(value, index, nestedIndex)}
                                    />
                                </div>
                            </form>
                            <button onClick={() => removeNestedLabels(index, nestedIndex)} className='btn small-btn'>Remove Nested -</button>
                        </div>
                    ))}
                    <button onClick={() => addNestedLabels(index)} className='btn small-btn'>Add Nested Labels +</button>
                </div>
            ))}
            <button onClick={addLabels} className='btn small-btn'>Add Labels +</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    labels: state.labels,
});

export default connect(mapStateToProps, { updateLabels })(Labels);
