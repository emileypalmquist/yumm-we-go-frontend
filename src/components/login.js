import React, {Component} from 'react'

class Login extends Component {
  //need to add listeners and onclick logic
  render() {
    return (
      <form>
        <label htmlFor='username'>Username </label>
        <input type='text' id='username'></input>
        <br />

        <label htmlFor='password'>Password </label>
        <input type='text' id='password'></input>
        <br/>
        <input type='submit' value='Submit'></input>
      </form>
    )
  }
}

export default Login