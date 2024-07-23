import CertificateSection from "../../components/Section/Certificate";
import GraduationListSection from "../../components/Section/Education";
import CertificateModal from "../../components/Section/Certificate/CertificateModal";
import ReactGA from "react-ga";
import { useEffect } from "react";

export default function EducationPage () {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    });

    return(
        <>
            <GraduationListSection></GraduationListSection>
            <CertificateSection></CertificateSection>
            <CertificateModal/>
        </>);
}