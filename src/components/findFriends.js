import React, {Component} from 'react'
import Friend from './friend'
import { connect } from 'react-redux'

class FindFriends extends Component {
 
  //styling so split half down screen
  render() {
    const {findFriends} = this.props
    return (
      <div>
        {findFriends.map(user => <Friend key={user.id} user={user} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    findFriends: state.recFriends
  }
}

export default connect(mapStateToProps)(FindFriends);