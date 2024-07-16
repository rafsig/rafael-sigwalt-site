import styled from "styled-components";
import Section from "..";
import Project from "../../../models/Project";
import { faCodePullRequest } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./Card";

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



const Galery = ({setProject}:{setProject:React.Dispatch<React.SetStateAction<Project | undefined>>}) => {

    const [projects, setProjects] = useState<Project[]>([]); 

    const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

    useEffect(() => {
        axios.get<Project[]>(`${API_ENDPOINT}/project`)
            .then(response => setProjects(response.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <Section id="Projects" title="Projects Galery" titlePosition="top" icon={faCodePullRequest}>
            <GaleryDivStyled>
                {projects.map((project, index) => 
                    (<ProjectCard
                        key={index}
                        project={project}
                        setProject={setProject} />))}
            </GaleryDivStyled>
        </Section>
    );
}


export default Galery;
