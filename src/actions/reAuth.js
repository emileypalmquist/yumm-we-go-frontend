const reAuth = () => {
  return (dispatch) => {
    
    if (localStorage.getItem('jwt')){
      return fetch('http://localhost:3000/api/v1/reauth', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Accept': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "SET_BOOKMARKS", bookmarks: data.user.restaurants})
        dispatch({ type: "SET_CURRENT_USER", user: data.user }) 
      })
    } else {
        return null
    }
  }
}

export default reAuth;