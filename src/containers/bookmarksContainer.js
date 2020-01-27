import React, {Component} from 'react'
import Bookmarks from '../components/bookmarks'


class BookmarksContainer extends Component {
  state = {
    favorites: [],
    savedForLater: []
  }
  
  componentDidMount() {
    if (this.props.bookmarks) {
      this.props.bookmarks.map( restaurant => {
        if (restaurant.favorite === true) {
          this.setState(prevState => {
            return {favorites: prevState.favorites.concat(restaurant)}
          })
        } else {
          this.setState( prevState => {
           return { savedForLater: prevState.savedForLater.concat( restaurant)}
          })
        }
      } )
    }
  }

  updateBookmarks = (restaurant) => {
    
    if (restaurant.favorite === true) {
      this.setState(prevState => {
        return {favorites: prevState.favorites.filter(rest => rest.id !== restaurant.id)}
      })
    } else if (restaurant.favorite === false){
      this.setState(prevState => {
        return {savedForLater: prevState.savedForLater.filter(rest => rest.id !== restaurant.id)}
      })
    }
    
  }

  updateAllBookmarks = (restaurant) => {
    this.setState(prevState => {
      return {favorites: prevState.favorites.concat(restaurant), savedForLater: prevState.savedForLater.filter(rest => rest.id !== restaurant.id)}
    })
  }

  render() {
    return (
      <>
        <div className="split-screen">
          <Bookmarks status={'Favorites'} restaurants={this.state.favorites} message={'You have no favorite restaurants'} button={false} updateBookmarks={this.updateBookmarks} updateAllBookmarks={this.updateAllBookmarks}/>
          <Bookmarks status={'Saved For Later'} restaurants={this.state.savedForLater} message={'You have no restaurants saved for later'} button={true} updateBookmarks={this.updateBookmarks} updateAllBookmarks={this.updateAllBookmarks} />
        </div>
      </>
    )
  }
}


export default BookmarksContainer;