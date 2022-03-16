import './App.scss'
import React from 'react'
import Router from './Router'

import { Provider } from 'react-redux'
import store from './config/redux.store'

import { ThemeProvider } from '@mui/material/styles'
import theme from './config/theme'

const App = () => {
  React.useEffect(() => {
    document.title = 'Examen Front-End'
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  )
}

export default App
