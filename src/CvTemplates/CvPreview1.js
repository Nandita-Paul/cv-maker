
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import './CvPreview1.css';
import html2pdf from 'html2pdf.js';

const CvPreview1 = ({ personalInfo, education, template, skills, hobbies, labels }) => {
    const contentRef = useRef(null);

    const downloadPDF = () => {
        const element = contentRef.current;
        html2pdf()
            .from(element)
            .save('document.pdf');
    };


    return (
        <div >
            <div id="content" ref={contentRef}>
                <div className="container1 cv-preview1-sec cv-preview-smple">
                    <div className="header">

                        {personalInfo.name && (
                            <div className="full-name">
                                <span className="first-name">{personalInfo.name}</span>
                            </div>
                        )}

                        {personalInfo.email || personalInfo.phone ? (
                            <div className="contact-info">
                                {personalInfo.email && (
                                    <div>
                                        <span className="email">Email: </span>
                                        <span className="email-val">{personalInfo.email}</span>
                                    </div>
                                )}
                                {personalInfo.phone && (
                                    <div>
                                       
                                        <span className="phone">Phone: </span>
                                        <span className="phone-val">{personalInfo.phone}</span>
                                    </div>
                                )}
                            </div>
                        ) : null}

                        {personalInfo.address || personalInfo.alternatephone ? (

                            <div className="contact-info">
                                {personalInfo.alternatephone && (
                                    <div>
                                        <span className="email">Alternate Phone Number: </span>
                                        <span className="email-val">{personalInfo.alternatephone}</span>
                                       
                                    </div>
                                )}
                                {personalInfo.address && (<>
                                    <span className="phone">Address: </span>
                                    <span className="phone-val">{personalInfo.address}</span>
                                </>
                                )}
                            </div>
                        ): null}
                        {personalInfo.profile || personalInfo.designation || (
                            <div className="about">
                                {personalInfo.designation && (<>
                                    <span className="position">{personalInfo.designation} </span>
                                </>
                                )}
                                {personalInfo.profile && (
                                    <>
                                        <span className="desc">
                                            {personalInfo.profile}
                                        </span>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="details">
                        {education && education.length > 0 && (
                            <div className="section">
                                <div className="section__title">Education</div>
                                {education.map((edu, index) => (
                                    <div className="section__list">
                                        <div className="section__list-item">
                                            <div className="left">
                                                <div className="name">{edu.institution}</div>
                                                <div className="degree">{edu.degree}</div>
                                                <div className="field">{edu.fieldOfStudy}</div>
                                            </div>
                                            <div className="right">
                                                <div className="date">{edu.startDate} to  {edu.endDate} </div>

                                            </div>
                                        </div>


                                    </div>
                                ))}

                            </div>
                        )}
                        {skills && skills.length > 0 && (
                            <div className="section">
                                <div className="section__title">Skills</div>
                                <div className="list-flex">
                                {skills.map((sku, index) => (
                                    <div className="section__list">
                                        <div className="section__list-item">
                                            {sku.skill}
                                        </div>


                                    </div>
                                ))}
</div>
                            </div>
                        )}
                        {hobbies && hobbies.length > 0 && (
                            <div className="section">
                                <div className="section__title">Hobbies</div>
                                <div className="list-flex">
                                {hobbies.map((hbs, index) => (
                                    <div className="section__list">
                                        <div className="section__list-item">
                                            {hbs.hobbies}
                                        </div>


                                    </div>
                                ))}
</div>
                            </div>
                        )}

                        {labels && labels.length > 0 && (
                            <>
                                {labels.map((edu, index) => (
                                    <div className="section">
                                        <div className="section__title"> {edu[0]?.labels}</div>
                                        {edu.map((nestedLabel, nestedIndex) => (
                                            <>
                                                {nestedLabel.nestedLabels && (
                                                    <div className="section__list">
                                                        <div className="section__list-item">

                                                            <div dangerouslySetInnerHTML={{ __html: nestedLabel.nestedLabels }}></div>
                                                        </div>


                                                    </div>
                                                )}
                                            </>
                                        ))}

                                    </div>
                                ))}
                            </>
                        )}


                    </div>
                </div>
            </div>
            <button onClick={downloadPDF}>Download PDF</button>
        </div>
    )
}
const mapStateToProps = (state) => ({
    personalInfo: state.personalInfo,
    education: state.education,
    template: state.template,
    skills: state.skills,
    hobbies: state.hobbies,
    labels: state.labels
    // Add other mapStateToProps as needed
});
export default connect(mapStateToProps)(CvPreview1)