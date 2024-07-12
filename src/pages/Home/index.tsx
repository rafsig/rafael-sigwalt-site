import axios from "axios";
import Modal from "../../components/Modal";
import AboutMe from "../../components/Section/AboutMe";
import Galery from "../../components/Section/Galery";
import Skills from "../../components/Section/Skills";
import WorkExperienceSection from "../../components/Section/WorkExperience";
import Project from "../../models/Project";
import { useState } from "react";

export default function Home() {
    const [project, setProject] = useState<Project>();

    const API_ENDPOINT = import.meta.env.VITE_REACT_APP_CLIENT_ID;

    function selectProject(event:React.MouseEvent<HTMLDivElement, MouseEvent>, project: Project) {
        event.stopPropagation();
        if(project.id) {
        axios.get<Project>(`${API_ENDPOINT}/project/${project?.id}`)
            .then(response => setProject(response.data))
            .catch(err => console.log(err));
        }
    }

    return (
    <>
        <AboutMe/>
        <Skills/>
        <WorkExperienceSection/>
        <Galery onSelectProject={selectProject}></Galery>
        <Modal project={project} setProject={setProject}/>
    </>);
}