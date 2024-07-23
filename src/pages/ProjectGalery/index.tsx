import { useEffect } from "react";
import Galery from "../../components/Section/Galery";
import ProjectModal from "../../components/Section/Galery/ProjectModal";
import ReactGA from 'react-ga4';


export default function ProjectGalery() {

    useEffect(() => {
        ReactGA.send({
            hitType:"pageview",
            page:"Project Galery",
            title:"Project Galery"
        });
    });

    return (
    <>
        <Galery></Galery>
        <ProjectModal/>
    </>
    )

}