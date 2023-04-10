import React from 'react'
import Box from '@mui/material/Box'
import AppBar from './components/AppBar'
import Content from './components/Content'

export const TITLE = 'COSCUP 2023'

const App: React.FC = () => {
  return (
    <>
      <AppBar />
      <Box padding={2}>
        <Content />
      </Box>
    </>
  )
}

export default App
