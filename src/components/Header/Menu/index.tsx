import styled from "styled-components";
import MenuItem from "./MenuItem";

const NavStyled = styled.nav`
    height:40px;
`

const ListStyled = styled.ul`
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

const Menu = () => {
    return (
    <NavStyled>
        <ListStyled>
            <MenuItem text="About Me" target="AboutMe"/>
            <MenuItem text="Skills" target="Skills"/>
            <MenuItem text="Work Experience" target="WorkExperience"/>
            <MenuItem text="Projects" target="Projects"/>
        </ListStyled>
    </NavStyled>);


   
}

export default Menu;