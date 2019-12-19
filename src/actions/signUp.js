const signUp = (e, state, history) => {
  e.preventDefault();

  return (dispatch) => {
      fetch('http://localhost:3000/api/v1/users',{
          method: "POST",
          headers: {
              "Content-type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
              user: {
                  first_name: state.firstName,
                  last_name: state.lastName,
                  username: state.username,
                  email: state.email,
                  password: state.password,
                  birthday: state.birthday 
              }
          })
      })
      .then(resp => resp.json())
      .then(data => {
          if (data.user) {
            dispatch({ type: "SET_CURRENT_USER", user: data.user })
            dispatch({ type: "ADD_USER", user: data.user })
            localStorage.setItem('jwt', data.jwt)
            history.push('/find-restaurant')
          } else {
            document.getElementById('signUpError').innerText = data.error
          }
      })
  }


}

export default signUp