import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import VideoCard from './components/VideoCard'
import Navbar from './components/Navbar'
import Theatre from './components/Theatre'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ThemeContext } from 'styled-components'
import Gallery from './components/Gallery'
import cart from './components/cart'

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
      },
      MuiButton: {
        styleOverrides: {
          root: {
            boxShadow: 
             "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          }
        }
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Theatre />
      {/* <Gallery /> */}
    </ThemeProvider>
  )
}

export default App
