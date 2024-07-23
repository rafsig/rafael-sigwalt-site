import { useEffect } from "react";
import AboutMe from "../../components/Section/AboutMe";
import Skills from "../../components/Section/Skills";
import WorkExperienceSection from "../../components/Section/WorkExperience";
import ReactGA from 'react-ga4';
export default function Home() {

    useEffect(() => {
        ReactGA.send({
            hitType:"pageview",
            page:"Home",
            title:"Home"
        });
    });

    
    return (
    <>
        <AboutMe/>
        <Skills/>
        <WorkExperienceSection/> 
    </>);
}