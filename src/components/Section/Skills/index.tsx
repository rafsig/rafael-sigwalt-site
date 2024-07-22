import styled from "styled-components";
import Section from ".."
import HighlightsList from "../../HighlightsList";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useSkillList } from "../../../state/hooks/SkillHook";


const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding:0 50px;
    height: 100%;

`

const Skills = () => {

    const skills = useSkillList();

    return(
    <Section id="Skills" title="Skills" titlePosition="right" icon={faCode}>
        <SkillsContainer>
            <HighlightsList highlights={skills.map(skill => skill.description)}></HighlightsList>
        </SkillsContainer>
    </Section>)
}

export default Skills;