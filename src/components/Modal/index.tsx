import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import { sectionTitleColor, specialFontColor } from "../GlobalStyle/styleVariables";

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
const ModalTitle = styled.h2`
text-align: center;
padding:20px;
margin:0;
background-color: ${sectionTitleColor};
color:${specialFontColor};
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

export default function Modal ({entity, callback, children}:{entity?:any, callback:Function, children:ReactNode}) {

    return (
    <>
        {entity?
        (
        <>
            <Overlay onClick={() => callback(undefined)}/>
            <DialogStyled open={entity ? true : false}>
                <ModalTitle>{entity.title}</ModalTitle>
               {children}
                <FormStyled method="dialog">
                    <CloseButton onClick={() => {callback(undefined)}}><FontAwesomeIcon icon={faX}/></CloseButton>
                </FormStyled>
            </DialogStyled>
        </>
        ) : <></>}
    </>

    )
}