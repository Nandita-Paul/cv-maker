import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updatePersonalInfo } from '../actions/cvActions';

const PersonalInfo = ({ personalInfo, updatePersonalInfo, template }) => {
  const [imagePreview, setImagePreview] = useState('');
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Used to reset file input

  useEffect(() => {
    const storedPersonalInfo = localStorage.getItem('personalInfo');
    if (storedPersonalInfo) {
      const parsedPersonalInfo = JSON.parse(storedPersonalInfo);
      updatePersonalInfo(parsedPersonalInfo);
      // Check if the profile photo exists in localStorage
      if (parsedPersonalInfo.photo) {
        setImagePreview(parsedPersonalInfo.photo);
      }
    }
  }, [updatePersonalInfo]);

  const handleInputChange = async (e) => {
    const { name, type } = e.target;
  
    if (type === 'file') {
      const file = e.target.files[0];
      if (file) {
        if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
          alert('Only JPG, JPEG, and PNG files are supported.');
          return;
        }

        try {
          const imageData = await readFileAsDataURL(file);
          setImagePreview(imageData);
          const updatedInfo = { ...personalInfo, [name]: imageData };
          updatePersonalInfo(updatedInfo);
          localStorage.setItem('personalInfo', JSON.stringify(updatedInfo));
        } catch (error) {
          console.error('Error reading file:', error);
        }
      }
    } else {
      const { value } = e.target;
      const updatedInfo = { ...personalInfo, [name]: value };
      updatePersonalInfo(updatedInfo);
      localStorage.setItem('personalInfo', JSON.stringify(updatedInfo));
    }
  };

  const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
        reader.abort(); // Clear the FileReader instance
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const resetFileInput = () => {
    // To reset the file input, change its key
    setFileInputKey(Date.now());
    // Clear the image preview
    setImagePreview('');
    // Clear the personalInfo.photo in Redux and localStorage
    const updatedInfo = { ...personalInfo, photo: '' };
    updatePersonalInfo(updatedInfo);
    localStorage.setItem('personalInfo', JSON.stringify(updatedInfo));
  };

  return (
    <div className="form-wp">
      <h2>Personal Information</h2>

      <form>
        {(template !== 'template1') && (template !== 'template3') && (template !== 'template4') && (
          <div className="form-group">
            <label>
              Profile Photo: (supported file: .jpg, .jpeg, .png)
            </label>
            <input
              key={fileInputKey} // Reset the input when needed
              type="file"
              name="photo"
              onChange={handleInputChange}
              className='form-control'
            />
          </div>

        )}
         {(template !== 'template1') && (template !== 'template3') && (template !== 'template4') && (
       <>
        {imagePreview && (
          <div className="form-group">
            <img src={imagePreview} alt="Preview" style={{ width: '100px', height: '100px' }} />
            <button type="button" onClick={resetFileInput}>Remove</button>
          </div>
        )}
        </>
        )}
        <div className="form-group">
          <label>
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={personalInfo.name || ''}
            onChange={handleInputChange}
            className='form-control'
          />
        </div>
        <div className="form-group">
          <label>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={personalInfo.email || ''}
            onChange={handleInputChange}
            className='form-control'
          />
        </div>
        <div className="form-group">
          <label>
            Phone Number:
          </label>
          <input
            type="tel"
            name="phone"
            value={personalInfo.phone || ''}
            onChange={handleInputChange}
            className='form-control'
          />
        </div>
        <div className="form-group">
          <label>
            Alternate Phone Number:
          </label>
          <input
            type="tel"
            name="alternatephone"
            value={personalInfo.alternatephone || ''}
            onChange={handleInputChange}
            className='form-control'
          />
        </div>
        <div className="form-group">
          <label>
            Address:
          </label>
          <input
            type="text"
            name="address"
            value={personalInfo.address || ''}
            onChange={handleInputChange}
            className='form-control'
          />
        </div>
        <div className="form-group">
          <label>
            Designation:
          </label>
          <input
            type="text"
            name="designation"
            value={personalInfo.designation || ''}
            onChange={handleInputChange}
            className='form-control'
          />
        </div>
        <div className="form-group">
          <label>
            About:
          </label>
          <textarea
            type="text"
            name="profile"
            value={personalInfo.profile || ''}
            onChange={handleInputChange}
            className='form-control'
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  personalInfo: state.personalInfo,
  template: state.template,
});

export default connect(mapStateToProps, { updatePersonalInfo })(PersonalInfo);
