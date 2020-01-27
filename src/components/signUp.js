import React, {Component} from 'react'
import { connect } from 'react-redux'
import signUp from '../actions/signUp'


class SignUp extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    birthday: '',
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  //need to add listeners and onclick logic
  render() {
    return (
      <form id='sign-up' onSubmit={(e) => this.props.signUp(e, this.state, this.props.history)} className="form">
        <label htmlFor='firstName'>First Name </label>
        <input type='text' name='firstName' onChange={this.handleChange}/>
        <br />
        <label htmlFor='lastName'>Last Name </label>
        <input type='text' name='lastName' onChange={this.handleChange} />
        <br />
        <label htmlFor='email'>Email </label>
        <input type='text' name='email' onChange={this.handleChange}/>
        <br />
        <label htmlFor='birthday'>Date of Birth </label>
        <input type='date' name='birthday' onChange={this.handleChange}/>
        <br />
        <label htmlFor='username'>Username </label>
        <input type='text' name='username' onChange={this.handleChange}/>
        <br />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' onChange={this.handleChange}/>
        <br />
        <input type='submit' value='Sign Up'/>
        <p id='signUpError'></p>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
      signUp: (e, state, history) => dispatch(signUp(e, state, history))
  }
}

export default connect(null, mapDispatchToProps)(SignUp);
