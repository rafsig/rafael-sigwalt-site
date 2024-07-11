import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import HighlightListProps from "../../models/props/HighlightListProps";

const HighlightsListStyled = styled.ul`
    list-style: none;
    padding:0;
    margin: 0;
`;

const HighlightItemStyled = styled.li`
    line-height: 1.5em;
    margin-bottom:15px;
    display: flex;
`

const IconContainerStyled = styled.span`
    padding-left: 20px;
    padding-right: 20px;
    color: green;
`;

const HighlightText = styled.p`
      display: inline;
      margin: 0;
      text-align: justify;
      @media (max-width: 600px) {
        text-align: left;
      }
`;

const HighlightsList = (props:HighlightListProps) => {
    return(
    <HighlightsListStyled>
        {
            props.highlights
                .map(
                    (highlight, index )=>  (
                    <HighlightItemStyled key={index}>
                        <IconContainerStyled>
                            <FontAwesomeIcon icon={faCheck}/>
                        </IconContainerStyled>
                        <HighlightText>{highlight}</HighlightText>
                    </HighlightItemStyled> ))}
    </HighlightsListStyled>);
}

export default HighlightsList;