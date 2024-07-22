import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import Section from "..";
import CertificateCard from "./Card";

import styled from "styled-components";
import { useCertificateList } from "../../../state/hooks/CertificateHook";

const GaleryContainer = styled.div`
    display: flex;
    gap:40px;
    padding:40px;
    flex-wrap: wrap;
`

export default function CertificateSection() {

    const certificates = useCertificateList();

    return (
        <Section id="certificates" title="Certificates" titlePosition="top" icon={faCertificate}>
            <GaleryContainer>
                {certificates.map(certificate => 
                    <CertificateCard key={certificate.id} certificate={certificate}/>
                )}
            </GaleryContainer>      
        </Section>
    );
}