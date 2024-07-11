import styled from "styled-components";
import Section from ".."
import HighlightsList from "../../HighlightsList";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Skill from "../../../models/Skill";
import axios from "axios";

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:0 50px;
    height: 100%;

`

const Skills = () => {

    const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        axios.get<Skill[]>(`${API_ENDPOINT}/skill`)
            .then(response => setSkills(response.data))
            .catch(err => console.log(err));
    },[])

    return(
    <Section id="Skills" title="Skills" titlePosition="right" icon={faCode}>
        <SkillsContainer>
            <HighlightsList highlights={skills.map(skill => skill.description)}></HighlightsList>
        </SkillsContainer>
    </Section>)
}

export default Skills;