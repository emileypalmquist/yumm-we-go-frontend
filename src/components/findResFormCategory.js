import React, {Component} from 'react'
import { Link } from "react-router-dom"

class FindResFormCategory extends Component {
  state = {
    chosenCategories: []
  }
  
  //fetching restaurants from yelp api
  handleSubmit = (e) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=${this.props.position.lat}&longitude=${this.props.position.lng}&radius=4828&categories=${this.state.chosenCategories}&open_now=true&sort_by=distance&limit=10`, {
      method: 'GET',
      headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "Access-Control-Allow-Origin":"*",
        "Authorization": `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    })
    .then(resp => resp.json())
    .then(data => this.props.yelpResults(data.businesses))
  }

  handleChange = (e) => {
    if (this.state.chosenCategories.includes(e.target.value)){
      this.setState({
        chosenCategories: [...this.state.chosenCategories.filter(el => el !== e.target.value)]
      })
    } else {
      this.setState({
        chosenCategories: [...this.state.chosenCategories, e.target.value]
      })
    }
  }

  render() {
    return (
      <form className="form">
        <h2>Check the Food Categories that Sound Good</h2>
        <input type="checkbox" id="mexican" value="mexican" onClick={this.handleChange}/>
        <label htmlFor='mexican'>Mexican</label>

        <input type="checkbox" id="american" value="american" onClick={this.handleChange} /> 
        <label htmlFor='american'>American</label>

        <input type="checkbox" id="italian" value="italian" onClick={this.handleChange} /> 
        <label htmlFor='italian'>Italian</label>

        <input type="checkbox" id="japanese" value="japanese" onClick={this.handleChange} /> 
        <label htmlFor='japanese'>Japanese</label>

        <input type="checkbox" id="chinese" value="chinese" onClick={this.handleChange} /> 
        <label htmlFor='chinese'>Chinese</label>

        <input type="checkbox" id="greek" value="greek" onClick={this.handleChange} /> 
        <label htmlFor='greek'>Greek</label>

        <input type="checkbox" id="indian" value="indian" onClick={this.handleChange} /> 
        <label htmlFor='indian'>Indian</label>

        <input type="checkbox" id="thai" value="thai" onClick={this.handleChange} /> 
        <label htmlFor='thai'>Thai</label>

        <input type="checkbox" id="french" value="french" onClick={this.handleChange}></input> 
        <label htmlFor='french'>French</label>

    <Link to="/find-restaurant/results" >{this.state.chosenCategories.length !== 0 && <input onClick={this.handleSubmit} type="submit" value="Find Restaurants"/>}</Link>
      </form>
    )
  }
}

export default FindResFormCategory