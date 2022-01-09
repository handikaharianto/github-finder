const githubReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        isError: false,
      }
    case 'FETCH_FAILURE':
      return { ...state, isLoading: false, isError: true }
    default:
      // can be replaced by 'throw new Error()'
      return state
  }
}

export default githubReducer
