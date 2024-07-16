import { useState } from "react";
import CertificateSection from "../../components/Section/Certificate";
import EducationSection from "../../components/Section/Education";
import Certificate from "../../models/Certificate";

export default function EducationPage () {

    const[_certificate, setCertificate] =  useState<Certificate>()
    
    return(
        <>
            <EducationSection></EducationSection>
            <CertificateSection setCertificate={setCertificate}></CertificateSection>
        </>);
}