import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignUp from './components/signUp'
import Login from './components/login'
import Nav from './components/nav'
import BookmarksContainer from './containers/bookmarksContainer'
import FindRestaurantsContainer from './containers/findRestaurantsContainer'
import FriendsContainer from './containers/friendsContainer'
import FindFriends from './components/findFriends'
import OtherUserProfile from './components/otherUserProfile'

import './App.css';

function App() {

  //need to add logic which view to show when

  return (
    <div className="App">
      <Nav />
      <OtherUserProfile />
    </div>
  );
}

export default App;
