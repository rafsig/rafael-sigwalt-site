import Galery from "../../components/Section/Galery";
import ProjectModal from "../../components/Section/Galery/ProjectModal";
import Project from "../../models/Project";
import { useState } from "react";

export default function ProjectGalery() {

    const [project, setProject] = useState<Project>();

    return (
    <>
        <Galery setProject={setProject}></Galery>
        <ProjectModal project={project} setProject={setProject}/>
    </>
    )

}