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

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export default function CertificateSection() {

    const certificates = useCertificateList();

    const [pagedCertificates, setPagedCertificates] = useState<Certificate[]>([]);

    useEffect(() => {
        addToPagedCertificates();
    });

    const [numberOfCertToDisplay, setNumberCertToDisplay] = useState(12);

    function addToPagedCertificates() {
        console.log(numberOfCertToDisplay);
        console.log(certificates);
        setPagedCertificates(certificates.slice(0, numberOfCertToDisplay));
        if(certificates.length - numberOfCertToDisplay >= 12){
            setNumberCertToDisplay(numberOfCertToDisplay + 12);
        } else {
            setNumberCertToDisplay(certificates.length);
        }
    }

    return (
        <Section id="certificates" title="Certificates" titlePosition="top" icon={faCertificate}>
            <GaleryContainer>
                {pagedCertificates.map(certificate => 
                    <CertificateCard key={certificate.id} certificate={certificate}/>
                )}
            </GaleryContainer>

            {
                numberOfCertToDisplay === certificates.length ? 
                <></> :
                <ButtonContainer>
                    <CustomCallToAction onClick={() => addToPagedCertificates()}>Load More</CustomCallToAction>
                </ButtonContainer>
            }   
        </Section>
    );
}