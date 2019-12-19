import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import SignUp from './components/signUp'
import Login from './components/login'
import Nav from './components/nav'
import BookmarksContainer from './containers/bookmarksContainer'
import FindRestaurantsContainer from './containers/findRestaurantsContainer'
import FriendsContainer from './containers/friendsContainer'
import FindFriends from './components/findFriends'
import OtherUserProfile from './components/otherUserProfile'
import Welcome from './components/welcome'

import reAuth from './actions/reAuth'
import fetchAllFriends from './actions/fetchAllFriends'
import fetchRecommendedFriends from './actions/fetchRecommendedFriends'
import fetchFindFriendsUsers from './actions/fetchFindFriendsUsers'

import './App.css';

class App extends Component {

  //need to add logic which view to show when
  componentDidMount() {
    this.props.reAuth()
  }

  componentDidUpdate() {
   
    if (this.props.recFriends.length === 0 && this.props.currentUser){
      this.props.fetchAllFriends()
      this.props.fetchRecommendedFriends()
      this.props.fetchFindFriendsUsers()
    }
  }
  
  render() {
  return (
    <div className="App">
      <Router>
      <Nav />
        <Switch>
          <Route exact path='/' component ={Welcome}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>
          { this.props.currentUser !== null ?
            <>
              
              <Switch>
              <Route exact path='/bookmarks' component={BookmarksContainer} />
              <Route exact path='/find-restaurant' component={FindRestaurantsContainer}/>
              <Route exact path='/friends' component={FriendsContainer}/>
              <Route exact path='/find-friends' component={FindFriends}/>
              <Route exact path='/user/:id' component={OtherUserProfile}/>
              </Switch>
            </> : <>
            <p>Must Login to Access this Page</p>
            </>
            }
        </Switch>
      </Router>
    </div>
  );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    recFriends: state.recFriends
  }
}

const mapsToDispatchProps = dispatch => {
  return{
    reAuth: () => dispatch(reAuth()),
    fetchAllFriends: ()=> dispatch(fetchAllFriends()),
    fetchRecommendedFriends: () => dispatch(fetchRecommendedFriends()),
    fetchFindFriendsUsers: () => dispatch(fetchFindFriendsUsers())
  }
}
  
export default connect(mapStateToProps, mapsToDispatchProps)(App);
