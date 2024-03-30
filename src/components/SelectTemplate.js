import React, { useEffect } from 'react';
import '../App.css'; // Importing the CSS fi

import { Link } from 'react-router-dom';
import { useDispatch ,  useSelector} from 'react-redux';
import { updateTemplate } from '../actions/cvActions';


const SelectTemplate = () => {
    const applicants = [
        { image: '/images/cv6.png', templateName:'template6' },
        { image: '/images/cv2.png' , templateName:'template2' },
        { image: '/images/cv3.png' , templateName:'template3' },
        { image: '/images/cv4.png' , templateName:'template4' },
        { image: '/images/cv5.png', templateName:'template5'  },
        { image: '/images/1.png', templateName:'template1'  },

    ];
    const dispatch = useDispatch();
    const currentTemplateName = useSelector(state => state.template);

  const handleLinkClick = (templateName) => {
    // Dispatch the action to update the template name in the Redux store
    // const templateName="template1";
    dispatch(updateTemplate(templateName));
    // console.log('Current Template Name:', currentTemplateName);
    
  };
  useEffect(() => {
    // Log the current template name state to the console after it's updated
    console.log('Current Template Name:', currentTemplateName);
  }, [currentTemplateName]);
    return (
        <div className='container'>
            <div className='text-center'>
                <h2>
                    Select Template
                </h2>
            </div>
            <div class="row mt-5">
                {applicants.map(function (data) {
                    return (
                        <div class="col-md-4 image-block col-block">
                            <div className="template-blk">
                           <a href={data.image} target="_blank"> <img src={data.image} alt="image" /></a>
                            <Link to="/file" className='btn' onClick={() => handleLinkClick(data.templateName)}>Select</Link>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default SelectTemplate
