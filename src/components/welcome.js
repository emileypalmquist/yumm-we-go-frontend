import React, {Component} from 'react'

class Welcome extends Component {
  //need to add listeners and onclick logic
  render() {
    return (
      <div className='welcome'>
        <div className="text">
          <h1>Welcome to Just a Bite</h1>
          <h4>Are You indecisive and need help finding a place to eat?</h4>
          <h4>Then login or signup to access the restaurant finder you need!</h4>
        </div>
      </div>
    )
  }
}

export default Welcome