import { useRecoilValue } from "recoil"
import { skillListState } from "../atom"
import Skill from "../../models/Skill";

export function useSkillList():Skill[] {
    return useRecoilValue(skillListState);
}