import styled from "styled-components";
import Card from "./Card";
import Section from "..";
import Project from "../../../models/Project";
import { faCodePullRequest } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

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

    const [projects, setProjects] = useState<Project[]>([]); 

    const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

    useEffect(() => {
        axios.get<Project[]>(`${API_ENDPOINT}/project`)
            .then(response => setProjects(response.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <Section id="Projects" title="Projects Galery" titlePosition="top" icon={faCodePullRequest}>
            <GaleryDivStyled>
                {projects.map((project, index) => 
                    (<Card
                        key={index}
                        project={project}
                        onSelectProject={onSelectProject} />))}
            </GaleryDivStyled>
        </Section>
    );
}


export default Galery;
