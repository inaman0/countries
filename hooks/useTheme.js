import { useContext } from "react"
import { Themecontext } from "../context/ThemeContext"

const useTheme = ()=>{
    return useContext(Themecontext);
}

export default useTheme