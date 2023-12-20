import React from 'react'
import { useTheme } from '../context/ThemeContext'
const Dashboard = () => {
  const { theme } = useTheme()
  console.log('dashboard')
  console.log(theme)
  return (
    <>
      hello
    </>
  )
}

export default Dashboard