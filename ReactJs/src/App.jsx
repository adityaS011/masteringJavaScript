import React from 'react'
import PasswordGen from './components/PasswordGenerator/PasswordGen'
import MiniContext from './components/MiniContext/MiniContext'
import Card from './components/ContextCard/ThemeCard'
const App = () => {
  return (
    <>
      <PasswordGen/>
      <MiniContext/>
      <Card/>
    </>
  )
}

export default App