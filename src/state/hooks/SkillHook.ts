import { useRecoilValue } from "recoil"
import { skillListState } from "../atom"

export function useSkillList():string[] {
    return useRecoilValue(skillListState);
}