import styled from "styled-components";
import Project from "../../models/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";


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
    position:absolute;
    margin:0 auto;
    padding:0;
    top:10%;
    height:80%;
    width:90%;
    max-width: 1440px;
    border-radius: 20px;
    border: none;
    background-color: #f0f0f0;
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
`

const ModalTitle = styled.h2`
    text-align: center;
`

const ProjectImage = styled.img`
    display: block;
    margin: 0 auto;
`

const Modal = ({project, setProject}:{project?:Project, setProject:React.Dispatch<React.SetStateAction<Project | undefined>>}) => {
    return (
    <>
        {project?
        (
        <Overlay>
            <DialogStyled open={project ? true : false}>
                    <ModalTitle>{project.title}</ModalTitle>
                    <ProjectImage src={project.imageUrl}></ProjectImage>
                    <div>bla</div>
                    <FormStyled method="dialog">
                        <CloseButton onClick={() => {setProject(undefined)}}><FontAwesomeIcon icon={faX}/></CloseButton>
                    </FormStyled>
            </DialogStyled>
        </Overlay>
        ) : <></>}
    </>

    )
}



export default Modal;