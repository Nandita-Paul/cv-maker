const initialState = {
    personalInfo: {},
    education: [],
    skills:[],
    hobbies:[],
    labels:[],
    template: 'template1',
    // ... other CV sections
  };
  
  const cvReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_PERSONAL_INFO':
        return { ...state, personalInfo: action.payload };
      case 'UPDATE_EDUCATION':
        return { ...state, education: action.payload };
        case 'UPDATE_SKILLS':
          return { ...state, skills: action.payload };
          case 'UPDATE_HOBBIES':
            return { ...state, hobbies: action.payload };
            case 'UPDATE_LABELS':
            return { ...state, labels: action.payload };
        case 'UPDATE_TEMPLATE':
          return {
            ...state,
            template: action.payload,
          };
      default:
        return state;
    }
  };
  console.log(initialState.personalInfo);
  export default cvReducer;