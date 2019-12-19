import React, {Component} from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import signOutUserSuccess from '../actions/signOutUserSuccess'

class Nav extends Component {

  // need to add logic when someone is logged in, sign in, login
  handleClick = () => {
    this.props.signOutUserSuccess()
  }

  render() {
    return (
      <div className="nav">
        {this.props.currentUser !== null ?
        (<><Link to="/find-restaurant"><div className='nav-left'>Find Me Food</div></Link>
        <Link to="/bookmarks"><div className='nav-left'>Bookmarks</div></Link>
        <Link to="/friends"><div className='nav-left'>Friends</div></Link>
        <Link to="/"><div className='nav-right' onClick={this.handleClick} >Sign Out</div></Link></>) : <Link to="/login"><div className='nav-right'> Login</div></Link>
        }
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}
const mapsToDispatchProps = dispatch => {
  return{
    signOutUserSuccess: () => dispatch(signOutUserSuccess())
  }
}

export default connect(mapStateToProps, mapsToDispatchProps)(Nav);