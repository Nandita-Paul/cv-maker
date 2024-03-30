// cvActions.js
export const updatePersonalInfo = (data) => ({
    type: 'UPDATE_PERSONAL_INFO',
    payload: data,
  });
  
  export const updateEducation = (data) => ({ 
    type: 'UPDATE_EDUCATION',
    payload: data,
  });
  export const updateSkills = (data) => ({
    type: 'UPDATE_SKILLS',
    payload: data,
  });
  export const updateTemplate = (templateName) => ({
    type: 'UPDATE_TEMPLATE',
    payload: templateName,
  });
  export const updateHobbies = (data) => ({
    type: 'UPDATE_HOBBIES',
    payload: data,
  });
  export const updateLabels = (data) => ({
    type: 'UPDATE_LABELS',
    payload: data,
  });
  