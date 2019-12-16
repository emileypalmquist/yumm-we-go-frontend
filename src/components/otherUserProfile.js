import React, {Component} from 'react'
import RestaurantListItem from './restaurantListItem'

class OtherUserProfile extends Component {
  //add data, logic to add friend status and show restaurants
  render() {
    return (
      <>
        <div className="left">
          <h2>User name</h2>
          <button>Friend Status</button>
        </div>
        <div className="right">
          <div >
            <h3>(User first name)'s Favorite Restaurants</h3>
            <RestaurantListItem />
          </div>
          <div>
            <h3>(User first name) Saved For Later</h3>
            <RestaurantListItem />
          </div>
        </div>
      </>
    )
  }
}

export default OtherUserProfile