import React, {Component} from 'react'

class FindResFormMood extends Component {
  //need to add listeners and onclick logic
  render() {
    return (
      <form>
        <h2>What is Your Mood?</h2>
        <select>
          <option value='happy'>Happy</option>
          <option value='sad'>Sad</option>
          <option value='hangry'>Hangry</option>
          <option value='stressed'>Stressed</option>
        </select>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default FindResFormMood