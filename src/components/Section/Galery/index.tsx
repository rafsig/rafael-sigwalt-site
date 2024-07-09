import styled from "styled-components";
import Card from "./Card";
import Section from "..";

import projects from "./projects.json";
import Project from "../../../models/Project";
import { faCodePullRequest } from "@fortawesome/free-solid-svg-icons";

const GaleryDivStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    margin: 40px;
    gap:40px;
    @media (max-width:780px) {
        justify-content: center;
    }
`



const Galery = ({onSelectProject}:{onSelectProject:React.Dispatch<React.SetStateAction<Project | undefined>>}) => {
    return (
        <Section id="Projects" title="Projects Galery" titlePosition="top" icon={faCodePullRequest}>
            <GaleryDivStyled>
                {projects.map(project => 
                    (<Card
                        project={project}
                        onSelectProject={onSelectProject} />))}
            </GaleryDivStyled>
        </Section>
    );
}


export default Galery;
