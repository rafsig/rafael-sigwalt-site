import styled from "styled-components";
import MenuItemProps from "../../../../models/props/MenuItemProps";
import { specialFontColor } from "../../../GlobalStyle/styleVariables";
import { Link } from "react-router-dom";

const ListItemStyled = styled.li`
    margin:10px 0;
    border-left: 1px solid ${specialFontColor};
    &:last-child{
        border-right: 1px solid ${specialFontColor};
    }
    a{
        color: ${specialFontColor};
        font-family: monospace;
        font-size:1.2em;
        text-decoration: none;
        padding:10px;
        @media (max-width:800px) {
            padding:20px;
            display: block;
            
        }
    }
`;

const MenuItem = (props:MenuItemProps) => {
    return(
        <ListItemStyled>
            <Link to={props.target} onClick={() => props.onSelectSection("collapse")}>
                {props.text}
            </Link>
        </ListItemStyled>
    );
}

export default MenuItem;