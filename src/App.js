// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditedFile from './components/EditedFile';
import CvPreview from './components/CVPreview';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
         
            <Route index element={<Home />} />
              
           
            <Route path="file" element={<EditedFile />} />
            <Route path="preview" element={<CvPreview />} />


          
        </Routes>
      </BrowserRouter>
    </Provider>


  );
};

export default App;