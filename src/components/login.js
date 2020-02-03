import React, {Component} from 'react'
import { connect } from 'react-redux'
import login from '../actions/login'
import { Link } from "react-router-dom"


class Login extends Component {
  //need to add listeners and onclick logic
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    
    return (
      <form onSubmit={(e) => this.props.login(e, this.state, this.props.history)} className="form">
        <label htmlFor='username'>Username </label>
        <input type='text' name='username' onChange={this.handleChange} />
        <br />

        <label htmlFor='password'>Password </label>
        <input type='password' name='password' onChange={this.handleChange} />
        <br/>
        <input type='submit' value='Login'/>
        <p id='loginError'></p>
        <Link to="/signUp"><div>Sign Up</div></Link>
        <p id='loginError'></p>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
      login: (e, state, history) => dispatch(login(e, state, history))
  }
}

export default connect(null, mapDispatchToProps)(Login);