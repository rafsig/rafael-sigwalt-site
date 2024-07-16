import styled from "styled-components";
import { GaleryCardProps } from "../../../../models/props/GaleryCardProps";
import { SkillList, Skill } from "../../../Skills";
import axios from "axios";
import Project from "../../../../models/Project";
import Card from "../../../Card";

const CardImageStyled = styled.img`
    width:100%;
    height:33%;
    border-radius:20px, 20px, 0, 0;
    opacity:80%;
    object-fit: cover;
    object-position: top;
`
const CardContentCotainer = styled.div`
    padding:10px 10px;
    height: 238px;
    display: flex;
    flex-direction: column;
    gap:30px;
    flex-wrap: nowrap;
`

const CardTitle = styled.h3`
    font-size: 1.2em;
    margin: 0;
    padding: 0;
`

const Description = styled.p`
    margin: 0;
    height: 65px;
    @media (max-width: 800px) {
        height: fit-content;
    }
`

const ProjectCard = (props:GaleryCardProps) => {

    const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

    function selectProject(event:React.MouseEvent<HTMLDivElement, MouseEvent>, project: Project) {
        event.stopPropagation();
        if(project.id) {
        axios.get<Project>(`${API_ENDPOINT}/project/${project?.id}`)
            .then(response => props.setProject(response.data))
            .catch(err => console.log(err));
        }
    }

    return (
        <Card callBack={selectProject} selection={props.project}>
            <CardImageStyled src={props.project.imageUrl}></CardImageStyled>
            <CardContentCotainer>
                <CardTitle>{props.project.title}</CardTitle>
                <Description>{props.project.shortDescription}</Description>
                <SkillList>
                    {props.project.skills.map((tech, index)=> <Skill key={index} >{tech}</Skill>)} 
                </SkillList>
                {
                    props.project.git ? 
                        <a 
                            href={props.project.git} 
                            target="_blank" 
                            rel="noreferrer" 
                            onClick={event => event.stopPropagation()}>GitHub</a> : <></>
                }
                
            </CardContentCotainer>
        </Card>  
    );
}

export default ProjectCard;