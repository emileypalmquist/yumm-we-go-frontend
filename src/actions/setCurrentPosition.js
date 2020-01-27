const setCurrentPosition = () => {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(position => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      dispatch({ type: "SET_CURRENT_POSITION", currentPosition: pos })
    })
  } 
  
}

export default setCurrentPosition;