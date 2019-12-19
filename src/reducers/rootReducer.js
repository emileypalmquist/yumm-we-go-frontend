const initialState = {
  currentUser: null,
  friends: [],
  bookmarks: [],
  recFriends: [],
  findFriends: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_CURRENT_USER':
        return {...state, currentUser: action.user}
      case 'SET_ALL_FRIENDS':
        return {...state, friends: action.friends }
      case 'ADD_USER':
        return {...state, users:[...state.users, action.user]}
      case 'CLEAR_CURRENT_USER':
        return {...state, currentUser: {} }
      case 'SET_RECOMMENDED_FRIENDS':
        return {...state, recFriends: action.recFriends}
      case "SET_FIND_FRIENDS_USERS":
        return {...state, findFriends: action.users}
      case "SIGN_OUT_USER_SUCCESS":
        return initialState
      default:
        return state
  }
}

export default rootReducer