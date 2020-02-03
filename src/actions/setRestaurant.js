
const setRestaurant= (rest) => {

  return (dispatch) => {
    dispatch({ type: "SET_RESTAURANT", restaurant: rest})
  }
}

export default setRestaurant