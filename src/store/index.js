// store/index.js
import { createStore } from 'redux';
import cvReducer from '../reducers/cvReducer';


const store = createStore(cvReducer );

export default store;