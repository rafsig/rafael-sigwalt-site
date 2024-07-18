import {  useNavigate  } from "react-router-dom";
import { CallToAction } from "../../components/CallToAction";
import styled from "styled-components";

export default function NotFound() {

    const navigate = useNavigate();

    const NotFoundContainer = styled.div`
        min-height: calc(100vh - 138px - 25px - 100px);
        padding:50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `

    const NotFoundTitle = styled.div`
        font-size:5em;
        text-align: center;
        margin: 20px;
    `

    const NotFoundMessage = styled.div`
        font-size:1.5em;
        text-align: center;
        margin: 20px;
    `


    function navigateBack() {
       console.log(navigate("/"));
    }

    return (
    <NotFoundContainer>
        <CallToAction onClick={() => navigateBack()} >Back to Home</CallToAction>
        <NotFoundTitle>Not Found</NotFoundTitle>
        <NotFoundMessage>The resource you are looking for is not found</NotFoundMessage>
    </NotFoundContainer>);
}