import styled from "styled-components";
import { Skill, SkillList } from "../../../Skills";
import Modal from "../../../Modal";
import { useProejct, useSetProjectId } from "../../../../state/hooks/ProjectHook";
import { handleAnchorClick } from "../../../../ga4/util";

const ProjectImage = styled.img`
display: block;
margin: 0 auto;
width:80%;
max-height: 30%;
object-fit: cover;
object-position: top;
`

const InfoContainer = styled.div`
padding: 20px;
line-height: 1.5em;
`

export default function ProjectModal() {

    const project = useProejct();
    const setProjectId = useSetProjectId();

    return (
    <Modal entity={project} callback={setProjectId}>
        <ProjectImage src={project?.imageUrl}></ProjectImage>
        <InfoContainer>
            <h4>Description</h4>
            <p>{project?.description}</p>
            
            {
            project?.nextSteps?
                <>
                <h4>Next Steps</h4> 
                <ol>
                    {project.nextSteps.map((nextStep, index) => <li key={index}>{nextStep}</li>)}
                </ol></>: <></>
            }
            <h4>Skills</h4>
            <SkillList>
                {project?.skills.map((skill, index) => <Skill key={index}>{skill}</Skill>)}
            </SkillList>
            {
                project?.git ?
                <>
                    <h4>Links</h4>
                    <a href={project.git} onClick={() => handleAnchorClick(project.git!)} target="_blank" rel="noreferrer">GitHub</a>
                </>
                : <></>
            }
        </InfoContainer>
    </Modal>
    );
}