import styled from "styled-components";
import Section from "..";
import { useAbout } from "../../../state/hooks/AboutHook";


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


export default function AboutMe() {

    const about = useAbout();

    return(
    <Section id="AboutMe" title="About Me" titlePosition="left" imagePath="/images/profile-picture.png">
        <AboutMeContainer>
            <DescriptionParagraph>
                {about?.professionalDescription}
            </DescriptionParagraph>
            <DescriptionParagraph>
                {about?.personalDescription}
            </DescriptionParagraph>
            <DescriptionParagraph>
            Feel free to connect with me on 
                <a href={about?.links.linkedIn} target="_blank" rel="noreferrer"> LinkedIn</a> or explore my  
                <a href={about?.links.github} target="_blank" rel="noreferrer"> GitHub</a> respositories
            </DescriptionParagraph>
        </AboutMeContainer>
    </Section>);
};