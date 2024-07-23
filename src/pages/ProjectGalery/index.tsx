import { useEffect } from "react";
import Galery from "../../components/Section/Galery";
import ProjectModal from "../../components/Section/Galery/ProjectModal";
import ReactGA from 'react-ga';


export default function ProjectGalery() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    });

    return (
    <>
        <Galery></Galery>
        <ProjectModal/>
    </>
    )

}