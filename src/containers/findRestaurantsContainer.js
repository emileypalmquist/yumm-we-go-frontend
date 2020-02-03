import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'

import MapContainer from '../components/mapContainer'
import FindResFormCategory from '../components/findResFormCategory'
import SearchListContainer from './searchListContainer'
import Restaurant from '../components/restaurant'
import setRestaurants from '../actions/setRestaurants'
import setRestaurant from '../actions/setRestaurant'

class FindRestaurantsContainer extends Component {
   

  yelpResults = (rest) => {
    this.props.setRestaurants(rest)
    
  }

  singleRestaurant = (rest) => {
    this.props.setRestaurant(rest)
    
  }



  render() {
      return (
        <Router>
        <div className="split-screen">
            <Switch>
              <Route exact path='/find-restaurant' render={() => <FindResFormCategory position={this.props.position} yelpResults={this.yelpResults} />} />
              <Route exact path='/find-restaurant/results' render={() => <SearchListContainer restaurants={this.props.restaurants} singleRestaurant={this.singleRestaurant}/> } />
              <Route exact path='/find-restaurant/result' render={()=> <Restaurant restaurant={this.props.restaurant}/>} />
            </Switch>
            <MapContainer position={this.props.position} restaurants={this.props.restaurants} restaurant={this.props.restaurant}/>
          </div>
        </Router>
      )
    }
  
}

const mapStateToProps = state => {
  return {
    position: state.position,
    restaurants: state.restaurants,
    restaurant: state.restaurant
  }
}

const mapsToDispatchProps = dispatch => {
  return{
    setRestaurant: (rest) => dispatch(setRestaurant(rest)),
    setRestaurants: (rest) => dispatch(setRestaurants(rest))
  }
}


export default connect(mapStateToProps, mapsToDispatchProps)(FindRestaurantsContainer) 