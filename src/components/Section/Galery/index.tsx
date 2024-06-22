import styled from "styled-components";
import Card from "./Card";
import Section from "..";

import projects from "./projects.json";
import Project from "../../../models/Project";

const GaleryDivStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    gap:25px;

    @media(max-width: 1040px) {
        justify-content: center;
    }
`



const Galery = ({onSelectProject}:{onSelectProject:React.Dispatch<React.SetStateAction<Project | undefined>>}) => {
    return (
        <Section id="Projects" title="Projects Galery" mode="transparent" >
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
