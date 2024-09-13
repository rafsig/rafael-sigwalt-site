import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import Section from "..";
import CertificateCard from "./Card";

import styled from "styled-components";
import { useCertificateList, useCertificateListState } from "../../../state/hooks/CertificateHook";
import { useEffect, useState } from "react";
import Certificate from "../../../models/Certificate";
import { CallToAction } from "../../CallToAction";
import { certificateListAsync } from "../../../state/selectors/CertificateAsync";
import { getCertificates } from "../../../services/certificateService";

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

    const [certificates, setCertificates] = useCertificateListState();

    async function addToPagedCertificates() {
        let newCertificates = await getCertificates(8, certificates.number + 1);
        console.log(newCertificates);
        newCertificates.content.forEach(certificate => certificate.dateFinished = new Date(certificate.dateFinished));

        newCertificates.content = [...certificates.content, ...newCertificates.content];

        setCertificates(newCertificates);

    }

    return (
        <Section id="certificates" title="Certificates" titlePosition="top" icon={faCertificate}>
            <GaleryContainer>
                {certificates.content.map(certificate => 
                    <CertificateCard key={certificate.id} certificate={certificate}/>
                )}
            </GaleryContainer>

            {
                !certificates.last &&
                <ButtonContainer>
                    <CustomCallToAction onClick={() =>
                        {
                            addToPagedCertificates();
                        }}>Load More</CustomCallToAction>
                </ButtonContainer>
            }
  
        </Section>
    );
}