import React, { Component } from 'react'
import Map from '../components/map'
import FindResForm from '../components/findResForm'
import SearchListContainer from './searchListContainer'
import Restaurant from '../components/restaurant'

class FindRestaurantsContainer extends Component {
  // need to add logic when to display which components
  

  render() {
    
      return (
        <div>
          <Map />
          <Restaurant />
        </div>
      )
    }
  
}


export default FindRestaurantsContainer