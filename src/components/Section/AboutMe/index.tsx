import styled from "styled-components";
import Section from "..";

import aboutMe from "./aboutMe.json";

const AboutMeContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin: 0 50px;
    gap:20px;
    height: 100%;
    justify-content: center;
`
const DescriptionParagraph = styled.p`
    text-align: justify;
    line-height: 1.5em;
    margin: 0 0 0 0;
    padding: 0;
`


const AboutMe = () => {
    return(
    <Section id="AboutMe" title="About Me" titlePosition="left" imagePath="/images/profile-picture.jpg">
        <AboutMeContainer>
            <DescriptionParagraph>
                {aboutMe.professionalDescription}
            </DescriptionParagraph>
            <DescriptionParagraph>
                {aboutMe.personalDescription}
            </DescriptionParagraph>
            <DescriptionParagraph>
            Fell free to connect with me on 
                <a href={aboutMe.links.linkedIn} target="_blank" rel="noreferrer"> LinkedIn</a> or explore my  
                <a href={aboutMe.links.github} target="_blank" rel="noreferrer"> GitHub</a> respositories
            </DescriptionParagraph>
        </AboutMeContainer>
    </Section>);
};

export default AboutMe;