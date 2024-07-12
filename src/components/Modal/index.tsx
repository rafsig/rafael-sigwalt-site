import styled from "styled-components";
import Project from "../../models/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { SkillList, Skill } from "../Skills";
import { sectionTitleColor, specialFontColor } from "../GlobalStyle/styleVariables";
import { useEffect, useState } from "react";
import axios from "axios";


const Overlay = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1000;
`

const DialogStyled = styled.dialog`
    position:fixed;
    margin:0 auto;
    padding:0;
    top:5%;
    height:90%;
    width:90%;
    max-width: 1400px;
    border-radius: 20px;
    border: none;
    background-color: #f0f0f0;
    overflow: scroll;
    scrollbar-width:none;
    z-index: 1001;
`

const FormStyled = styled.form`
    position: absolute;
    top: 20px;
    right:20px;
`

const CloseButton = styled.button`
    border:none;
    margin: 0;
    padding: 0;
    background-color: transparent;
`

const ModalTitle = styled.h2`
    text-align: center;
    padding:20px;
    margin:0;
    background-color: ${sectionTitleColor};
    color:${specialFontColor};
`

const ProjectImage = styled.img`
    display: block;
    margin: 0 auto;
    width:80%;
    max-height: 30%;
    object-fit: cover;
    object-position: top;
`

const InfoContainer = styled.div`
    padding: 20px;
    line-height: 1.5em;
`

const Modal = ({project, setProject}:{project?:Project, setProject:React.Dispatch<React.SetStateAction<Project | undefined>>}) => {

    return (
    <>
        {project?
        (
        <>
            <Overlay onClick={() => setProject(undefined)}/>
            <DialogStyled open={project ? true : false}>
                <ModalTitle>{project.title}</ModalTitle>
                <ProjectImage src={project.imageUrl}></ProjectImage>
                <InfoContainer>
                    <h4>Description</h4>
                    <p>{project.description}</p>
                    
                    {
                    project.nextSteps?
                        <>
                        <h4>Next Steps</h4> 
                        <ol>
                            {project.nextSteps.map(nextStep => <li>{nextStep}</li>)}
                        </ol></>: <></>
                    }
                    <h4>Skills</h4>
                    <SkillList>
                        {project.skills.map(skill => <Skill>{skill}</Skill>)}
                    </SkillList>
                    {
                        project.git ?
                        <>
                            <h4>Links</h4>
                            <a href={project.git}>GitHub</a>
                        </>
                        : <></>
                    }
                </InfoContainer>
                <FormStyled method="dialog">
                    <CloseButton onClick={() => {setProject(undefined)}}><FontAwesomeIcon icon={faX}/></CloseButton>
                </FormStyled>
            </DialogStyled>
        </>
        ) : <></>}
    </>

    )
}



export default Modal;