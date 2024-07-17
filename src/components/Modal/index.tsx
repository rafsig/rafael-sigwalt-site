import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

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

const Modal = ({project: entity, setProject, children}:{project?:any, setProject:Function, children:ReactNode}) => {

    return (
    <>
        {entity?
        (
        <>
            <Overlay onClick={() => setProject(undefined)}/>
            <DialogStyled open={entity ? true : false}>
               {children}
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