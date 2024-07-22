import styled from "styled-components";
import Section from "..";
import { faCodePullRequest } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "./Card";
import { useProjectList } from "../../../state/hooks/ProjectHook";

const GaleryDivStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    margin: 40px;
    gap:40px;
    min-height: calc(100vh - 135px - 160px - 25px - 80px);
    @media (max-width:780px) {
        justify-content: center;
    }
`



const Galery = () => {

    const projects = useProjectList();


    return (
        <Section id="Projects" title="Projects Galery" titlePosition="top" icon={faCodePullRequest}>
            <GaleryDivStyled>
                {projects.map((project, index) => 
                    (<ProjectCard
                        key={index}
                        project={project}
                        />))}
            </GaleryDivStyled>
        </Section>
    );
}


export default Galery;
