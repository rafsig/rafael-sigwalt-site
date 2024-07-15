import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Section from "..";
import styled from "styled-components";
import graduations from "./graduations.json"
import GraduationSection from "./Graduation";

const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding:0 50px;
`

export default function EducationSection() {
    return (
        <Section id="graduation" title="Graduations" titlePosition="right" icon={faGraduationCap}>
            <ContentDiv>
                {graduations.map(graduation =>
                    <GraduationSection key={graduation.id} graduation={graduation}/>
                )}
            </ContentDiv>
        </Section>);
}