import styled from "styled-components";
import Modal from "../../../Modal";
import { CallToActionLink } from "../../../CallToAction";
import { useCertificateState } from "../../../../state/hooks/CertificateHook";
import { handleAnchorClick } from "../../../../ga4/util";

const CardImage = styled.img`
    width: 100%;
    max-height: calc(60% - 70px);
    object-fit: contain; 
`

const Content = styled.div`
   display: flex;
   height: 35%;
   flex-direction: column;
   gap:15px;
   margin: 20px;
`

const ContentTitle = styled.h3`
    padding:0;
    margin: 0;
`
const OutcomesList = styled.ul`
    max-height: calc(100% - 30px - 50px );
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    column-gap: 50px;
    row-gap: 15px;
    margin: 0;
    padding: 0;
    li{
        width: 28%;
    }
    @media (max-width: 800px){
        flex-flow: column nowrap;
        li{
            width:100%;
        }
    }
`

export default function CertificateModal() {

    const [certificate, setCertificate] = useCertificateState();

    return (
        <Modal entity={certificate} callback={setCertificate}>
            <CardImage src={certificate?.imagePath}></CardImage>
            <Content>
                <CallToActionLink href={certificate?.url} onClick={() => handleAnchorClick(certificate!.url)} target="_blank" rel="no_referrer">View Certificate </CallToActionLink>
                <ContentTitle>Content</ContentTitle>
                <OutcomesList>
                {certificate?.outcomes.map((outcome, index) => <li key={index}>{outcome}</li>)}
                </OutcomesList>
            </Content>   
        </Modal>
    );
}