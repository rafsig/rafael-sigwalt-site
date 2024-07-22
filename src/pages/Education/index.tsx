import CertificateSection from "../../components/Section/Certificate";
import GraduationListSection from "../../components/Section/Education";
import CertificateModal from "../../components/Section/Certificate/CertificateModal";

export default function EducationPage () {
    
    return(
        <>
            <GraduationListSection></GraduationListSection>
            <CertificateSection></CertificateSection>
            <CertificateModal/>
        </>);
}