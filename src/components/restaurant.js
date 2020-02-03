import React, {Component} from 'react'
import { connect } from 'react-redux'
import updateBookmarks from '../actions/updateBookmarks'
import fiveStars from '../images/regular_5.png'
import fourStars from '../images/regular_4.png'
import fourHalfStars from '../images/regular_4_half.png'
import threeStars from '../images/regular_3.png'
import threeHalfStars from '../images/regular_3_half.png'
import twoStars from '../images/regular_2.png'
import twoHalfStars from '../images/regular_2_half.png'
import oneStars from '../images/regular_1.png'
import oneHalfStars from '../images/regular_1_half.png'

class Restaurant extends Component {
  //need to figure out how to route them to directions page for particular restaurant location

  handleClick = (e, status) => {
    const address = this.props.restaurant.location.display_address[0] + " " + this.props.restaurant.location.display_address[1]
    this.props.updateBookmarks(e, 
      {restaurant: this.props.restaurant, currentUser: this.props.currentUser, address: address, favorite: status }
    )

  }

  render() {
    const {restaurant, bookmarks} = this.props
    return (
      <div className="r-side">
        <h2>{restaurant.name}</h2>
        {restaurant.image_url ? <img src={restaurant.image_url} width="300" height="300" alt='none'/> : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOEEjYiBSnjsZMcI9utAN-CRjCkm3kzVq1xoThEpwgg0beeM7_&s}' width="300" height="300" alt='none'/> }
        <h6>{restaurant.categories[0].title}</h6>
        <h6>{restaurant.location.display_address.map((add) => add + ' ')}</h6>
        {restaurant.rating === 5 && <><img src={fiveStars} alt="5"/> <br/></>}
        {restaurant.rating === 4 && <><img src={fourStars} alt="4"/> <br/></>}
        {restaurant.rating === 4.5 && <><img src={fourHalfStars} alt="4.5"/> <br/></>}
        {restaurant.rating === 3 && <><img src={threeStars} alt="3"/> <br/></>}
        {restaurant.rating === 3.5 && <><img src={threeHalfStars} alt="3.5"/> <br/></>}
        {restaurant.rating === 2 && <><img src={twoStars} alt="2"/> <br/></>}
        {restaurant.rating === 2.5 && <><img src={twoHalfStars} alt="2.5"/> <br/></>}
        {restaurant.rating === 1 && <><img src={oneStars} alt="1"/> <br/></>}
        {restaurant.rating === 1.5 && <><img src={oneHalfStars} alt="1.5"/> <br/></>}
        {/* <h6>Rating: {restaurant.rating}</h6> */}
        <a href={restaurant.url}>Find on Yelp</a><br/>
        { !bookmarks.map(bm => bm.name).includes(restaurant.name) &&
        <>
        <button onClick={(e) => this.handleClick(e, true)}>Add to Favorites</button> 
        <button onClick={(e) => this.handleClick(e, false)}>Save for Later</button> 
        </>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    bookmarks: state.bookmarks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBookmarks: (e, state) => dispatch(updateBookmarks(e, state))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Restaurant);