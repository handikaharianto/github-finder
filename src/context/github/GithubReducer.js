const githubReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false }
    case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        isError: false,
      }
    case 'FETCH_USER':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isError: false,
      }
    case 'FETCH_REPOS':
      return {
        ...state,
        repos: action.payload,
        isLoading: false,
        isError: false,
      }
    case 'FETCH_FAILURE':
      return { ...state, isLoading: false, isError: true }
    case 'CLEAR_USERS':
      return { ...state, users: [] }
    default:
      // can be replaced by 'throw new Error()'
      return state
  }
}

export default githubReducer
