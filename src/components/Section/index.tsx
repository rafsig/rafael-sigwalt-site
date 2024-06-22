import styled from "styled-components";
import SectionProps from "../../models/props/SectionProps";

interface SectionContentProp {
    $mode:"transparent" | "white";
}

const SectionStyled = styled.section`
    margin: 40px 0;
    padding: 10px;
    border-radius: 20px;
    @media (max-width:1040px) {
        width:90%;
        margin:40px auto;
    }
`

const SectionTitle = styled.h2`
    font-size:2em;
    text-align:center;
    margin:20px 0 20px 0;
    color: #e5e5e5;
    &::before, &:after {
        content:"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0";
        text-decoration:line-through;
    }
    @media (max-width:600px) {
        font-size: 1.8em;
    }
`;

const SectionContent = styled.div<SectionContentProp>`
    padding:40px 0px 40px 0px;
    background-color: ${props => props.$mode == "transparent"? props.$mode : "#e5e5e5"};
    border-radius: 20px;
    box-shadow: ${props => props.$mode == "white" ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" : "0"};
`


const Section = (props:SectionProps) => {
    return (<SectionStyled>
            <SectionTitle id={props.id}>&nbsp;{props.title}&nbsp;</SectionTitle>
            <SectionContent $mode={props.mode}>{props.children}</SectionContent>
            
        </SectionStyled>);
}

export default Section;