import CertificateSection from "../../components/Section/Certificate";
import GraduationListSection from "../../components/Section/Education";
import CertificateModal from "../../components/Section/Certificate/CertificateModal";
import ReactGA from "react-ga4";
import { useEffect } from "react";

export default function EducationPage () {
    useEffect(() => {
        ReactGA.send({
            hitType:"pageview",
            page:"Education",
            title:"Education"
        });
    });

    return(
        <>
            <GraduationListSection></GraduationListSection>
            <CertificateSection></CertificateSection>
            <CertificateModal/>
        </>);
}