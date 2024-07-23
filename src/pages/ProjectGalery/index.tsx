import { useEffect } from "react";
import Galery from "../../components/Section/Galery";
import ProjectModal from "../../components/Section/Galery/ProjectModal";
import { pageVisit } from "../../ga4/util";

export default function ProjectGalery() {

    useEffect(() => {
        pageVisit("Project Galery");
    });

    return (
    <>
        <Galery></Galery>
        <ProjectModal/>
    </>
    )

}