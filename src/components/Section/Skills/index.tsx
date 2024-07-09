import styled from "styled-components";
import Section from ".."
import HighlightsList from "../../HighlightsList";

import skills from "./skills.json";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:0 50px;
    height: 100%;

`

const Skills = () => {
    return(
    <Section id="Skills" title="Skills" titlePosition="right" icon={faCode}>
        <SkillsContainer>
            <HighlightsList highlights={skills}></HighlightsList>
        </SkillsContainer>
    </Section>)
}

export default Skills;