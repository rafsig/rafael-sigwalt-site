import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import Section from "..";
import CertificateCard from "./Card";
import certificates from "./certificates.json";
import styled from "styled-components";
import Certificate from "../../../models/Certificate";

const GaleryContainer = styled.div`
    display: flex;
    gap:40px;
    padding:40px;
    flex-wrap: wrap;
`

export default function CertificateSection({setCertificate}:{setCertificate:React.Dispatch<React.SetStateAction<Certificate | undefined>>}) {

    return (
        <Section id="certificates" title="Certificates" titlePosition="top" icon={faCertificate}>
            <GaleryContainer>
                {certificates.map(certificate => 
                    <CertificateCard key={certificate.id} certificate={certificate} setCertificate={setCertificate}/>
                )}
            </GaleryContainer>      
        </Section>
    );
}