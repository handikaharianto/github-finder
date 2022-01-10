import { createContext, useContext, useReducer } from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

const AlertProvider = ({ children }) => {
  const initialState = null

  const [state, dispatch] = useReducer(alertReducer, initialState)

  // set an alert
  const setAlert = (msg, type) => {
    dispatch({ type: 'SET_ALERT', payload: { msg, type } })

    // remove alert after a few seconds
    setTimeout(() => {
      dispatch({ type: 'REMOVE_ALERT' })
    }, 3000)
  }

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  )
}

const useAlert = () => {
  const context = useContext(AlertContext)

  return context
}

export { AlertProvider, useAlert }
