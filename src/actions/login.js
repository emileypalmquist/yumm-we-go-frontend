const login = (e, state, history) => {
  e.preventDefault();

  return (dispatch) => {
      fetch('http://localhost:3000/api/v1/login',{
          method: "POST",
          headers: {
              "Content-type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
              user: {
                username: state.username,
                password: state.password 
              }
          })
      })
      .then(resp => resp.json())
      .then(data => {
        if (data.user){
          localStorage.setItem('jwt', data.jwt)
          dispatch({ type: "SET_CURRENT_USER", user: data.user })
        } else {
          document.getElementById('loginError').innerText = data.message
        }
      })
      .then(() => history.push('/find-restaurant'))
  }


}

export default login