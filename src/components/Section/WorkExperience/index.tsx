import Section from "..";
import { faChevronLeft, faChevronRight, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import WorkExperienceCard from "./WorkExperienceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { disabledColor, specialFontColor } from "../../GlobalStyle/styleVariables";

import { useState } from "react";
import { useWorkExperienceList } from "../../../state/hooks/WorkExperienceHook";


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
    margin-top: 20px;
    button {
        border:none;
        cursor: pointer;
        background-color: transparent;
        font-size: 1.2em;
        padding:10px;
        color:${specialFontColor};
        &:disabled {
            color:${disabledColor};
        }
    }
`

const Item = styled.div<ItemProp>`
    height: ${props => props.$selected ? '10px' : '8px'};
    width: ${props => props.$selected ? '10px' : '8px'};;
    background-color: ${props => props.$selected ? specialFontColor : disabledColor};
    margin:10px;
    border-radius: ${props => props.$selected ? '5px' : '4px'};
    @media (max-width: 800px) {
        visibility: hidden;
        position: absolute;
        left:-999;
    }
`

const WorkExperienceSection = () => {


    
    const [experienceIndex, setExperienceIndex] = useState(0);

    const experienceList = useWorkExperienceList();

    function goToNextExperience() {
        if(experienceIndex < experienceList.length - 1) {
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
             <CarrouselContainer>
                <button 
                    disabled={experienceIndex === 0 ? true : false} 
                    onClick={goToPreviousExperience}>
                        <FontAwesomeIcon icon={faChevronLeft}/> Previous</button>
                {
                    experienceList
                        .map((_currentExperience, index) =>
                            <Item key={index} $selected={ index === experienceIndex ? true : false}></Item>)
                }
                <button disabled={experienceIndex === experienceList.length - 1 ? true : false} onClick={goToNextExperience}>Next <FontAwesomeIcon icon={faChevronRight}/></button>
            </CarrouselContainer>
            { experienceList[experienceIndex] &&
            <WorkExperienceCard {...experienceList[experienceIndex]} />
            }
           
        </Section>
    );
}

export default WorkExperienceSection;