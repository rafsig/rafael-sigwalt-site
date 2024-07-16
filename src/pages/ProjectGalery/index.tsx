import Modal from "../../components/Modal";
import Galery from "../../components/Section/Galery";
import Project from "../../models/Project";
import { useState } from "react";

export default function ProjectGalery() {

    const [project, setProject] = useState<Project>();

    return (
    <>
        <Galery setProject={setProject}></Galery>
        <Modal project={project} setProject={setProject}/>
    </>
    )

}