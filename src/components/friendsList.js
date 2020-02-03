import React, {Component} from 'react'
import Friend from './friend'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

class FriendsList extends Component {
  //need styling for left div so at top not bottom where right ends
  

  render() {
    const { status, recFriends, friends, className } = this.props
    return (
      <>
      {className === 'left' && 
        <div className={className}>{ friends.length > 0 ? 
          (friends.map(friend => {
          return <Friend key={friend.id} user={friend}/> })
          ) : (<>
          <h6>You currently have no Friends :(</h6>
          <Link to="find-friends" ><button>Add Friends</button></Link> 
          </>)}
        </div>
      }
      
      { className === 'right' && <div className={className}>
          <h5>{status}</h5>
          {recFriends.map(user => <Friend key={user.id} user={user} />)}
        </div> 
      }
      </>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    recFriends: state.recFriends
  }
}

export default connect(mapStateToProps)(FriendsList);