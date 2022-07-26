import React from 'react'

import FirstComponent from './FirstComponent'
import ThemeProvider from '../context/ThemeProvider'

import "../Parent.css"

const ParentComponent = () => {
  return (
    <ThemeProvider>
      <FirstComponent />
    </ThemeProvider>
  )
}

export default ParentComponent