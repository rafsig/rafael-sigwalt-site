import styled from "styled-components";
import Section from "..";
import { useEffect, useState } from "react";
import About from "../../../models/About";
import axios from "axios";

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
    const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

    const [about, setAbout] = useState<About | undefined>();
    
    useEffect(() => {
        axios
            .get<About>(`${API_ENDPOINT}/about`)
            .then(result => {
                setAbout(result.data);
                console.log(import.meta);
            })
            .catch(err => console.log(err));
    } , [] );

    return(
    <Section id="AboutMe" title="About Me" titlePosition="left" imagePath="/images/profile-picture.jpg">
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

export default AboutMe;