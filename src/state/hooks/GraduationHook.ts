import { useRecoilValue } from "recoil";
import Graduation from "../../models/Graduation";
import { graduationListState } from "../atom";

export function useGraduationList():Graduation[] {
    return useRecoilValue(graduationListState);
}