import React, {Component} from 'react'
import BookmarkRestaurantListItem from './bookmarkRestaurantListItem'

class Bookmarks extends Component {
  render() {
    const {restaurants, message, status, button, updateBookmarks, updateAllBookmarks} = this.props
    return (
      <div className='bookmark'>
        <h2>{status}</h2>
        { restaurants.length > 0 ?
        (restaurants.map( restaurant =>
        <BookmarkRestaurantListItem restaurant={restaurant} key={restaurant.id} button={button} updateBookmarks={updateBookmarks} updateAllBookmarks={updateAllBookmarks}/> ) ):
        (<h5>{message}</h5>)
        }
        
      </div>
    )
  }
}

export default Bookmarks