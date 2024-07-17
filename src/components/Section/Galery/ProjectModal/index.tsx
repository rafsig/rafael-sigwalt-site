import styled from "styled-components";
import { sectionTitleColor, specialFontColor } from "../../../GlobalStyle/styleVariables";
import { Skill, SkillList } from "../../../Skills";
import Project from "../../../../models/Project";
import Modal from "../../../Modal";

const ModalTitle = styled.h2`
text-align: center;
padding:20px;
margin:0;
background-color: ${sectionTitleColor};
color:${specialFontColor};
`

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

export default function ProjectModal({project, setProject}:{project?:Project, setProject:React.Dispatch<React.SetStateAction<Project | undefined>>}) {

    return (
    <Modal project={project} setProject={setProject}>
        <ModalTitle>{project?.title}</ModalTitle>
        <ProjectImage src={project?.imageUrl}></ProjectImage>
        <InfoContainer>
            <h4>Description</h4>
            <p>{project?.description}</p>
            
            {
            project?.nextSteps?
                <>
                <h4>Next Steps</h4> 
                <ol>
                    {project.nextSteps.map(nextStep => <li>{nextStep}</li>)}
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
                    <a href={project.git}>GitHub</a>
                </>
                : <></>
            }
        </InfoContainer>
    </Modal>
    );
}