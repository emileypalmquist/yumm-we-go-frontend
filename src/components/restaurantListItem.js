import React, {Component} from 'react'
import { Link } from "react-router-dom"
import fiveStars from '../images/regular_5.png'
import fourStars from '../images/regular_4.png'
import fourHalfStars from '../images/regular_4_half.png'
import threeStars from '../images/regular_3.png'
import threeHalfStars from '../images/regular_3_half.png'
import twoStars from '../images/regular_2.png'
import twoHalfStars from '../images/regular_2_half.png'
import oneStars from '../images/regular_1.png'
import oneHalfStars from '../images/regular_1_half.png'

class RestaurantListItem extends Component {
  //need data to display
  //add on click to go to single restaurant
  handleRestaurant = () => {
    this.props.singleRestaurant(this.props.restaurant)
  }

  render() {
    const {restaurant} = this.props
    return (
      <>
      { restaurant &&
      <Link to= "/find-restaurant/result" style={{paddingLeft: 13, textDecoration: 'none', color: 'black'}}><div className="card" onClick={this.handleRestaurant}>
        <h5>{restaurant.name}</h5>
        <h6>{restaurant.categories ? restaurant.categories[0].title : restaurant.category}</h6>
        {restaurant.rating === 5 && <><img src={fiveStars} alt="5"/> <br/></>}
        {restaurant.rating === 4 && <><img src={fourStars} alt="4"/> <br/></>}
        {restaurant.rating === 4.5 && <><img src={fourHalfStars} alt="4.5"/> <br/></>}
        {restaurant.rating === 3 && <><img src={threeStars} alt="3"/> <br/></>}
        {restaurant.rating === 3.5 && <><img src={threeHalfStars} alt="3.5"/> <br/></>}
        {restaurant.rating === 2 && <><img src={twoStars} alt="2"/> <br/></>}
        {restaurant.rating === 2.5 && <><img src={twoHalfStars} alt="2.5"/> <br/></>}
        {restaurant.rating === 1 && <><img src={oneStars} alt="1"/> <br/></>}
        {restaurant.rating === 1.5 && <><img src={oneHalfStars} alt="1.5"/> <br/></>}
      </div></Link>
      }
      </>
    )
  }
}

export default RestaurantListItem