import styled from "styled-components";
import HighlightsList from "../../HighlightsList";
import SectionContentContainer from "../SectionContentContainer";

import workExperience from "../WorkExperience/work-experience.json";
import Section from "..";

const WorkExperienceTitle = styled.h4`
    margin: 0;
    padding: 0;
    font-size: 1.5em;
    
`;
const WorkExperienceDates = styled.h5`
    margin: 0;
    padding: 0;
    font-size: 1.1em;
    color: #616161;
`;

const WorkExperienceDescription = styled.p`
    padding:10px 0;
    line-height: 1.5em;
    text-align: justify;
    @media (max-width:600px) {
        text-align: left;
    }
`;

const WorkExperience = () => {
    return (
    <Section id="WorkExperience" title="Work Experience" mode="white">
        { workExperience.map( experience => (
           
                <SectionContentContainer>
                    <WorkExperienceTitle>{`${experience.role} at ${experience.companyName}`}</WorkExperienceTitle>
                    <WorkExperienceDates>{`from ${experience.dateStart} to ${experience.dateEnd}`}</WorkExperienceDates>
                    <WorkExperienceDescription>{experience.description}</WorkExperienceDescription>
                    <HighlightsList highlights = {experience.highlights}/>
                </SectionContentContainer>
            
        )) }
    </Section>
    );
}

export default WorkExperience;