import React, {Component} from 'react'
import { connect } from 'react-redux'
import removeBookmark from '../actions/removeBookmark'
import changeBookmarks from '../actions/changeBookmarks'
import fiveStars from '../images/regular_5.png'
import fourStars from '../images/regular_4.png'
import fourHalfStars from '../images/regular_4_half.png'
import threeStars from '../images/regular_3.png'
import threeHalfStars from '../images/regular_3_half.png'
import twoStars from '../images/regular_2.png'
import twoHalfStars from '../images/regular_2_half.png'
import oneStars from '../images/regular_1.png'
import oneHalfStars from '../images/regular_1_half.png'

class BookmarkRestaurantListItem extends Component {
  handleRemoveClick = (e) => {
    this.props.updateBookmarks(this.props.restaurant)
    fetch(`http://localhost:3000/restaurants/${this.props.restaurant.id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
        "Accept": "application/json"
      }
    })
      .then(resp => resp.json())
      .then( this.props.removeBookmark(e, this.props.restaurant.id, this.props.bookmarks) ) 
  }

  handleAddClick = (e) => {
    this.props.updateAllBookmarks(this.props.restaurant)
    fetch(`http://localhost:3000/restaurants/${this.props.restaurant.id}`, {
      method: 'PATCH',
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        restaurant: {
          favorite: true
        }
      })
    })
      .then(resp => resp.json())
      .then(data => console.log(data))
      //  b  ) 
  }

  render() {
    const {restaurant, button} = this.props
    return (
      <div className="card">
        <h5>{restaurant.name}</h5>
        <h6>{restaurant.category}</h6>
        {restaurant.rating === 5 && <><img src={fiveStars} alt="5"/> <br/></>}
        {restaurant.rating === 4 && <><img src={fourStars} alt="4"/> <br/></>}
        {restaurant.rating === 4.5 && <><img src={fourHalfStars} alt="4.5" alt="4.5"/> <br/></>}
        {restaurant.rating === 3 && <><img src={threeStars} alt="3"/> <br/></>}
        {restaurant.rating === 3.5 && <><img src={threeHalfStars} alt="3.5"/> <br/></>}
        {restaurant.rating === 2 && <><img src={twoStars} alt="2"/> <br/></>}
        {restaurant.rating === 2.5 && <><img src={twoHalfStars} alt="2.5"/> <br/></>}
        {restaurant.rating === 1 && <><img src={oneStars} alt="1"/> <br/></>}
        {restaurant.rating === 1.5 && <><img src={oneHalfStars} alt="1.5"/> <br/></>}
        <h6>{restaurant.location}</h6>
        {button ? <><button onClick={this.handleAddClick}>Add To Favorites</button>  <button onClick={(e) => this.handleRemoveClick(e)}>Remove</button></> :
        <button onClick={(e) => this.handleRemoveClick(e)}>Remove</button>}
      </div>
    )
  }
}

const mapsToDispatchProps = dispatch => {
  return{
    removeBookmark: (e, bMId, bms) => dispatch(removeBookmark(e, bMId, bms)),
    changeBookmarks: (restaurant, bookmarks) => dispatch(changeBookmarks(restaurant, bookmarks))
  }
}

const mapStateToProps = state => {
  return {
    bookmarks: state.bookmarks
  }
}

export default connect(mapStateToProps, mapsToDispatchProps)(BookmarkRestaurantListItem) 