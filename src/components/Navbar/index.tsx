import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function Navbar() {
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="h6"
            align="center"
            sx={{ flexGrow: 1 }}
          >
            RTK-Query TypeScript MUI Demo
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  )
}
