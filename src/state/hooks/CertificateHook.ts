import { useRecoilValue, useSetRecoilState } from "recoil";
import { certificateListState, certificateState, selectedCertificateIdState } from "../atom";
import Certificate from "../../models/Certificate";

export function useCertificateList():Certificate[] {
    return useRecoilValue(certificateListState);
}

export function useSetCertificateId() {
    return useSetRecoilState(selectedCertificateIdState);
}

export function useCertificate() {
    return useRecoilValue(certificateState);
}