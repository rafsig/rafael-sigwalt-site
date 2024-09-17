import styled from "styled-components"
import { specialFontColor } from "../../GlobalStyle/styleVariables";

export const CallToAction = styled.button`
    min-width: 100px;
    width:fit-content;
    padding: 20px 10px;
    background-color: ${specialFontColor};
    color:#f0f0f0;
    border:none;
    box-shadow: 0 4px 8px 0 ${specialFontColor}d0;
    transition: box-shadow 100ms;
    margin: 0 auto;
    text-decoration: none;
    &:hover{
        box-shadow: 0 2px 4px 0 ${specialFontColor}d0;
        cursor: pointer;
    }
`

export const CallToActionLink = styled.a`
    min-width:100px;
    width:fit-content;
    padding: 20px 10px;
    background-color: ${specialFontColor};
    color:#f0f0f0;
    border:none;
    box-shadow: 0 4px 8px 0 ${specialFontColor}d0;
    transition: box-shadow 100ms;
    margin: 0 auto;
    text-decoration: none;
    &:hover{
        box-shadow: 0 2px 4px 0 ${specialFontColor}d0;
        cursor: pointer;
    }
`