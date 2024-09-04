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
    @media (max-width: 800px) {
        padding: 0 20px;
    }

`

export default function Skills() {

    const skills = useSkillList();

    return(
    <Section id="Skills" title="Skills" titlePosition="right" icon={faCode}>
        <SkillsContainer>
            <HighlightsList highlights={skills.map(skill => skill)}></HighlightsList>
        </SkillsContainer>
    </Section>)
}