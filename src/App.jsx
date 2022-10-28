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
    palette: {
      mode: "light",
      primary: {
        main: "#525E75", //gray
      },
      secondary: {
        main: "#F1DDBF", //cream
      },
      purple : {
        main: "#C400E4" //purple
      },
      green: {
        main: "#92BA92", //green
      },
      gold: {
        main: "#DAA520", //gold
      }
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            background: "#F1DDBF",
          }
        }
      }
    },
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
