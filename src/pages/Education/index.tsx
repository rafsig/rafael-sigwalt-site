import CertificateSection from "../../components/Section/Certificate";
import GraduationListSection from "../../components/Section/Education";
import CertificateModal from "../../components/Section/Certificate/CertificateModal";
import { Suspense, useEffect } from "react";
import { pageVisit } from "../../ga4/util";

export default function EducationPage () {
    useEffect(() => {
        pageVisit("education");
    });

    return(
        <>
            <Suspense fallback="">
                <GraduationListSection></GraduationListSection>
                <CertificateSection></CertificateSection>
            </Suspense>
            <Suspense fallback="">
                <CertificateModal/>
            </Suspense>
        </>);
}