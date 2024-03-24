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
      
      <div className="flex p-6  bg-gray-300 flex-wrap min-h-screen items-center">
      <div className='h-fit flex mb-4 flex-col mx-auto p-2 mt-2 shadow-lg rounded-lg bg-white text-center justify-content content-center dark:text-white dark:bg-slate-800'>
            <p className='text-2xl text-slate-800 font-semibold  dark:text-blue-400 px-4 py-2 '>#Use of Context API in Theme Changing Card</p>
          <ol>
            <li >Theme Provider is used to provide theme state and change accordingly using: </li>
            <li className='font-[600] text-lg'>useContext, useEffect, useState </li>
          </ol>
        </div>
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4 ">
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

