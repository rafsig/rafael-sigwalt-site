import workExperience from "../WorkExperience/work-experience.json";
import Section from "..";
import { faChevronLeft, faChevronRight, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import WorkExperienceCard from "./WorkExperienceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useEffect, useState } from "react";
import WorkExperience from "../../../models/WorkExperience";
import { disabledColor, specialFontColor } from "../../GlobalStyle/styleVariables";


interface ItemProp {
    $selected?:boolean;
}

const CarrouselContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction:row;
    gap: 10px;
    justify-content: center;
    align-items: center;
    button {
        border:none;
        cursor: pointer;
        background-color: transparent;
        font-size: 1.2em;
        padding:10px;
        color:${specialFontColor};
    }
`

const Item = styled.div<ItemProp>`
    height: ${props => props.$selected ? '10px' : '8px'};
    width: ${props => props.$selected ? '10px' : '8px'};;
    background-color: ${props => props.$selected ? specialFontColor : disabledColor};
    margin:10px;
    border-radius: ${props => props.$selected ? '5px' : '4px'};;
`

const WorkExperienceSection = () => {

    const [experienceIndex, setExperienceIndex] = useState(0);

    const [experience, setExperience] = useState<WorkExperience>(workExperience[0]);

    useEffect(()=>{
        setExperience(workExperience[experienceIndex])
    }, [experienceIndex]);

    function goToNextExperience() {
        if(experienceIndex < workExperience.length - 1) {
            setExperienceIndex(experienceIndex + 1);
        }
    }

    function goToPreviousExperience() {
        if(experienceIndex > 0) {
            setExperienceIndex(experienceIndex - 1);
        }
    }

    return (
        <Section id="WorkExperience" title="Work Experience" titlePosition="top" icon={faLaptopCode}>
            <WorkExperienceCard {...experience} />
            <CarrouselContainer>
                <button disabled={experienceIndex === 0 ? true : false} onClick={goToPreviousExperience}><FontAwesomeIcon icon={faChevronLeft}/> Previous</button>
                {workExperience.map((_currentExperience, index) =><Item $selected={ index === experienceIndex ? true : false}></Item>)}
                <button disabled={experienceIndex === workExperience.length - 1 ? true : false} onClick={goToNextExperience}>Next <FontAwesomeIcon icon={faChevronRight}/></button>
            </CarrouselContainer>
        </Section>
    );
}

export default WorkExperienceSection;