import { SetterOrUpdater, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { certificateListState, certificateState } from "../atom";
import Certificate from "../../models/Certificate";

export function useCertificateList():Certificate[] {
    return useRecoilValue(certificateListState);
}

export function useCertificateState(): [Certificate | undefined, SetterOrUpdater<Certificate | undefined>]{
    return useRecoilState(certificateState);
}

export function useSetCertificate() {
    return useSetRecoilState(certificateState);
}