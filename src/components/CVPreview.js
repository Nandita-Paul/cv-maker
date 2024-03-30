// components/CVPreview.js
import React from 'react';
import { connect } from 'react-redux';
import CvPreview1 from '../CvTemplates/CvPreview1';
import CvPreview2 from '../CvTemplates/CvPreview2';
import CvPreview3 from '../CvTemplates/CvPreview3';
import CvPreview4 from '../CvTemplates/CvPreview4';
import CvPreview5 from '../CvTemplates/CvPreview5';
import CvPreview6 from '../CvTemplates/CvPreview6';

const CVPreview = ({ template }) => {
  return (
    <div class="cv-preview-wp"> 
      <div className="container">

     
      <h2 class="text-center heading">CV Preview</h2>
      <div className="cv-preview">

      </div>
      {template === 'template1' ? (<CvPreview1/>) : 
      template ==='template2' ? (<CvPreview2/>) :
      template ==='template3' ? (<CvPreview3/>):
      template ==='template4' ? (<CvPreview4/>):
      template ==='template5' ? (<CvPreview5/>):
      template ==='template6' ? (<CvPreview6/>):''}
      
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template,
  // Add other mapStateToProps as needed
});

export default connect(mapStateToProps)(CVPreview);