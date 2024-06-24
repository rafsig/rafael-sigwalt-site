import styled from "styled-components";
import SectionContentContainer from "../SectionContentContainer";
import Section from "..";

import aboutMe from "./aboutMe.json";

const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap:20px;
    @media (max-width:1040px) {
        justify-content: center;
    }
`

const ProfileImage = styled.img`
    width:230px;
    border-radius: 20px;
    box-shadow:2px 2px 5px gray;
`

const DescriptionContainer = styled.div`
    margin-left:20px;
    width:690px;
`
const DescriptionParagraph = styled.p`
    text-align: justify;
    line-height: 1.5em;
    margin: 0 0 20px 0;
    padding: 0;
    @media (max-width:600px) {
        text-align: left;
    }
`


const AboutMe = () => {
    return(<Section id="AboutMe" title="About Me" mode="white" >
        <SectionContentContainer>
            <AboutMeContainer>
                <ProfileImage src="/images/profile-picture.jpg"></ProfileImage>
                <DescriptionContainer>
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
                </DescriptionContainer>
            </AboutMeContainer>
        </SectionContentContainer>
    </Section>);
};

export default AboutMe;