import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import Section from "..";
import CertificateCard from "./Card";

import styled from "styled-components";
import { useCertificateList } from "../../../state/hooks/CertificateHook";
import { useEffect, useState } from "react";
import Certificate from "../../../models/Certificate";
import { CallToAction } from "../../CallToAction";

const GaleryContainer = styled.div`
    display: flex;
    gap:40px;
    padding:40px;
    flex-wrap: wrap;
    @media (max-width: 1000px) {
        justify-content: center;
    }
`

const CustomCallToAction = styled(CallToAction)`
    margin: 10px auto;
`

export default function CertificateSection() {

    const certificates = useCertificateList();

    const [pagedCertificates, setPagedCertificates] = useState<Certificate[]>([]);

    useEffect(() => {
        addToPagedCertificates();
    });

    const [numberOfCertToDisplay, setNumberCertToDisplay] = useState(0);

    function addToPagedCertificates() {
        if(certificates.length - numberOfCertToDisplay >= 12){
            setNumberCertToDisplay(numberOfCertToDisplay + 12);
        } else {
            setNumberCertToDisplay(certificates.length);
        }
        setPagedCertificates(certificates.splice(0, numberOfCertToDisplay - 1));
    }

    return (
        <Section id="certificates" title="Certificates" titlePosition="top" icon={faCertificate}>
            <GaleryContainer>
                {pagedCertificates.map(certificate => 
                    <CertificateCard key={certificate.id} certificate={certificate}/>
                )}
            </GaleryContainer>
            <CustomCallToAction onClick={() => addToPagedCertificates()}>Load More</CustomCallToAction>      
        </Section>
    );
}