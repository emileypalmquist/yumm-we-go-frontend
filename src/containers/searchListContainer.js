import React, {Component} from 'react'
import RestaurantListItem from '../components/restaurantListItem'
import { Link } from "react-router-dom"


class SearchListContainer extends Component {
  //need data and logic for displaying restaurant list items
  handleClick = () => {
   const rest = this.props.restaurants[Math.floor(Math.random() * this.props.restaurants.length)]
   this.props.singleRestaurant(rest)
  }


  render() {
   
    const {restaurants, singleRestaurant} = this.props
    
    return (
      <>
      {restaurants.length > 0 ? 
        <div className="side">
           <Link to="/find-restaurant/result"><button onClick={this.handleClick}>Give Me One</button></Link>
          {restaurants.map(rest => 
          <RestaurantListItem key={rest.id} restaurant={rest} singleRestaurant={singleRestaurant}/> )}
         
           
        </div>
        : 
        <div>Fetching Restaurants...</div>
        }
      </>
    )
  }
}

export default SearchListContainer