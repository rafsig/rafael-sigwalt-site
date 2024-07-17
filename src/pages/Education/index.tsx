import { useState } from "react";
import CertificateSection from "../../components/Section/Certificate";
import EducationSection from "../../components/Section/Education";
import Certificate from "../../models/Certificate";
import CertificateModal from "../../components/Section/Certificate/CertificateModal";

export default function EducationPage () {

    const[certificate, setCertificate] =  useState<Certificate>()
    
    return(
        <>
            <EducationSection></EducationSection>
            <CertificateSection setCertificate={setCertificate}></CertificateSection>
            <CertificateModal certificate={certificate} setCertificate={setCertificate}/>
        </>);
}