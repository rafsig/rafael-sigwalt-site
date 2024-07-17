import styled from "styled-components";
import Certificate from "../../../../models/Certificate";
import Modal from "../../../Modal";
import { CallToActionLink } from "../../../CallToAction";

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
`

export default function CertificateModal({certificate, setCertificate}:{certificate:Certificate | undefined, setCertificate:React.Dispatch<React.SetStateAction<Certificate | undefined>>}) {

    return (
        <Modal entity={certificate} callback={setCertificate}>
            <CardImage src={certificate?.imagePath}></CardImage>
            <Content>
                <CallToActionLink href={certificate?.url} target="_blank" rel="no_referrer">View Certificate </CallToActionLink>
                <ContentTitle>Content</ContentTitle>
                <OutcomesList>
                {certificate?.outcomes.map(outcome => <li>{outcome}</li>)}
                </OutcomesList>
            </Content>   
        </Modal>
    );
}