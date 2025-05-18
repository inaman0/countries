import {createContext, useState} from 'react'

export const Themecontext = createContext('Theme')


const ThemeProvider = (({children})=>{
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    return  <Themecontext.Provider value={[isDark, setIsDark]}>{children}</Themecontext.Provider>
})

export default ThemeProvider