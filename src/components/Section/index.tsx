import styled from "styled-components";
import SectionProps from "../../models/props/SectionProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sectionTitleColor, specialFontColor } from "../GlobalStyle/styleVariables";

interface SectionProp {
   $titlePosition:"left"|"right"|"top";
}

const SectionStyled = styled.section<SectionProp>`
    border-radius: 20px;
    display: flex;
    flex-direction: ${props => getFlexDirectionFromTitlePosition(props)};
    @media (max-width:1000px) or (max-height:890px){
        flex-direction: column;
    }
`

function getFlexDirectionFromTitlePosition(props:SectionProp) {
    switch(props.$titlePosition) {
        case "left":
            return "row";
        case "right":
            return "row-reverse";
        case "top":
            return "column";
    }
}

const TitleDiv = styled.div<SectionProp>`
    display: flex;
    flex-direction: ${props => props.$titlePosition === 'top'? 'row-reverse' : 'column'};
    row-gap: 30px;
    column-gap: 30px;
    justify-content: center;
    width: ${props => props.$titlePosition === 'top'? '100%' : '500px'};
    min-width: 500px;
    height: ${props => props.$titlePosition === 'top'? '160px' : 'calc(100vh - 135px)'};
    background-color: ${sectionTitleColor};
    @media (max-width:1000px) or (max-height:890px){
        width:100%;
        height:160px;
        flex-direction: row-reverse;
    }
    @media (max-width:1400px){
        min-width: 280px;
    }
    
`;

const SectionTitle = styled.h2<SectionProp>`
    font-size:2.5em;
    font-family: Philosopher;
    text-align:center;
    height: fit-content;
    margin: ${props => props.$titlePosition === 'top'? 'auto 0' : '0'};
    color: ${specialFontColor};
    @media(max-width: 1000px) or (max-height:890px) {
        margin: auto 0;
    }
    @media (max-width:800px) {
        font-size:2em;
    }
`;

const SectionImage = styled.img<SectionProp>`
    height:200px;
    width:200px;
    border-radius: 100px;
    margin:${props => props.$titlePosition === 'top'? 'auto 0' : '0 auto'};
    @media (max-width:1000px)  or (max-height:890px){
        height:110px;
        width:110px;
        margin: auto 0;
    }
`

const SectionContent = styled.div<SectionProp>`
    height:fit-content;
    width: ${props => props.$titlePosition === 'top'? '100%' : 'calc(1400px - 500px)'};
    margin:auto 0;
    
    @media(max-width: 1400px) or (max-height:890px)  {
        width: calc(100% - 60px);
        margin: auto 30px;
    }
    @media(max-width: 1000px) or (max-height:890px)  {
        width: calc(100% - 20px);
        margin: 30px 10px;
    }
 `

const IconContainer = styled.div<SectionProp>`
    height: fit-content;
    width: fit-content;
    margin: ${props => props.$titlePosition === 'top'? 'auto 0' : '0 auto'};
    @media(max-width:1000px) or (max-height:890px) {
        margin: auto 0;
    }
`

export default function Section(props:SectionProps) {
    return (
        <SectionStyled id={props.id} $titlePosition={props.titlePosition}>
            <TitleDiv $titlePosition={props.titlePosition}>
                <SectionTitle $titlePosition={props.titlePosition}>&nbsp;{props.title}&nbsp;</SectionTitle>
                {props.imageUrl &&
                    <SectionImage $titlePosition={props.titlePosition} src={props.imageUrl}/>
                }
                { props.icon && 
                <IconContainer $titlePosition={props.titlePosition}>
                    <FontAwesomeIcon icon={props.icon} size="3x" color={specialFontColor}/>
                </IconContainer>}
                
            </TitleDiv>
            <SectionContent $titlePosition={props.titlePosition}>{props.children}</SectionContent>
            
        </SectionStyled>);
}