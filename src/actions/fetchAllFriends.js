const fetchAllFriends= () => {
  return (dispatch) => {
      return fetch('http://localhost:3000/api/v1/friends', {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
            "Accept": "application/json"
          }
      })
      .then(res => res.json())
      .then(friends => {
          dispatch({ type: "SET_ALL_FRIENDS", friends: friends})
      })
  }
}

export default fetchAllFriends