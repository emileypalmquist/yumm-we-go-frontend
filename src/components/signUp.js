import React, {Component} from 'react'

class SignUp extends Component {

  //need to add listeners and onclick logic
  render() {
    return (
      <form id='sign-up'>
        <label htmlFor='firstName'>First Name </label>
        <input type='text' id='firstName'></input>
        <br />
        <label htmlFor='lastName'>Last Name </label>
        <input type='text' id='lastName'></input>
        <br />
        <label htmlFor='email'>Email </label>
        <input type='text' id='email'></input>
        <br />
        <label htmlFor='birthday'>Date of Birth </label>
        <input type='date' id='birthday'></input>
        <br />
        <label htmlFor='username'>Username </label>
        <input type='text' id='username'></input>
        <br />
        <label htmlFor='password'>Password</label>
        <input type='text' id='password'></input>
        <br />
        <input type='submit' value='Sign Up'></input>
      </form>
    )
  }
}

export default SignUp