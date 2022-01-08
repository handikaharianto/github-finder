import { useState, useContext, createContext } from 'react'
import axios from 'axios'

const GithubContext = createContext()

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
// const GITHUB_TOKEN = process.env.REACT_APP_TOKEN

const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchUsers = async () => {
    const options = {
      method: 'GET',
      url: '/users',
    }

    axios
      .request(options)
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => console.log(error))

    setIsLoading(false)
  }

  return (
    <GithubContext.Provider value={{ users, isLoading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  )
}

const useGithub = () => {
  const context = useContext(GithubContext)

  return context
}

export { GithubProvider, useGithub }
