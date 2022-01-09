import { useReducer, useContext, createContext } from 'react'
import axios from 'axios'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_TOKEN

const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
    isError: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  // Get initial users (for testing purpose)
  const fetchUsers = () => {
    // set isLoading to be true before fetching data
    dispatch({ type: 'FETCH_INIT' })

    const options = {
      method: 'GET',
      url: '/users',
    }

    axios
      .request(options)
      .then((response) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
      })
      .catch((error) => {
        console.log(error)
        dispatch({ type: 'FETCH_FAILURE' })
      })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        isError: state.isError,
        fetchUsers,
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
