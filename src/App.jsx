import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import VideoCard from './components/VideoCard'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ThemeContext } from 'styled-components'

function App() {
  const [count, setCount] = useState(0)

  // Color pallete. Please access colors from the theme object.
  const theme = createTheme({
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            background: "#F1DDBF",
          }
        }
      }
    },
    palette: {
      mode: "light",
      primary: {
        main: "#525E75",
      },
      secondary: {
        main: "#F1DDBF",
      },
      purple : {
        main: "#C400E4"
      },
      green: {
        main: "#92BA92",
      },
      gold: {
        main: "#DAA520",
      }
    }
    // cream  : "#F1DDBF",
    // green  : "#92BA92",
    // gray   : "#525E75",
    // purple : "#C400E4",
    // gold   : "#DAA520",
  })

  return (
    <ThemeProvider theme={theme}>
      <div>
        <VideoCard backgroundColor={theme.cream} btnColor={theme.purple} />
      </div>
    </ThemeProvider>
  )
}

export default App
