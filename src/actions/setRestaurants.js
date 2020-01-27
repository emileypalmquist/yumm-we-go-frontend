const setRestaurants= (rest) => {
  return (dispatch) => {
    dispatch({ type: "SET_RESTAURANTS", restaurants: rest})
  }
}

export default setRestaurants