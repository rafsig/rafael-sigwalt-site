import { useRecoilValue } from "recoil"
import { aboutState } from "../atom"
import About from "../../models/About";

export function useAbout():About {
    return useRecoilValue(aboutState);
}