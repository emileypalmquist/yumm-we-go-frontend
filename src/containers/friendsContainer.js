import React, {Component} from 'react'
import FriendsList from '../components/friendsList'

class FriendsContainer extends Component {
  //need data and logic for having no friends
  render() {
    return (
      <div>
        <FriendsList className="left" />
        <FriendsList className="right" status='Recommended Friends'/>
      </div>
    )
  }
}

export default FriendsContainer