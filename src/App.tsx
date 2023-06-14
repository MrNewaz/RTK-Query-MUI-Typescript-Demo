import { CssBaseline } from '@mui/material'
import { purple } from '@mui/material/colors'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles'
import Footer from 'components/Footer'

import Navbar from 'components/Navbar'
import AppRoutes from 'Routes'

const App = () => {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: purple,
      secondary: {
        main: '#ffffff',
      },

      text: {
        primary: '#2b2b2b',
        secondary: '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      button: {
        textTransform: 'none',
      },
    },
  })
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <Navbar />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  )
}

export default App
