import React, {Component} from 'react'

class FindResForm extends Component {
  //need to add listeners and onclick logic
  render() {
    return (
      <div className="right">
        {true ? 
        (
        <form>
          <h2>What is Your Mood?</h2>
          <select>
            <option value='happy'>Happy</option>
            <option value='sad'>Sad</option>
            <option value='hangry'>Hangry</option>
            <option value='stressed'>Stressed</option>
          </select>
          <input type='submit' value='Submit' />
        </form>) :
          (<form>
            <h2>Check the Food Categories that Sound Good</h2>
            <input type="checkbox" id="mexican" value="mexican" />
            <label htmlFor='mexican'>Mexican</label>

            <input type="checkbox" id="american" value="american" /> 
            <label htmlFor='american'>American</label>

            <input type="checkbox" id="italian" value="italian" /> 
            <label htmlFor='italian'>Italian</label>

            <input type="checkbox" id="japanese" value="japanese" /> 
            <label htmlFor='japanese'>Japanese</label>

            <input type="checkbox" id="chinese" value="chinese" /> 
            <label htmlFor='chinese'>Chinese</label>

            <input type="checkbox" id="greek" value="greek" /> 
            <label htmlFor='greek'>Greek</label>

            <input type="checkbox" id="indian" value="indian" /> 
            <label htmlFor='indian'>Indian</label>

            <input type="checkbox" id="thai" value="thai" /> 
            <label htmlFor='thai'>Thai</label>

            <input type="checkbox" id="french" value="french"></input> 
            <label htmlFor='french'>French</label>
          </form>)
        }
      </div>
    )
  }
}

export default FindResForm