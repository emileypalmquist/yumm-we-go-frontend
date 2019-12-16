import React, {Component} from 'react'
import RestaurantListItem from '../components/restaurantListItem'


class SearchListContainer extends Component {
  //need data and logic for displaying restaurant list items
  render() {
    return (
      <div className="right">
        this will contain five restaurants
        <RestaurantListItem />
        <button>Give Me One</button>
      </div>
    )
  }
}

export default SearchListContainer