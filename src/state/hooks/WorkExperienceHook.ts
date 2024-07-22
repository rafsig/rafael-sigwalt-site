import { useRecoilValue } from "recoil"
import WorkExperience from "../../models/WorkExperience";
import { workExperienceListState } from "../atom";

export function useWorkExperienceList():WorkExperience[] {
    return useRecoilValue(workExperienceListState);
}