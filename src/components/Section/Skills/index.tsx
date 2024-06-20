import Section from ".."
import HighlightsList from "../../HighlightsList";
import SectionContentContainer from "../SectionContentContainer";

import skills from "./skills.json";

const Skills = () => {
    return(
    <Section id="Skills" title="Skills" mode="white">
        <SectionContentContainer>
            <HighlightsList highlights={skills}></HighlightsList>
        </SectionContentContainer>
    </Section>)
}

export default Skills;