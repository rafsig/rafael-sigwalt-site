import { SetterOrUpdater, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { certificateListState, certificateState, selectedCertificateIdState } from "../atom";
import Certificate from "../../models/Certificate";
import Page from "../../models/Page";

export function useCertificateList():Page<Certificate> {
    return useRecoilValue(certificateListState);
}

export function useCertificateListState(): [Page<Certificate>, SetterOrUpdater<Page<Certificate>>] {
    return useRecoilState(certificateListState);
}

export function useSetCertificateId() {
    return useSetRecoilState(selectedCertificateIdState);
}

export function useCertificate() {
    return useRecoilValue(certificateState);
}