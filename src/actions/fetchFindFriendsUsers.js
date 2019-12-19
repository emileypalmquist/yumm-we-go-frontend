const fetchFindFriendsUsers= () => {
  return (dispatch) => {
      return fetch('http://localhost:3000/api/v1/find-friends', {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
            "Accept": "application/json"
          }
      })
      .then(res => res.json())
      .then(users => {
          dispatch({ type: "SET_FIND_FRIENDS_USERS", users: users})
      })
  }
}

export default fetchFindFriendsUsers