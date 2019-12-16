import React, {Component} from 'react'

class Nav extends Component {

  // need to add logic when someone is logged in, sign in, login
 
  render() {
    return (
      <div className="nav">
        <div className='nav-left'>Find Me Food</div>
        <div className='nav-left'>Bookmarks</div>
        <div className='nav-left'>Friends</div>
        <div className='nav-right'>Sign Out</div>
      </div>
    )
  }
}

export default Nav