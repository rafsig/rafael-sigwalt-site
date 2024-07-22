import { useRecoilValue, useSetRecoilState } from "recoil";
import Project from "../../models/Project";
import { projectListState, projectState, selectedProjectIdState } from "../atom";

export function useProjectList():Project[] {
    return useRecoilValue(projectListState);
}

export function useSetProjectId() {
    return useSetRecoilState(selectedProjectIdState);
}

export function useProejct() {
    return useRecoilValue(projectState);
}