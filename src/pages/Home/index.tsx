import { useEffect } from "react";
import AboutMe from "../../components/Section/AboutMe";
import Skills from "../../components/Section/Skills";
import WorkExperienceSection from "../../components/Section/WorkExperience";
import { pageVisit } from "../../ga4/util";

export default function Home() {

    useEffect(() => {
        pageVisit("Home")
    });

    
    return (
    <>
        <AboutMe/>
        <Skills/>
        <WorkExperienceSection/> 
    </>);
}