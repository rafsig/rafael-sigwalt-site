import styled from "styled-components";
import WorkExperience from "../../../../models/WorkExperience";
import HighlightsList from "../../../HighlightsList";

const WorkExperienceDiv = styled.div`
    background-color: #fff;
    padding: 20px;
    margin: 0px 0 20px 0;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    min-height:calc(100vh - 160px - 60px - 135px - 80px);
    height: fit-content;
    display: flex;
    flex-direction: row;
    @media(max-width:1000px) {
        flex-direction: column;
        gap:30px
    }
` 

const WorkExperienceTitle = styled.h4`
    font-size: 1.5em;
    margin: 0;
`;
const WorkExperienceDates = styled.h5`
    padding: 0;
    margin: 0 0 20px 0;
    font-size: 1.1em;
    color: #616161;
`;

const ColumnContainer = styled.div`
    width:50%;
    padding: 0 20px;
    height:fit-content;
    margin: auto 0;
    @media(max-width:1000px) {
        width:calc(100% - 40px);
    }
`


const WorkExperienceCard = (props:WorkExperience) => {
    return (
    <WorkExperienceDiv>
        <ColumnContainer>
        <WorkExperienceTitle>{`${props.role} at ${props.companyName}`}</WorkExperienceTitle>
        <WorkExperienceDates>{`from ${props.dateStart} to ${props.dateEnd}`}</WorkExperienceDates>
        {props.description}</ColumnContainer> 
        <ColumnContainer> <HighlightsList highlights = {props.highlights}/> </ColumnContainer>
    </WorkExperienceDiv>);
}

export default WorkExperienceCard;