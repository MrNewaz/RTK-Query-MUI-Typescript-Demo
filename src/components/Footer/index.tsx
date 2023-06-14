import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <Box>
      <Typography
        align="center"
        sx={{ typography: { xs: 'subtitle2', sm: 'h6' } }}
      >
        Copyright © {new Date().getFullYear()}. All rights reserved by Saif.
      </Typography>
    </Box>
  )
}

export default Footer
