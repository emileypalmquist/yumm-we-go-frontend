import React, {Component} from 'react'
import Bookmarks from '../components/bookmarks'

class BookmarksContainer extends Component {
  render() {
    return (
      <>
        <div className="left">
          <Bookmarks status={'Favorites'} message={'You have no favorite restaurants'}/>
        </div>
        <div className="right">
          <Bookmarks status={'Saved For Later'} message={'You have no restaurants saved for later'}/>
        </div>
      </>
    )
  }
}

export default BookmarksContainer