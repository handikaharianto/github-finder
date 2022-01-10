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

  const searchUsers = (text) => {
    // set isLoading to be true before fetching data
    dispatch({ type: 'FETCH_INIT' })

    const params = new URLSearchParams({
      q: text,
    })

    const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_URL}/search/users?${params}`,
    }

    axios
      .request(options)
      .then((response) => {
        const { items } = response.data // get users
        dispatch({ type: 'FETCH_SUCCESS', payload: items })
      })
      .catch((error) => {
        console.log(error)
        dispatch({ type: 'FETCH_FAILURE' })
      })
  }

  const clearUsers = () => {
    dispatch({ type: 'CLEAR_USERS' })
  }

  return (
    <GithubContext.Provider
      value={{
        ...state,
        searchUsers,
        clearUsers,
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
