import styled from "styled-components";
import MenuItem from "./MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { MenuProps } from "../../../models/props/MenuProps";

const BarsIcon = styled.span`
    color:#f0f0f0;
    visibility: hidden;
    position: absolute;
    padding-bottom: 15px;
    padding-left:20px;
    padding-right: 20px;
    cursor: pointer;
    font-size: 1.5em;
`

const NavStyled = styled.nav`
    height:40px;
`

const ListStyled = styled.ul<MenuProps>`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
    flex-flow: row;
    flex-grow: 0;
`;

const Overlay = styled.div<MenuProps>`
    background-color: rgba(0,0,0,0.5);
    position:fixed;
    top:135px;
    bottom:0;
    left:0;
    right:0;
    visibility: ${props => props.$visibility === "visible"? "visible" : "hidden"};
`

const Menu = () => {
    
    const [menuVisibility, setMenuVisibility] = useState("hidden");
    
    return (
    <NavStyled>
        <Overlay $visibility={menuVisibility} onClick={toggleMenuVisibility}/>
        <BarsIcon onClick={toggleMenuVisibility}><FontAwesomeIcon icon={faBars}/></BarsIcon>
        <ListStyled $visibility={menuVisibility}>
            <MenuItem text="About Me" target="AboutMe" onSelectSection={setMenuVisibility}/>
            <MenuItem text="Skills" target="Skills" onSelectSection={setMenuVisibility}/>
            <MenuItem text="Work Experience" target="WorkExperience" onSelectSection={setMenuVisibility}/>
            <MenuItem text="Projects" target="Projects" onSelectSection={setMenuVisibility}/>
        </ListStyled>
    </NavStyled>);

    function toggleMenuVisibility() {
        if(menuVisibility === "collapse") {
            setMenuVisibility("visible");
        }else {
            setMenuVisibility("collapse")
        }
    }
   
}

export default Menu;