import { useReducer, useContext, createContext } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
    isError: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

const useGithub = () => {
  const context = useContext(GithubContext)

  return context
}

export { GithubProvider, useGithub }
