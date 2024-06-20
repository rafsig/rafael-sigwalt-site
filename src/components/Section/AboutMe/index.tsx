import styled from "styled-components";
import SectionContentContainer from "../SectionContentContainer";
import Section from "..";

const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap:20px;
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
`


const AboutMe = () => {
    return(<Section id="AboutMe" title="About Me" mode="white" >
        <SectionContentContainer>
            <AboutMeContainer>
                <ProfileImage src="/images/profile-picture.jpg"></ProfileImage>
                <DescriptionContainer>
                    <DescriptionParagraph>
                    A software developer, with Bachelor in Mechanical Engineering and a Software Development and Network Engineering colege diploma. With five years of professional experience, I have successfully delivered complex web applications using Java Spring Boot, Angular and SQL. My expertise includes full-stack development, REST APIs and cloud technologies.
                    </DescriptionParagraph>
                    <DescriptionParagraph>
                    In my free time I use moutain biking and hiking as ways to clear the mind to solve complex problems, while keeping updated on the latest trends and technologies through continuous learning.
                    </DescriptionParagraph>
                    <DescriptionParagraph>
                    Fell free to connect with me on <a href="https://www.linkedin.com/in/rafaelsigwalt/" target="_blank" rel="noreferrer">LinkedIn</a> or explore my <a href="#" target="_blank">GitHub</a> respositories
                    </DescriptionParagraph>
                </DescriptionContainer>
            </AboutMeContainer>
        </SectionContentContainer>
    </Section>);
};

export default AboutMe;