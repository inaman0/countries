import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
import ThemeProvider from './context/ThemeContext.js'

import './App.css'

const App = () => {

  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  )
}

export default App