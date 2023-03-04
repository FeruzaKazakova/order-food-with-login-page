import { createTheme, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { darkTheme, lightTheme } from './lib/theme'
import { UserLayout } from './layout/UserLayout'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/Routes'

function App() {

  const themeMode = useSelector((state) => state.ui.themeMode)

  const theme = useMemo(() => {
    const currentTheme =
      themeMode === 'light'
        ? {
            ...lightTheme,
          }
        : {
            ...darkTheme,
          }

    return createTheme(currentTheme)
  }, [themeMode])

  return (
    <div>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserLayout/>
        <AppRoutes/>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

