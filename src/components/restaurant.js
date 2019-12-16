import React, {Component} from 'react'

class Restaurant extends Component {
  //need to figure out how to route them to directions page for particular restaurant location
  render() {
    return (
      <div className="right">
        <h2>Restaurant Name</h2>
        <h6>category</h6>
        <h6>location</h6>
        <h6>rating</h6>
        <h6>hours</h6>
        <a href='https://www.google.com/maps' alt='failed'>Get Directions</a> <br />
        <button>Add to Favorites</button>
        <button>Save for Later</button>
      </div>
    )
  }
}

export default Restaurant