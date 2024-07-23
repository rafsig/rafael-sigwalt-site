import { useEffect } from "react";
import AboutMe from "../../components/Section/AboutMe";
import Skills from "../../components/Section/Skills";
import WorkExperienceSection from "../../components/Section/WorkExperience";
import ReactGA from 'react-ga';
export default function Home() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    });

    
    return (
    <>
        <AboutMe/>
        <Skills/>
        <WorkExperienceSection/> 
    </>);
}