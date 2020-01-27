const initialState = {
  currentUser: null,
  friends: [],
  bookmarks: [],
  recFriends: [],
  findFriends: [],
  position: {lat: 37.7751245, lng: -122.4171414},
  restaurants: [],
  restaurant: null
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_CURRENT_USER':
        return {...state, currentUser: action.user}
      case "SET_BOOKMARKS":
        return {...state, bookmarks: action.bookmarks}
      case "REMOVE_BOOKMARK":
        return {...state, bookmarks: action.bookmarks, currentUser: {...state.currentUser, restaurants: action.bookmarks}}
      case "CHANGE_BOOKMARKS":
        return {...state, bookmarks: action.bookmarks, currentUser: {...state.currentUser, restaurants: action.bookmarks}}
      case "UPDATE_BOOKMARKS":
        return {...state, currentUser: {...state.currentUser, restaurants:[...state.currentUser.restaurants,action.restaurant]}, bookmarks: [...state.bookmarks, action.restaurant]}
      case 'SET_ALL_FRIENDS':
        return {...state, friends: action.friends }
      case 'CLEAR_CURRENT_USER':
        return {...state, currentUser: {} }
      case 'SET_RECOMMENDED_FRIENDS':
        return {...state, recFriends: action.recFriends}
      case "SET_FIND_FRIENDS_USERS":
        return {...state, findFriends: action.users}
      case "SIGN_OUT_USER_SUCCESS":
        return initialState
      case "SET_CURRENT_POSITION":
        return {...state, position: action.currentPosition}
      case "SET_RESTAURANTS":
        return {...state, restaurants: action.restaurants}
      case "SET_RESTAURANT":
        return {...state, restaurant: action.restaurant}
      default:
        return state
  }
}

export default rootReducer

