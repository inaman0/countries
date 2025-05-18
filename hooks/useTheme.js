import { useContext } from "react"
import { Themecontext } from "../context/ThemeContext.js"

const useTheme = ()=>{
    return useContext(Themecontext);
}

export default useTheme