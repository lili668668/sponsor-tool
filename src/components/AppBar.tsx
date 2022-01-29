import React from 'react'
import Box from '@mui/material/Box'
import AppBarBase from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const AppBar: React.FC = () => {
  return (
    <Box display="flex" flexGrow={1}>
      <AppBarBase position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            COSCUP 贊助公版信產生器
          </Typography>
        </Toolbar>
      </AppBarBase>
    </Box>
  )
}

export default AppBar