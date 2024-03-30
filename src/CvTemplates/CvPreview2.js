import React from 'react';
import { connect } from 'react-redux';
import './CvPreview2.css'

const CvPreview2 = ({ personalInfo, education, template, skills, hobbies, labels }) => {
   
    
    return (
        <div>
            <div className="left-cv-layout">
                <div className="lft">
               
                    <div className="img-wp">

                        {personalInfo.photo && (
                            <img src={personalInfo.photo} alt="" />
                        )}
                        {personalInfo.name && (
                            <div className="full-name">
                                <span className="first-name">{personalInfo.name}</span>
                            </div>
                        )}
                        {personalInfo.designation && (
                            <div className="about">
                                <span className="position">{personalInfo.designation} </span>
                            </div>
                        )}

                    </div>
                    {(personalInfo.email || personalInfo.phone || personalInfo.address || personalInfo.alternatephone) && (
                        <div className="contact-details lft-section-wp">

                            <div className="lft-hd">
                                Contact
                            </div>
                            {(personalInfo.phone || personalInfo.alternatephone) && (
                                <div className="contact-blk lft-sc-blk">
                                    <div className="cnt-lft">
                                        Phone:
                                    </div>
                                    <div className="cnt-rgt">
                                        {personalInfo.phone && (<>
                                            {personalInfo.phone}<br />
                                            {personalInfo.alternatephone}
                                        </>
                                        )}
                                    </div>

                                </div>
                            )}
                            {personalInfo.email && (
                                <div className="contact-blk lft-sc-blk">
                                    <div className="cnt-lft">
                                        Email:
                                    </div>
                                    <div className="cnt-rgt">
                                        {personalInfo.email}
                                    </div>

                                </div>
                            )}
                            {personalInfo.address && (
                                <div className="contact-blk lft-sc-blk">
                                    <div className="cnt-lft">
                                        Address:
                                    </div>
                                    <div className="cnt-rgt">
                                        {personalInfo.address}
                                    </div>

                                </div>
                            )}
                        </div>
                    )}
                    {hobbies && hobbies.length > 0 && (
                        <div className="lft-section-wp ">
                            <div className="lft-hd">Hobbies</div>
                            {hobbies.map((hbs, index) => (
                                <div className="section__list">
                                    <div className="section-cnt">
                                        {hbs.hobbies}
                                    </div>


                                </div>
                            ))}

                        </div>
                    )}
                    {skills && skills.length > 0 && (
                            <div className="lft-section-wp">
                                <div className="lft-hd">Skills</div>
                                {skills.map((sku, index) => (
                                    <div className="section__list">
                                        <div className="section-cnt ">
                                            {sku.skill}
                                        </div>


                                    </div>
                                ))}

                            </div>
                        )}
                </div>
                <div className="rgt">
                    {(personalInfo.name || personalInfo.designation) && (
                        <div className="rgt-name-wp">
                            {personalInfo.name && <h2>{personalInfo.name}</h2>}
                            {personalInfo.designation && (
                                <div className="designation">
                                    {personalInfo.designation}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="details">
                    {personalInfo.profile && (
                            <div className="section">
                                <div className="section__title">Profile</div>
                               
                                    <div className="section__list">
                                        <div className="section__list-item">
                                        {personalInfo.profile}
                                        </div>


                                    </div>
                               

                            </div>
                        )}
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
export default connect(mapStateToProps)(CvPreview2)
