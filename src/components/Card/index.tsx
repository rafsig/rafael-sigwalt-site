import { ReactNode } from "react";
import styled from "styled-components";

const CardDivStyled = styled.div`
    width:300px;
    padding-bottom:20px;
    height:fit-content;
    background-color: rgba(240, 240, 240, 0.80);
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow: hidden;
    &:hover{
        background-color: rgb(255, 255, 255);
        cursor: pointer;
        img{
            opacity: 100%;
        }
    }
    @media (max-width:800px) {
        background-color: rgb(255, 255, 255);
        height:500px;
        img{
            opacity: 100%;
        }
    }
`

export default function Card({children}:{children:ReactNode}) {
    return (
        <CardDivStyled>
            {children}
        </CardDivStyled>);


}