import { MouseEvent } from "react";
import styled from "styled-components";
import MenuItemProps from "../../../../models/props/MenuItemProps";

const ListItemStyled = styled.li`
    margin:10px 0;
`;
const LinkStyled = styled.a`
    color:#060D4A;
    font-family: monospace;
    font-size:1.2em;
    text-decoration: none; 
`

const MenuItem = (props:MenuItemProps) => {
    return(
        <ListItemStyled>
            <LinkStyled href={`#${props.target}`} onClick={(e) => goToReference(e)}>{props.text}</LinkStyled>
        </ListItemStyled>
    );

    function goToReference(event: MouseEvent<HTMLAnchorElement>) {

        event.preventDefault();

        const a = event.target as HTMLAnchorElement;
        const elementId = a.href.substring(a.href.lastIndexOf("#") + 1, a.href.length);

        const targetElement = document.getElementById(elementId);

        try{
            var top = 0;

            top =  targetElement!.offsetTop ;

            props.onSelectSection("collapse");
            window.scrollTo({top, behavior: 'smooth'})
        } catch(e) {
            console.log(`not able to find ${elementId}`);
        }

    }
}

export default MenuItem;