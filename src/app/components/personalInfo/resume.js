import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLinksResume from '../personalInfo/NavLinksResume.js';
import {
    JobTitleHeader,
    HeadingTitle
} from '../../assets/styles/designStyling';
import Footer from '../design/footer.js';
import {
    JobName,
    JobTitle,
    JobDescription,
    ResumeSectionHeader,
    ResumeSkillsSection,
    ResumeSkillsHeader,
    ResumeSkillsHeaderColon,
    ResumeCollege,
    ResumeCollegeGPA,
    ResumeCollegeGrad
} from '../../assets/styles/personalInfoStyling';
import {
    CustomIcon
} from '../../assets/styles/fontAwesomeStyling';
import {
    SwingInTopDiv
} from '../../assets/styles/mainStyling';
import {
    resume
} from '../../../server/quickDB';

export default function Resume(props) {
    return (
        <div> 
            <SwingInTopDiv className="container-fluid m-0 p-0">
                <div class="row">
                    <JobTitleHeader className="col-sm-6">Full-Stack Developer</JobTitleHeader>
                    <div class="col-sm-6 pb-3">
                        <NavLinksResume />
                    </div>
                </div>
                <div class="container-fluid pt-3">
                    <div class="row">
                        <HeadingTitle className="pb-2 col-sm-6">Resume</HeadingTitle>
                    </div>
                    <div class="row">
                        <ResumeSectionHeader className="container-fluid pt-2 pb-1">Work</ResumeSectionHeader>
                        <div class="col-sm-12 pb-3">
                            <JobName>{resume.job1.jobName}</JobName>
                            <JobTitle>{resume.job1.jobTitleYears}</JobTitle>
                            <JobDescription>{resume.job1.jobDescription}</JobDescription>
                        </div>
                    {/*   <div class="col-sm-6">
                            <JobName>{resume.job2.jobName}</JobName>
                            <JobTitle>{resume.job2.jobTitleYears}</JobTitle>
                            <JobDescription>{resume.job2.jobDescription}</JobDescription>
                        </div>
                    */}
                    </div>
                    <div class="row">
                    <ResumeSectionHeader className="container-fluid pb-1 pt-2">Skills</ResumeSectionHeader>
                        <ResumeSkillsSection className="container-fluid pb-3">
                            <ResumeSkillsHeader><CustomIcon>Version Control<ResumeSkillsHeaderColon>:</ResumeSkillsHeaderColon> </CustomIcon></ResumeSkillsHeader>{resume.skills.versionControl}
                            <ResumeSkillsHeader><CustomIcon>Package Managers<ResumeSkillsHeaderColon>:</ResumeSkillsHeaderColon> </CustomIcon></ResumeSkillsHeader>{resume.skills.packageManagers}
                            <ResumeSkillsHeader><CustomIcon>Development Tools<ResumeSkillsHeaderColon>:</ResumeSkillsHeaderColon> </CustomIcon></ResumeSkillsHeader>{resume.skills.developmentTools}
                            <ResumeSkillsHeader><CustomIcon>Languages<ResumeSkillsHeaderColon>:</ResumeSkillsHeaderColon> </CustomIcon></ResumeSkillsHeader>{resume.skills.languages}
                            <ResumeSkillsHeader><CustomIcon>Frameworks & Libraries<ResumeSkillsHeaderColon>:</ResumeSkillsHeaderColon> </CustomIcon></ResumeSkillsHeader>{resume.skills.frameworksLibraries}
                            <ResumeSkillsHeader><CustomIcon>Design Tools<ResumeSkillsHeaderColon>:</ResumeSkillsHeaderColon> </CustomIcon></ResumeSkillsHeader>{resume.skills.designTools}
                        </ResumeSkillsSection>
                    </div>
                    <div class="row">
                    <ResumeSectionHeader className="container-fluid pb-2 pt-2">Education</ResumeSectionHeader>
                        <div class="col-sm-6 pb-3"> {/* Florida Tech Section */}
                            <div class="row mb-2 ml-1">
                                <div class="col-12 m-0 p-0">
                                    <ResumeCollege className="mb-0">{resume.education.college1.collegeName}</ResumeCollege>
                                </div>
                                <div class="col-12 m-0 p-0">
                                    <ResumeCollegeGrad>{resume.education.college1.collegeLocationGradYear}</ResumeCollegeGrad>
                                </div>
                            </div>
                            <div class="row mb-2 ml-1">
                                <div class="col-12 m-0 p-0">
                                    <ResumeCollege className="mb-0">{resume.education.college1.collegeDegree}</ResumeCollege>
                                </div>
                                <div class="col-12 m-0 p-0">
                                    <ResumeCollegeGPA>{resume.education.college1.collegeGPA}</ResumeCollegeGPA>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6"> {/* BCC Section */}
                            <div class="row mb-2 ml-1">
                                <div class="col-12 m-0 p-0">
                                    <ResumeCollege className="mb-0">{resume.education.college2.collegeLocationGradYear}</ResumeCollege>
                                </div>
                                <div class="col-12 m-0 p-0">
                                    <ResumeCollegeGrad>{resume.education.college2.collegeLocationGradYear}</ResumeCollegeGrad>
                                </div>
                            </div>
                            <div class="row mb-2 ml-1">
                                <div class="col-12 m-0 p-0">
                                    <ResumeCollege className="mb-0">{resume.education.college2.collegeDegree}</ResumeCollege>
                                </div>
                                <div class="col-12 m-0 p-0">
                                    <ResumeCollegeGPA>{resume.education.college2.collegeGPA}</ResumeCollegeGPA>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwingInTopDiv>
            <Footer/>
        </div>
    )
}