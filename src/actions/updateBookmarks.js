const updateBookmarks= (e, state) => {

  //need to change location in body
  e.preventDefault();

  return (dispatch) => {
      return fetch('http://localhost:3000/restaurants', {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
            "Content-type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            restaurant: { 
              name: state.restaurant.name,
              category: state.restaurant.categories[0].title,
              location: state.address,
              hours: '',
              user_id: state.currentUser.id,
              rating: state.restaurant.rating,
              favorite: state.favorite
            }
          })
      })
      .then(resp => resp.json())
      .then(data => dispatch({ type: "UPDATE_BOOKMARKS", restaurant: data }))
  }
}

export default updateBookmarks