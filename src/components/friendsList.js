import React, {Component} from 'react'
import Friend from './friend'

class FriendsList extends Component {
  //need logic for what to display: users, add friends
  render() {
    return (
      <div className={this.props.className}>
        {this.props.status && <h5>{this.props.status}</h5>}
        will have all friends or recommended
        <Friend />
      </div>
    )
  }
}

export default FriendsList