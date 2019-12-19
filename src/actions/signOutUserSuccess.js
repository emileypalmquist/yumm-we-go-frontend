const signOutUserSuccess = () => {
  return (dispatch) => {
    dispatch({ type: "SIGN_OUT_USER_SUCCESS" })
    localStorage.clear()
  }
}

export default signOutUserSuccess;