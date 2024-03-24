import React, { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'
import CardUI from './components/CardUI'

const card = () => {
  const[themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

    useEffect(() => {
      document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(themeMode)
      
    },[themeMode])
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex bg-slate-200 flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <CardUI />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default card

