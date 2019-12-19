const fetchRecommendedFriends= () => {
  return (dispatch) => {
      return fetch('http://localhost:3000/api/v1/recommendedFriends', {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
            "Accept": "application/json"
          }
      })
      .then(res => res.json())
      .then(recFriends => {
          dispatch({ type: "SET_RECOMMENDED_FRIENDS", recFriends: recFriends})
      })
  }
}

export default fetchRecommendedFriends