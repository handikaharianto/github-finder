import { useReducer, useContext, createContext } from 'react'
import axios from 'axios'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_TOKEN

const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: true,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const fetchUsers = () => {
    const options = {
      method: 'GET',
      url: '/users',
    }

    axios
      .request(options)
      .then((response) => {
        dispatch({ type: 'GET_USERS', payload: response.data })
      })
      .catch((error) => console.log(error))
  }

  return (
    <GithubContext.Provider
      value={{ users: state.users, isLoading: state.isLoading, fetchUsers }}
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
