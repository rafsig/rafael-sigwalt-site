import styled from "styled-components";
import Card from "./Card";
import Section from "..";

import projects from "./projects.json";

const GaleryDivStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    gap:25px;
`



const Galery = () => {
    return (
        <Section id="Projects" title="Projects Galery" mode="transparent" >
            <GaleryDivStyled>
                {projects.map(project => 
                    (<Card 
                        title = {project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        git={project.git}
                        technologies={project.technologies} />))}
            </GaleryDivStyled>
        </Section>
    );
}


export default Galery;
