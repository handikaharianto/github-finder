import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_URL
const GITHUB_TOKEN = process.env.REACT_APP_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
})

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  return github
    .get(`/search/users?${params}`)
    .then((response) => response.data)
    .catch((error) => 'FETCH_FAILURE')
}

// get users and repos
export const getUsersAndRepos = async (login) => {
  // get 10 latest repositories based on creation
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  })

  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ])

  return { user: user.data, repos: repos.data }
}
