import React, {Component} from 'react'

class Friend extends Component {
  //need data and add onclick to render users profile
  render() {
    const {user} = this.props
    return (
    <h6>{user.first_name + " " + user.last_name}</h6>
    
    )
  }
}

export default Friend