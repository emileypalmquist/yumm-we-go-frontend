import React, {Component} from 'react'
import RestaurantListItem from './restaurantListItem'

class Bookmarks extends Component {
  //need to add data and logic with displaying restaurant list item or you have no favorites
  render() {
    return (
      <div>
        <h2>{this.props.status}</h2>
        <RestaurantListItem />
      </div>
    )
  }
}

export default Bookmarks